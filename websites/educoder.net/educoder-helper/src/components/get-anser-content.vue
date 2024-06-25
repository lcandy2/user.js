<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { unsafeWindow } from "$";
import { getTaskInfo } from "../lib";

const props = defineProps<{
  isActive: { value: boolean };
  setIsPersistent: (value: boolean) => void;
}>();

const closeDialog = () => {
  props.isActive.value = false;
};

interface AnswerInfo {
  answer_id: number;
  answer_radio: number;
  answer_score: number;
}

const waitingForReading = ref(-1);
const isInFirstCheck = ref(true);
const isInSecondCheck = ref(false);
const isInFinalResult = ref(false);
const isHidden = ref(true);

const answerInfo = ref<AnswerInfo>({
  answer_id: -1,
  answer_radio: -1,
  answer_score: -1,
});
const answerContent = ref<string>("");

const inProgress = ref(false);
const isError = ref(false);
const errorMessages = ref<string>("");
const isWaitingForRefresh = ref(false);
const allPaths = ref<string[]>([]);

const handleGetAnswerInfo = async () => {
  inProgress.value = true;
  const window = unsafeWindow;
  const taskId = window.taskId || getTaskInfo().taskId;
  const response = await fetch(
    `https://data.educoder.net/api/tasks/${taskId}/get_answer_info.json`,
    {
      credentials: "include",
      headers: {
        "X-EDU-Signature": window.xEduSignature || "",
        "X-EDU-Timestamp": window.xEduTimestamp || "",
        "X-EDU-Type": window.xEduType || "pc",
      },
    },
  );
  const res = await response.json();
  if (res.status && res.status === 1 && res.message && res.message.answer_id) {
    isInSecondCheck.value = true;
    const answer_id = res.message.answer_id;
    const answer_radio = res.message.answer_radio || -1;
    const answer_score = res.message.answer_score || -1;
    answerInfo.value = {
      answer_id,
      answer_radio,
      answer_score,
    };
  } else if (
    res.status &&
    res.status === 3 &&
    res.message &&
    res.message[0] &&
    res.message[0].answer_contents
  ) {
    answerContent.value = res.message[0].answer_contents;
    isInFinalResult.value = true;
  } else {
    isError.value = true;
    errorMessages.value = JSON.stringify(res);
  }
  inProgress.value = false;
};

const handleUnclockAnswer = async () => {
  inProgress.value = true;
  const window = unsafeWindow;
  const taskId = window.taskId || getTaskInfo().taskId;
  const answer_id = answerInfo.value.answer_id;
  const url = new URL(
    `https://data.educoder.net/api/tasks/${taskId}/unlock_answer.json`,
  );
  url.searchParams.append("answer_id", answer_id.toString());
  const response = await fetch(url.href, {
    credentials: "include",
    headers: {
      "X-EDU-Signature": window.xEduSignature || "",
      "X-EDU-Timestamp": window.xEduTimestamp || "",
      "X-EDU-Type": window.xEduType || "pc",
    },
  });
  const res = await response.json();
  if (res && res.contents) {
    answerContent.value = res.contents;
    isInFinalResult.value = true;
  } else {
    isError.value = true;
    errorMessages.value = JSON.stringify(res);
  }
  inProgress.value = false;
};

const waitingForReadingDisabled = computed(() => waitingForReading.value > 0);
const isAvailable = computed(() => isInFirstCheck || isInSecondCheck);

watch(
  () => waitingForReading.value,
  (value) => {
    if (value > 0) {
      setTimeout(() => {
        waitingForReading.value = value - 1;
      }, 1000);
    }
  },
);

watch(
  () => isInFirstCheck.value,
  (value) => {
    if (value) {
      isInFirstCheck.value = true;
      isInSecondCheck.value = false;
      isInFinalResult.value = false;
    }
  },
);

watch(
  () => isInSecondCheck.value,
  (value) => {
    if (value) {
      isInFirstCheck.value = false;
      isInSecondCheck.value = true;
      isInFinalResult.value = false;
    }
  },
);

watch(
  () => isInFinalResult.value,
  (value) => {
    if (value) {
      isInFirstCheck.value = false;
      isInSecondCheck.value = false;
      isInFinalResult.value = true;
    }
  },
);

