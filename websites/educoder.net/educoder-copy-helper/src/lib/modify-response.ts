import { OTHER_MODIFY } from "../main";

export async function modifyTaskCopy(request: Request, response: Response) {
  if (
    request.url.includes("/api/tasks") ||
    request.url.includes("json?homework_common_id")
  ) {
    const res = response.clone();
    try {
      const json = await res.json();
      if (json) {
        if (json.shixun) {
          !json.shixun.forbid_copy &&
          (json.shixun.name = `${json.shixun.name} （已允许复制粘贴）`);
          json.shixun.can_copy = true;
          json.shixun.vip = true;
          json.shixun.forbid_copy = false;
          json.shixun.copy_for_exercise = true;
          json.shixun.active_copy = true;
          json.shixun.copy_for_exercise_save = true;
          json.shixun.allow_file_upload = true;
          json.shixun.open_local_evaluate = true;
          json.shixun.open_self_run = true;
          json.shixun.code_edit_permission = true;
        }
        if (json.challenge) {
          json.challenge.diasble_copy = false;
        }
        if (OTHER_MODIFY) {
          if (json && json.challenge) {
            json.challenge.thiry_party = true;
          }
          if (json && json.myshixun) {
            json.myshixun.system_tip = true;
          }
          if (json && json.game) {
            json.game.answer_open = 1;
          }
          if (json && json.shixun_environments) {
            json.shixun_environments.forEach((item: any) => {
              if (item) {
                item.allow_use_code_debugger = true;
              }
            });
          }
          json.is_teacher = true;
          json.myshixun_manager = true;
          json.chatgpt = true;
          json.open_local_evaluate = true;
          json.openai_tpi = true;
        }
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
