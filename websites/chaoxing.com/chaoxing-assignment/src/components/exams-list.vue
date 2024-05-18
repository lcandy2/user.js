<script setup lang="ts">
import { API_OPEN_EXAM, ExtractedExam, extractExams } from "../lib";
import { ref } from "vue";

const extractedData = extractExams();

const headers = [
  { key: "title", title: "考试名称" },
  { key: "timeLeft", title: "剩余时间" },
  { key: "status", title: "状态" },
  { key: "action", title: "", sortable: false }
];

const search = ref("");

const getCourseLinkHref = (item: ExtractedExam) => {
  const courseId = item.courseId;
  const classId = item.classId;
  const examId = item.examId;
  const requestUrl = new URL(API_OPEN_EXAM);
  requestUrl.searchParams.append("courseId", courseId);
  requestUrl.searchParams.append("classId", classId);
  requestUrl.searchParams.append("examId", examId);
  return requestUrl.href;
};
</script>

<template>
  <v-card title="考试列表" variant="flat">
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
    <v-data-table
      :items="extractedData"
      :search="search"
      hover
      :headers="headers"
      sticky
      items-per-page="-1"
      hide-default-footer
    >
      <template v-slot:item.action="{ item }">
        <!-- 使用插槽自定义列的渲染方式 -->
        <v-btn
          :variant="item.finished || item.expired ?  'plain':'tonal' "
          color="primary"
          :href="getCourseLinkHref(item)"
          target="_blank"
          >{{ item.finished || item.expired ?   "查看详情": "前往考试" }}</v-btn
        >
        <!-- 添加按钮 -->
      </template>
    </v-data-table>
  </v-card>
</template>
