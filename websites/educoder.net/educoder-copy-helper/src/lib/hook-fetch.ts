import { saveTaskJson } from "./save-response";
import { modifyTaskCopy } from "./modify-response";

export function hookFetch() {
  const nativeFetch = window.fetch;

  const hookedFetch = async (
    ...args: Parameters<typeof fetch>
  ): Promise<Response> => {
    // Create a Request object from the arguments
    const request = new Request(...args);

    const response = await nativeFetch(...args);
    const clonedResponse = response.clone();

    await saveTaskJson(request, clonedResponse);

    const modifiedResponse = await modifyTaskCopy(request, clonedResponse);

    return modifiedResponse;
  };

  window.fetch = hookedFetch;
}
