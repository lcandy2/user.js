export async function saveTaskJson(request: Request, response: Response) {
  try {
    // X-EDU-Signature
    const signature = request.headers.get("X-EDU-Signature");
    if (signature) {
      window.xEduSignature = signature;
    }
    // X-EDU-Timestamp
    const timestamp = request.headers.get("X-EDU-Timestamp");
    if (timestamp) {
      window.xEduTimestamp = timestamp;
    }
    // X-EDU-Type
    const type = request.headers.get("X-EDU-Type");
    if (type) {
      window.xEduType = type;
    }
  } catch (e) {
    console.error("[educoder-copy-helper] Error reading request headers:", e);
  }

  const res = response.clone();

  if (
    request.url.includes("/api/tasks") ||
    request.url.includes("json?homework_common_id")
  ) {
    try {
      // taskChallengePath
      const json = await res.json();
      console.debug(`[educoder-copy-helper] [RESPONSE] ${request.url.toString()}`, json);
      if (json && json.challenge && json.challenge.path) {
        const path = json.challenge.path;
        window.taskChallengePath = path;
      }
    } catch (e) {
      console.error("[educoder-copy-helper] Error reading response body:", e);
    }
  }

  if (request.url.includes("watch_video_histories.json")) {
    try {
      // videoId
      const reqJson = await request.json();
      const resJson = await res.json();
      console.debug(`[educoder-copy-helper] [REQUEST] ${request.url.toString()}`, reqJson);
      console.debug(`[educoder-copy-helper] [RESPONSE] ${request.url.toString()}`, resJson);
      if (reqJson && reqJson.video_id) {
        window.videoId = reqJson.video_id;
      }
      if (resJson && resJson.log_id) {
        window.videoLogId = resJson.log_id;
      }
    } catch (e) {
      console.error("[educoder-copy-helper] Error reading response body:", e);
    }
  }

  if (request.url.includes("rep_content.json")) {
    try {
      // taskId
      const url = new URL(request.url);
      const pathSegments = url.pathname.split('/');
      const taskId = pathSegments[pathSegments.length - 2];
      console.debug(`[educoder-copy-helper] [RESPONSE] ${request.url.toString()}`, taskId);
      if (taskId) {
        window.taskId = taskId;
      }
    } catch (e) {
      console.error("[educoder-copy-helper] Error reading response body:", e);
    }
  }
}
