<script setup lang="ts">
import CopyAllContent from "./copy-all-content.vue";
</script>

<template>
  <v-dialog max-width="800" max-height="680">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="复制全部"
        variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <CopyAllContent :is-active="isActive" />
    </template>
  </v-dialog>
</template>
