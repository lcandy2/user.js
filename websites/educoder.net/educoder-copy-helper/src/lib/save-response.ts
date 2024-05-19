export async function saveTaskJson(request: Request, response: Response) {
  if (
    request.url.includes("/api/tasks") ||
    request.url.includes("json?homework_common_id")
  ) {
    const res = response.clone();
    try {
      // taskChallengePath
      const json = await res.json();
      console.info("saveTaskJson", json);
      if (json && json.challenge && json.challenge.path) {
        const path = json.challenge.path;
        window.taskChallengePath = path;
      }
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
      console.error("Error reading response body:", e);
    }
  }
}
