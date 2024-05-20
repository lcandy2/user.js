<script setup lang="ts">
import { onMounted, ref } from "vue";
import { unsafeWindow } from "$";
import { getTaskInfo } from "../lib";
import { decode } from "js-base64";

const props = defineProps<{
  isActive: { value: boolean };
  setIsPersistent: (value: boolean) => void;
}>();

const closeDialog = () => {
  props.isActive.value = false;
};

const inProgress = ref(false);
const progress = ref(-1);
const progressMessage = ref("准备开始");
const isAvailable = ref(false);
const isError = ref(false);
const isWaitingForRefresh = ref(false);
const allPaths = ref<string[]>([]);

const handleReset = async () => {
  inProgress.value = true;
  props.setIsPersistent(true);

  if (allPaths.value.length === 0) {
    inProgress.value = false;
    isError.value = true;
    props.setIsPersistent(false);
    return;
  }

  for (const [index, path] of allPaths.value.entries()) {
    progress.value = ((index + 1) / allPaths.value.length) * 100;
    progressMessage.value = `正在重置：${path}`;
    const { taskId } = getTaskInfo();
    const response = await fetch(
      `https://data.educoder.net/api/tasks/${taskId}/reset_original_code.json?path=${path}`,
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
    if (res && res.content) {
      console.info(`重置成功：${path}`)
    } else {
      console.error(`重置失败：${path}`)
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  progress.value = -1
  progressMessage.value = "等待刷新"
  isWaitingForRefresh.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  window.location.reload();
  progress.value = 100;
  progressMessage.value = "重置完成，等待页面刷新";
  props.setIsPersistent(false);
};

onMounted(() => {
  const window = unsafeWindow;
  if (window.educoderCopyHelper === undefined) {
    isAvailable.value = false;
    return;
  }
  isAvailable.value = true;
  const paths =
    window.taskChallengePath &&
    window.taskChallengePath.split("；").filter((value) => value !== "");
  if (paths) {
    allPaths.value = paths;
  }
});

const handleRefresh = () => {
  window.location.reload();
};
</script>

<template>
  <v-card
    prepend-icon="mdi-alert"
    :title="isError ? '重置失败' :isAvailable ? '重置全部代码？' : '依赖插件未安装'"
    :loading="inProgress"
  >
    <v-card-text v-if="inProgress">
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1em;
        "
      >
      <v-progress-circular
        :model-value="progress"
        :indeterminate="progress === -1"
      ></v-progress-circular>
      <p class="text-body-1" style="margin: 0">{{ progressMessage }}</p>
      </div>
    </v-card-text>
    <v-card-text v-else-if="isError">
      重置失败，请刷新再试。
    </v-card-text>
    <v-card-text v-else-if="isAvailable">
      你确定要将所有代码恢复为初始状态？<br /><br />
      请注意，此操作不可撤销，所有未保存的代码将会丢失。
    </v-card-text>
    <v-card-text v-else>
      本插件需要《头歌复制助手 EduCoder Copy Helper》安装并启用后方可使用。<br />请安装并启用后刷新页面再试。
      <br /><br />
      Greasy Fork 安装地址：https://greasyfork.org/scripts/495490
      <br /><br />
      ScriptCat脚本猫 安装地址：https://scriptcat.org/script-show-page/1860
    </v-card-text>
    <template v-slot:actions>
      <v-btn v-if="!isAvailable" text="安装插件" variant="elevated" color="primary"
             href="https://greasyfork.org/scripts/495490" target="_blank"></v-btn>
      <v-btn v-if="!isAvailable" text="脚本猫" variant="text" color="primary"
             href="https://scriptcat.org/script-show-page/1860" target="_blank"></v-btn>

      <v-spacer></v-spacer>

      <v-btn :disabled="inProgress" @click="closeDialog">
        {{isError ? '完成' : '取消' }}
      </v-btn>

      <v-btn :disabled="inProgress" v-if="isAvailable && !isError && !isWaitingForRefresh" color="error" variant="tonal" @click="handleReset">
        重置所有代码
      </v-btn>

      <v-btn v-if="isWaitingForRefresh" color="primary" variant="tonal" @click="handleRefresh">
        刷新页面
      </v-btn>
    </template>
  </v-card>
</template>

<style scoped>

</style>
