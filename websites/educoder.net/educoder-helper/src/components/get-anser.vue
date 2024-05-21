<script setup lang="ts">
import { onMounted, ref } from "vue";
import GetAnserContent from "./get-anser-content.vue";

const isPersistent = ref(false);
const setIsPersistent = (value: boolean) => {
  isPersistent.value = value;
};
</script>

<template>
  <v-dialog max-width="800" width="600" scrollable :persistent="isPersistent">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="？"
        variant="plain"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <GetAnserContent
        :is-active="isActive"
        :set-is-persistent="setIsPersistent"
      />
    </template>
  </v-dialog>
</template>

<style scoped></style>
