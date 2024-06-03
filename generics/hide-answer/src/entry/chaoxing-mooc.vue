<script setup lang="ts">
import { Vue3Snackbar, useSnackbar } from "vue3-snackbar";
import { onMounted, onUnmounted, ref } from "vue";

const snackbar = useSnackbar();
const elements = Array.from(document.getElementsByClassName("mark_answer")) as HTMLElement[];

const isHide = ref(false);

const toggleHide = () => {
  const value = isHide.value;
  snackbar.add({
    type: value ? "info" : "success",
    title: value ? "答案已显示" : "答案已隐藏",
    text: '你还可以按下 "H" 键来切换答案的显示状态。'
  });
  elements.forEach(element => {
    element.style.visibility = isHide.value ? "visible" : "hidden";
  });
  isHide.value = !isHide.value;
};

const keydownHandler = (event: KeyboardEvent) => {
  if (event.key === 'h' || event.key === 'H') {
    toggleHide();
  }
};

onMounted(() => {
  window.addEventListener('keydown', keydownHandler);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandler);
});
</script>

<template>
  <a href="javascript:;" @click="toggleHide" class="fl" tabindex="0" role="button">{{ isHide ? "显示答案 (H)" : "隐藏答案 (H)"
    }}</a>
  <vue3-snackbar top :duration="0" border="left" shadow dense />
</template>

