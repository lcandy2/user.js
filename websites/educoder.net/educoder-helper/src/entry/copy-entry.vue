<script setup lang="ts">
import CopyAll from "../components/copy-all.vue";
import ResetAll from "../components/reset-all.vue";
import GetAnser from "../components/get-anser.vue";
</script>

<template>
  <div
    style="display: flex; flex-direction: row; gap: 0.5em; align-items: center"
  >
    <GetAnser />
    <ResetAll />
    <CopyAll />
  </div>
</template>

<style scoped></style>