onMounted(() => {
  waitingForReading.value = 0;
  const window = unsafeWindow;
  if (window.educoderCopyHelper === undefined) {
    isInFirstCheck.value = false;
    return;
  }
  isInFirstCheck.value = true;
  if (window.educoderAnswerHelper === undefined) {
    isHidden.value = true;
    return;
  }
  isHidden.value = false;
  const paths =
    window.taskChallengePath &&
    window.taskChallengePath.split("；").filter((value) => value !== "");
  if (paths) {
    allPaths.value = paths;
  }
});

const handleRefresh = () => {
  window.location.reload();
};
</script>

<template>
  <v-card
    prepend-icon="mdi-alert"
    :title="
      isHidden
        ? '存在疑问？'
        : isError
          ? '查看答案失败'
          : isInFinalResult
            ? '答案已解锁'
            : isAvailable
              ? '查看答案？这将会留下记录！'
              : '依赖插件未安装'
    "
    :loading="inProgress"
  >
    <v-card-text v-if="isHidden"
      >如果有使用上的疑问，请联系开发者。</v-card-text
    >
    <v-card-text v-else-if="isError"
      >查看答案失败，可能当前练习不存在答案，或刷新再试，信息未记录。<br /><br />{{
        errorMessages
      }}</v-card-text
    >
    <v-card-text v-else-if="isInFirstCheck">
      你确定要查看当前练习答案？<br />一旦查看答案，你的信息会被平台记录，可供老师查阅。<br /><br />
      被记录的查看答案操作会导致但不限于以下结果：<br /><b>该门实验成绩无效。</b
      ><br /><br />
      请注意，此操作不可撤销！<br />一旦查看答案，便会不可逆转地留下记录。
    </v-card-text>
    <v-card-text v-else-if="isInSecondCheck">
      将花费 {{ answerInfo.answer_score }} 积分查看答案<br /><br />
      answer_id: {{ answerInfo.answer_id }}<br />
      answer_radio: {{ answerInfo.answer_radio }}<br />
      answer_score: {{ answerInfo.answer_score }}<br /><br />
      一旦查看答案，你的信息会被平台记录，可供老师查阅。<br />
      可能导致但不限于以下结果：<br /><b>该门实验成绩无效。</b><br /><br />
      你确定要继续吗？
    </v-card-text>
    <v-card-text v-else-if="isInFinalResult">
      答案解锁已被记录。<br /><br />
      <v-textarea
        auto-grow
        v-model="answerContent"
        :disabled="inProgress"
        :readonly="isError || inProgress"
        placeholder="答案将在这里显示"
        :loading="inProgress"
        persistent-placeholder
      ></v-textarea>
    </v-card-text>
    <v-card-text v-else>
      本插件需要《头歌复制助手 EduCoder Copy Helper》安装并启用后方可使用。<br />请安装并启用后刷新页面再试。
      <br /><br />
      Greasy Fork 安装地址：https://greasyfork.org/scripts/495490
      <br /><br />
      ScriptCat脚本猫 安装地址：https://scriptcat.org/script-show-page/1860
    </v-card-text>
    <template v-slot:actions>
      <v-btn
        v-if="!isAvailable"
        text="安装插件"
        variant="elevated"
        color="primary"
        href="https://greasyfork.org/scripts/495490"
        target="_blank"
      ></v-btn>
      <v-btn
        v-if="!isAvailable"
        text="脚本猫"
        variant="text"
        color="primary"
        href="https://scriptcat.org/script-show-page/1860"
        target="_blank"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn :disabled="inProgress" @click="closeDialog">
        {{ isHidden ? "了解" : isError || isInFinalResult ? "完成" : "取消" }}
      </v-btn>

      <v-btn
        :disabled="inProgress || waitingForReadingDisabled"
        :loading="inProgress"
        v-if="
          isAvailable &&
          !isError &&
          !isWaitingForRefresh &&
          isInFirstCheck &&
          !isHidden
        "
        color="error"
        variant="tonal"
        @click="handleGetAnswerInfo"
      >
        {{
          waitingForReadingDisabled
            ? `请等待 ${waitingForReading} 秒`
            : "已知晓上述内容，查看答案，并留下记录"
        }}
      </v-btn>

      <v-btn
        :disabled="inProgress || waitingForReadingDisabled"
        v-if="
          isAvailable &&
          !isError &&
          !isWaitingForRefresh &&
          isInSecondCheck &&
          !isHidden
        "
        :loading="inProgress"
        color="error"
        variant="tonal"
        @click="handleUnclockAnswer"
      >
        已知晓，解锁答案，并留下记录
      </v-btn>
    </template>
  </v-card>
</template>

<style scoped></style>
