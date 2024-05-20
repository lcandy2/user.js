<script setup lang="ts">
import ResetAllContent from "./reset-all-content.vue";
import { ref } from "vue";

const isPersistent = ref(false);
const setIsPersistent = (value: boolean) => {
  isPersistent.value = value;
};
</script>

<template>
  <v-dialog
    max-width="400"
    :persistent="isPersistent"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-restart"
        color="warning"
        text="全部重置"
        variant="plain"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <ResetAllContent :is-active="isActive" :set-is-persistent="setIsPersistent" />
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
