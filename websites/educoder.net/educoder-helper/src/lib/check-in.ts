import { unsafeWindow } from "$";

export const postCheckIn = () => {

  const asyncPostCheckIn = async () => {

    const window = unsafeWindow;
    const educoderCopyHelper = Number(window.educoderCopyHelper);
    if (window.educoderCopyHelper === undefined || educoderCopyHelper < 2) {
      return;
    }
    const response = await fetch(
      `https://data.educoder.net/api/watch_video_histories.json`,
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "X-EDU-Signature": window.xEduSignature || "",
          "X-EDU-Timestamp": window.xEduTimestamp || "",
          "X-EDU-Type": window.xEduType || "pc"
        }
      }
    );
    try {
      const data = await response.json();
      console.debug("[educoder-helper] postCheckIn", data);
    } catch (e) {
      console.error("[educoder-helper] postCheckIn", e);
    }
  };

  asyncPostCheckIn().then(() => null);
};
