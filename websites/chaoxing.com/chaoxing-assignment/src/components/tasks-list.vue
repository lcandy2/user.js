<script setup lang="ts">
import { API_VISIT_COURSE, backgroundRequest, ExtractedTask, extractTasks } from "../lib";
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

// const handleOpenTask = async (item: ExtractedTask) => {
//   const courseId = item.courseId;
//   const clazzId = item.clazzId;
//   const requestUrl = new URL(API_VISIT_COURSE);
//   requestUrl.searchParams.append("courseid", courseId);
//   requestUrl.searchParams.append("clazzid", clazzId);
//   requestUrl.searchParams.append("pageHeader", "8"); // Open task page directly
//   window.open(requestUrl.href, "_blank");
// }

const getCourseLinkHref = (item: ExtractedTask) => {
  const courseId = item.courseId;
  const clazzId = item.clazzId;
  const requestUrl = new URL(API_VISIT_COURSE);
  requestUrl.searchParams.append("courseid", courseId);
  requestUrl.searchParams.append("clazzid", clazzId);
  requestUrl.searchParams.append("pageHeader", "8"); // Open task page directly
  return requestUrl.href;
}

</script>

<template>
  <v-card title="作业列表" variant="flat">
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="搜索"
        prepend-inner-icon="search"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table :items="extractedData" :search="search" hover :headers="headers" sticky items-per-page="-1" hide-default-footer>
      <template v-slot:item.action="{ item }"> <!-- 使用插槽自定义列的渲染方式 -->
        <v-btn :variant="item.uncommitted ? 'tonal' : 'plain'" color="primary" :href="getCourseLinkHref(item)" target="_blank">{{item.uncommitted ? "立即完成" : "查看详情"}}</v-btn> <!-- 添加按钮 -->
      </template>
    </v-data-table>
  </v-card>
</template>
