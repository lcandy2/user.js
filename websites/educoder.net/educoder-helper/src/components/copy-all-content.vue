<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { getTaskInfo } from "../lib/get-info";
import { decode } from "js-base64";
import { unsafeWindow } from "$";

interface File {
  name: string;
  content: string;
  visible: boolean;
}

const props = defineProps<{
  isActive: { value: boolean };
}>();

const closeDialog = () => {
  props.isActive.value = false;
};

const files = ref<File[]>([]);
const isLoading = ref(true);
const progress = ref(0);
const progressMessage = ref("");
const isError = ref(false);
const allChecked = ref(false);
const helperNotInstalled = ref(false);

onMounted(async () => {
  const window = unsafeWindow;
  if (window.educoderCopyHelper === undefined) {
    helperNotInstalled.value = true;
    isLoading.value = false;
    isError.value = true;
    return;
  }
  const paths =
    window.taskChallengePath &&
    window.taskChallengePath.split("；").filter((value) => value !== "");
  if (paths) {
    for (const [index, path] of paths.entries()) {
      progress.value = ((index + 1) / paths.length) * 100;
      progressMessage.value = `正在获取文件：${path}`;
      const { taskId } = getTaskInfo();
      const response = await fetch(
        `https://data.educoder.net/api/tasks/${taskId}/rep_content.json?path=${path}`,
        {
          credentials: "include",
          headers: {
            "X-EDU-Signature": window.xEduSignature || "",
            "X-EDU-Timestamp": window.xEduTimestamp || "",
            "X-EDU-Type": window.xEduType || "pc",
          },
        },
      );
      const res = await response.json();
      if (res && res.content && res.content.content) {
        const file: File = {
          name: path,
          content: decode(res.content.content),
          visible: true,
        };
        files.value.push(file);
      }
    }
  }
  isLoading.value = false;
  if (files.value.length === 0) {
    isError.value = true;
  }
});

const filesContent = computed(() => {
  if (isError.value) {
    if (helperNotInstalled.value) {
      return `获取代码失败！\n本插件需要《头歌复制助手 EduCoder Copy Helper》安装并启用后方可使用。\n请安装并启用后刷新页面再试。\n\nGreasy Fork 安装地址：https://greasyfork.org/scripts/495490\n\nScriptCat脚本猫 安装地址：https://scriptcat.org/script-show-page/1860`;
    }
    return "获取代码失败，请刷新再试。";
  }
  return files.value
  .filter((file) => file.visible)
    .map((file) => `${file.name}\n\`\`\`\n${file.content}\`\`\``)
    .join("\n\n");
});

watch(allChecked, (newValue) => {
  if (newValue) {
    files.value.forEach((file) => (file.visible = newValue));
  }
});

watch(
  () => files.value.map((file) => file.visible),
  (newValues) => {
    allChecked.value = newValues.every(Boolean);
  },
  { deep: true }
);
</script>

<template>
  <v-card :loading="isLoading" title="全部代码">
    <v-card-text>
      <v-checkbox-btn v-if="files.length" label="全选" v-model="allChecked" @click="() => {(allChecked) && (files.forEach((file) => (file.visible = false)))}"></v-checkbox-btn>
      <v-checkbox-btn
        v-for="(file, index) in files"
        :key="index"
        :label="file.name"
        v-model="file.visible"
      ></v-checkbox-btn>
      <v-textarea
        auto-grow
        v-model="filesContent"
        :disabled="isLoading"
        :readonly="isError || isLoading"
        placeholder="全部代码将在这里显示"
        :loading="isLoading"
        persistent-placeholder
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <div
        v-if="isLoading"
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1em;
        "
      >
        <v-progress-circular :model-value="progress"></v-progress-circular>
        <p class="text-body-2" style="margin: 0">{{ progressMessage }}</p>
      </div>
      <v-btn v-if="helperNotInstalled" text="安装《头歌复制助手 EduCoder Copy Helper》" variant="elevated" color="primary" href="https://greasyfork.org/scripts/495490" target="_blank"></v-btn>
      <v-btn v-if="helperNotInstalled" text="通过 ScriptCat 脚本猫安装" variant="text" color="primary" href="https://scriptcat.org/script-show-page/1860" target="_blank"></v-btn>
      <v-spacer></v-spacer>
      <v-btn text="关闭" @click="closeDialog"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
