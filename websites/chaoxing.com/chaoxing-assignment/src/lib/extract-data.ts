interface ExtractedTask {
  title: string;
  status: string;
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
    let course: string = "";
    let leftTime: string | undefined;
    if (optionElement) {
      title = optionElement.querySelector("p")?.textContent || "";
      status =
        optionElement.querySelector("span:nth-of-type(1)")?.textContent || "";
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
