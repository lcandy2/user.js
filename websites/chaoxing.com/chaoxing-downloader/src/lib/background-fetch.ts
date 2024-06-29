import {GM_xmlhttpRequest} from "$";

export const backgroundFetch = async (url: string) => {
  return new Promise<string>((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "GET",
      url,
      onload: (response) => {
        resolve(response.responseText);
      },
      onerror: (error) => {
        reject(error);
      },
    });
  });
}
