import { GM_xmlhttpRequest } from "$";

export const BASE_HEADERS: HeadersInit = {
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "User-Agent": "User-Agent: Dalvik/2.1.0 (Linux; U; Android 11; M3121K1AB Build/SKQ1.211006.001) (device:M3121K1AB) Language/zh_CN com.chaoxing.mobile/ChaoXingStudy_3_5.1.4_android_phone_614_74 (@Kalimdor)_",
  'X-Requested-With': 'XMLHttpRequest',
  'Sec-Fetch-Site': 'same-origin',
};

interface BackgroundRequestOptions {
  url: string;
  method?: "get" | "post";
  headers?: HeadersInit;
  body?: string;
}

export const backgroundRequest = ({ url, method = "get", headers = BASE_HEADERS, body = "" }: BackgroundRequestOptions) => {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url,
      method,
      headers: headers as Record<string, string> | undefined,
      data: body,
      onload: (res) => {
        try {
          const json = JSON.parse(res.responseText) || {};
          resolve(json);
        } catch (error) {
          console.error(error);
        }
      },
      onerror: (err) => {
        reject(err);
      },
    });
  });
}
