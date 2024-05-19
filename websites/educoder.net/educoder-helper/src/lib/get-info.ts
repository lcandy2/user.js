interface TaskInfo {
  courseId: string;
  shixunId: string;
  taskId: string;
}

export const getTaskInfo = (): TaskInfo => {
  const href = window.location.href;
  const hrefUrl = new URL(href);
  const pathname = hrefUrl.pathname;
  const parts = pathname.substring(1).split("/");
  const courseId = parts[1];
  const shixunId = parts[2];
  const taskId = parts[3];
  return {
    courseId,
    shixunId,
    taskId,
  };
};
