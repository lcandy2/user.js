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
      status =
        statusElement?.textContent || "";
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
