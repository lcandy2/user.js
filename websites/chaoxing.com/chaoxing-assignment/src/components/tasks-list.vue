<script setup lang="ts">
import { ExtractedTask, extractTasks } from "../lib";
import { ref } from "vue";

const extractedData = extractTasks();

const headers = [
  { key: "title", title: "作业名称" },
  { key: "course", title: "课程" },
  { key: "leftTime", title: "剩余时间" },
  { key: "status", title: "状态" },
  { key: "action", title: "操作" }
];

const search = ref("");

const handleOpenTask = (item: ExtractedTask) => {
  console.log(item);
}

</script>

<template>
  <v-card title="作业列表" flat>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="搜索"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table :items="extractedData" :search="search" hover :headers="headers" sticky items-per-page="-1" hide-default-footer>
      <template v-slot:item.action="{ item }"> <!-- 使用插槽自定义列的渲染方式 -->
        <v-btn :variant="item.uncommitted ? 'tonal' : 'plain'" :onclick="handleOpenTask(item)" color="primary">{{item.uncommitted ? "立即完成" : "查看详情"}}</v-btn> <!-- 添加按钮 -->
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>

</style>
