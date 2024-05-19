export async function modifyTaskCopy(request: Request, response: Response) {
  if (
    request.url.includes("/api/tasks") ||
    request.url.includes("json?homework_common_id")
  ) {
    const res = response.clone();
    try {
      const json = await res.json();
      if (json && json.shixun) {
        !json.shixun.forbid_copy &&
          (json.shixun.name = `${json.shixun.name} （已允许复制粘贴）`);
        json.shixun.can_copy = true;
        json.shixun.vip = true;
        json.shixun.forbid_copy = false;
        json.shixun.copy_for_exercise = true;
        json.shixun.active_copy = true;
        json.shixun.copy_for_exercise_save = true;
      }
      return new Response(JSON.stringify(json), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    } catch (e) {
      console.error("Error reading response body:", e);
    }
  }
  return response;
}
