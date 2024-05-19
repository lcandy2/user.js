<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getTaskInfo } from "../lib/get-info";
import { decode } from "js-base64";
import { unsafeWindow } from "$";

interface File {
  name: string;
  content: string;
}

const props = defineProps<{
  isActive: { value: boolean };
}>();

const closeDialog = () => {
  props.isActive.value = false;
};

const files = ref<File[]>([]);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
  const window = unsafeWindow;
  const paths =
    window.taskChallengePath &&
    window.taskChallengePath.split("；").filter((value) => value !== "");
  if (paths) {
    for (const path of paths) {
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
        const file = {
          name: path,
          content: decode(res.content.content),
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
    return "获取代码失败，请刷新再试。";
  }
  return files.value
    .map((file) => `${file.name}\n${file.content}`)
    .join("\n\n");
});
</script>

<template>
  <v-card :loading="isLoading" title="全部代码">
    <v-textarea
      auto-grow
      max-rows="20"
      v-model="filesContent"
      placeholder="全部代码将在这里显示"
      persistent-placeholder
    >
    </v-textarea>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text="关闭" @click="closeDialog"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
