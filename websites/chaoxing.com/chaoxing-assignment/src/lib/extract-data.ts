export interface ExtractedTask {
  title: string;
  status: string;
  uncommitted: boolean;
  course: string;
  leftTime: string | undefined;
  workId: string;
  courseId: string;
  clazzId: string;
  raw: string;
}

export function extractTasks(): ExtractedTask[] {
  const taskElements = document.querySelectorAll(
    "#chaoxing-assignment-wrapper ul.nav > li",
  );
  const tasks = Array.from(taskElements).map((task) => {
    const optionElement = task.querySelector('div[role="option"]');
    let title: string = "";
    let status: string = "";
    let uncommitted: boolean = false;
    let course: string = "";
    let leftTime: string = "";
    if (optionElement) {
      title = optionElement.querySelector("p")?.textContent || "";
      const statusElement = optionElement.querySelector("span:nth-of-type(1)");
      status = statusElement?.textContent || "";
      uncommitted = statusElement?.className.includes("status") || false;
      course =
        optionElement.querySelector("span:nth-of-type(2)")?.textContent || "";
      leftTime = optionElement.querySelector(".fr")?.textContent || "";
    }
    const raw = task.getAttribute("data") || "";
    let workId: string = "";
    let courseId: string = "";
    let clazzId: string = "";
    if (raw) {
      const rawUrl = new URL(raw);
      const searchParams = rawUrl.searchParams;
      workId = searchParams.get("taskrefId") || "";
      courseId = searchParams.get("courseId") || "";
      clazzId = searchParams.get("clazzId") || "";
    }

    return {
      title,
      status,
      uncommitted,
      course,
      leftTime,
      workId,
      courseId,
      clazzId,
      raw,
    };
  });
  return tasks;
}

export interface ExtractedExam {
  title: string;
  status: string;
  timeLeft: string;
  expired: boolean;
  finished: boolean;
  examId: string;
  courseId: string;
  classId: string;
  raw: string;
}

export function extractExams(): ExtractedExam[] {
  const examElements = document.querySelectorAll(
    "#chaoxing-assignment-wrapper ul.ks_list > li",
  );
  const exams = Array.from(examElements).map((exam) => {
    const dlElement = exam.querySelector("dl");
    const imgElement = exam.querySelector("div.ks_pic > img");
    let title: string = "";
    let timeLeft: string = "";
    let status: string = "";
    let expired: boolean = false;
    let examId: string = "";
    let courseId: string = "";
    let classId: string = "";
    if (dlElement) {
      title = dlElement.querySelector("dt")?.textContent || "";
      timeLeft = dlElement.querySelector("dd")?.textContent || "";
    }
    if (imgElement) {
      expired = imgElement.getAttribute("src")?.includes("ks_02") || false;
    }
    status = exam.querySelector("span.ks_state")?.textContent || "";
    const raw = exam.getAttribute("data") || "";
    if (raw) {
      const rawWithHost = window.location.protocol + '//' + window.location.host + raw;
      const rawUrl = new URL(rawWithHost);
      const searchParams = rawUrl.searchParams;
      examId = searchParams.get("taskrefId") || "";
      courseId = searchParams.get("courseId") || "";
      classId = searchParams.get("classId") || "";
    }
    const finished = status.includes("已完成") || status.includes("待批阅");

    return {
      title,
      status,
      timeLeft,
      expired,
      finished,
      examId,
      courseId,
      classId,
      raw,
    };
  });
  return exams;
}
