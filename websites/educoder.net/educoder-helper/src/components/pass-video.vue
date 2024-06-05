<script setup lang="ts">
import { ref } from "vue";
import { unsafeWindow } from "$";
import { appendPassVideoButton, getVideoInfo, waitTime, waitTwoTime } from "../lib";

const isLoading = ref(false);
const isError = ref(false);
const isHelperNotInstalled = ref(false);
const progress = ref(-1);
const status = ref("");
const message = ref("");

const handlePassVideo = async () => {
  if (progress.value === -1) {
    observeTextContentChange();
  }
  isLoading.value = true;
  isError.value = false;
  isHelperNotInstalled.value = false;
  progress.value = 1;
  status.value = "触发开始播放事件中……";
  const window = unsafeWindow;
  const educoderCopyHelper = Number(window.educoderCopyHelper);
  if (window.educoderCopyHelper === undefined || educoderCopyHelper < 1.5) {
    isHelperNotInstalled.value = true;
    isLoading.value = false;
    isError.value = true;
    return;
  }
  const { duration } = getVideoInfo();
  // const body = {
  //   point: 0,
  //   video_id: videoId,
  //   course_id: courseId,
  //   duration: duration,
  //   device: "pc"
  // };
  // console.debug(body);
  // const response = await fetch(
  //   `https://data.educoder.net/api/watch_video_histories.json`,
  //   {
  //     credentials: "include",
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json; charset=utf-8",
  //       "X-EDU-Signature": window.xEduSignature || "",
  //       "X-EDU-Timestamp": window.xEduTimestamp || "",
  //       "X-EDU-Type": window.xEduType || "pc"
  //     },
  //     body: JSON.stringify(body)
  //   }
  // );
  // const res = await response.json();
  // const logId = res.log_id;
  // message.value = res;
  const playButton = document.querySelector("button#play");
  await waitTime(800);
  if (!isLoading.value) {
    return;
  }
  if (playButton) {
    message.value = "playButton found!";
    isLoading && (playButton as HTMLButtonElement).click();
    progress.value = 2;
    status.value = "触发开始播放成功，等待触发完成播放视频事件……";
    await waitTwoTime();
    if (!isLoading.value) {
      return;
    }
    isLoading && (playButton as HTMLButtonElement).click();
    progress.value = 3;
    status.value = "触发完成播放事件中……";
    await waitTime(1200);
    if (!isLoading.value) {
      return;
    }
    const logId = window.videoLogId;
    const body = {
      ed: "1",
      point: duration,
      log_id: logId,
      total_duration: duration,
      watch_duration: duration
    };
    const response = await fetch(
      `https://data.educoder.net/api/watch_video_histories.json`,
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "X-EDU-Signature": window.xEduSignature || "",
          "X-EDU-Timestamp": window.xEduTimestamp || "",
          "X-EDU-Type": window.xEduType || "pc"
        },
        body: JSON.stringify(body)
      }
    );
    const res = await response.json();
    message.value = res;
    if (res.status === 0) {
      progress.value = 4;
      status.value = `视频已完成，共计学习时长 ${duration} 秒。`;
      isLoading.value = false;
    } else {
      isError.value = true;
    }
  } else {
    isError.value = true;
  }
};

const observeTextContentChange = (): void => {
  const vidContainer = document.querySelector("#video-container");
  const targetElement = vidContainer?.parentElement?.parentElement?.parentElement;
  const firstChild = targetElement?.firstElementChild;

  if (firstChild) {
    // 创建一个观察者实例，并指定回调函数
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "characterData") {
          progress.value = 0;
          status.value = "点击“完成该视频”以开始";
          message.value = "";
          isLoading.value = false;
          isError.value = false;
          isHelperNotInstalled.value = false;
        }
      }
    });

    // 配置观察选项
    const config = { characterData: true, subtree: true };

    // 开始观察
    observer.observe(firstChild, config);
  } else {
    console.warn("First child element not found.");
  }
};
</script>

<template>
  <div class="d-flex flex-column ga-2">
    <v-btn
      color="surface-variant"
      max-width="110px"
      text="完成该视频"
      variant="flat"
      v-if="!isHelperNotInstalled"
      @click="handlePassVideo"
      :loading="isLoading"
      :disabled="isLoading"
    ></v-btn>
    <v-card v-if="isHelperNotInstalled" variant="outlined" title="必要插件未安装"
            subtitle="请安装《头歌复制助手 EduCoder Copy Helper》1.5 及更新版本以使用该功能，如已安装，请尝试刷新页面重试。">
      <v-card-actions>
        <v-btn
          text="安装《头歌复制助手 EduCoder Copy Helper》"
          variant="elevated"
          color="surface-variant"
          href="https://greasyfork.org/scripts/495490"
          target="_blank"
        ></v-btn>
        <v-btn
          text="通过 ScriptCat 脚本猫安装"
          variant="text"
          color="surface-variant"
          href="https://scriptcat.org/script-show-page/1860"
          target="_blank"
        ></v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else-if="progress >= 0" :loading="isLoading" variant="outlined"
            :title="progress === 4 ? '任务已完成' : progress === 0 ? '等待开始' : '正在完成该视频'">
      <v-card-subtitle>{{ isError ? "任务执行失败，请刷新再试。" : status }}</v-card-subtitle>
      <v-card-actions>
        步骤 {{ progress }} / 4
        <v-spacer />
        {{ message }}
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>
