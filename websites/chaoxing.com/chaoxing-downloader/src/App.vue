<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import {backgroundFetch} from "./lib/background-fetch";

const buttonRef = ref<any>(null);
const downloadLink = ref<string>("");
const isDownloading = ref<boolean>(false);
const isFinished = ref<boolean>(false);
const isErrored = ref<boolean>(false);

interface FileInfo {
  fileName: string;
  objectId: string;
  dataId: string;
  t: string;
  courseId: string;
  clazzId: string;
  cpi: string;
  puid: string;
}

const fileInfo = ref<FileInfo>({
  fileName: "",
  objectId: "",
  dataId: "",
  t: "",
  courseId: "",
  clazzId: "",
  cpi: "",
  puid: "",
});

const handleClick = async (event: Event) => {
  !isFinished.value && event.preventDefault();
  isDownloading.value = true;
  if (buttonRef.value && !isFinished.value) {
    try {
      // const tokenReq = await fetch(
      //   `https://pan-yz.chaoxing.com/api/token/uservalid`,
      //   {
      //     credentials: "include",
      //   },
      // );
      const tokenReq = await backgroundFetch("https://pan-yz.chaoxing.com/api/token/uservalid");
      const tokenJson = JSON.parse(tokenReq);
      const token = tokenJson._token;
      const fileInfoApi = new URL(
        "https://pan-yz.chaoxing.com/api/share/downloadUrl",
      );
      fileInfoApi.searchParams.set("puid", fileInfo.value.puid);
      fileInfoApi.searchParams.set("_token", token);
      fileInfoApi.searchParams.set("sarepuid", fileInfo.value.puid);
      fileInfoApi.searchParams.set("objectid", fileInfo.value.objectId);
      // const fileInfoReq = await fetch(fileInfoApi.toString(), {
      //   credentials: "include",
      // });
      const fileInfoReq = await backgroundFetch(fileInfoApi.toString());
      const fileInfoJson = JSON.parse(fileInfoReq);
      const fileInfoUrl = fileInfoJson.url;
      downloadLink.value = fileInfoUrl.toString();
      isFinished.value = true;
      nextTick(() => {
        buttonRef.value.$el.click();
      });
    } catch (e) {
      isErrored.value = true;
      console.error(e);
    }
  } else {
    isDownloading.value = false;
  }
};
onMounted(() => {
  if (buttonRef.value) {
    try {
      // Access the grandparent element of the button
      const fileElement =
        buttonRef.value.$el.parentElement?.parentElement.parentElement
          .parentElement;
      fileInfo.value.objectId = fileElement?.getAttribute("objectid");
      fileInfo.value.fileName = fileElement?.getAttribute("dataname");
      fileInfo.value.dataId =
        fileElement?.getAttribute("id") || fileElement?.getAttribute("order");
      fileInfo.value.t = fileElement?.getAttribute("t");
      const userIdElement = document.querySelector("input#userId");
      if (userIdElement) {
        fileInfo.value.puid = userIdElement.getAttribute("value") || "";
      }
      const href = new URL(window.location.href);
      fileInfo.value.courseId = href.searchParams.get("courseid") || "";
      fileInfo.value.clazzId = href.searchParams.get("clazzid") || "";
      fileInfo.value.cpi = href.searchParams.get("cpi") || "";
      const downloadUrl = new URL(
        "https://mooc1.chaoxing.com/coursedata/downloadData?ut=s",
      );
      downloadUrl.searchParams.set("dataId", fileInfo.value.dataId);
      downloadUrl.searchParams.set("classId", fileInfo.value.clazzId);
      downloadUrl.searchParams.set("cpi", fileInfo.value.cpi);
      downloadUrl.searchParams.set("courseId", fileInfo.value.courseId);
      downloadLink.value = downloadUrl.toString();
    } catch (e) {
      isErrored.value = true;
      console.error(e);
    }
  }
});
</script>

<template ref="">
  <v-btn
    ref="buttonRef"
    :disabled="isErrored"
    :loading="isDownloading && !isErrored"
    @click="handleClick"
    :href="downloadLink"
    density="compact"
    variant="plain"
    color="primary"
  >
    {{
      isErrored
        ? "下载器错误，请刷新重试"
        : isDownloading
          ? "正在下载中"
          : isFinished
            ? "下载完成"
            : "下载器下载"
    }}
  </v-btn>
</template>
