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

interface VideoInfo {
  courseId: string;
  videoId: number;
  duration: number;
}

export const getVideoInfo = (): VideoInfo => {
  const href = window.location.href;
  const hrefUrl = new URL(href);
  const pathname = hrefUrl.pathname;
  const parts = pathname.substring(1).split("/");
  const courseId = parts[1];
  const searchParams = hrefUrl.searchParams;
  const videoId = Number(searchParams.get("new_video_id"));
  const durationElement = document.querySelector("#duration");
  const durationText = durationElement?.textContent;
  let duration = -1;
  if (durationText) {
    const timeParts = durationText.split(":");
    const minutes = Number(timeParts[0]);
    const seconds = Number(timeParts[1]);
    const totalSeconds = minutes * 60 + seconds;
    const randomDecimal = Number((Math.random()).toFixed(1));
    duration = totalSeconds + randomDecimal;
  }
  return {
    courseId,
    videoId,
    duration
  };
};
