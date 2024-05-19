// ==UserScript==
// @name         头歌复制助手 Educoder Copy Helper
// @namespace    https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-copy-helper
// @version      1.1
// @author       甜檸Cirtron (lcandy2)
// @description  📝解除头歌复制粘贴限制，解除头哥复制缩短限制；✨与《头歌助手 EduCoder Helper》搭配使用解锁“一键复制”、“一键全部文件复制”、“导出全部文件”等功能。🧹大小仅1.82KB，极小尺寸，无需任何权限，无需任何配置，安装即用。💛安全开源可读，无论是编译前后的代码均保持开源和易读性，防止窃取其他信息
// @license      AGPL-3.0-or-later
// @copyright    lcandy2 All Rights Reserved
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2ZzUrDQBCAA3kM23NfJKuC4FW6vYjZV/DiK7SaeCxYKiRQE5qNB7EPUoT6A3op9GBFi5eeIhsMjNbW2s2apMwHc2t35tud3RxG0xTQ6IRlyw26thtMRFgu55ZzWdGKQKMTlm2Hj22XR1/C4eNTJyhpeceKdz4u+ur43N8QRdtOcP0p4Wt5x47bhkdwt+NTcXlkucFbJkVt7u2XCTW7RpVNCGVREjNtAuLopLmT/P/Qau4u+i0Ba4ocBmXhVu2gklrxBmVjmGQZgXr7YiokRPH1tj9dVoAkItR8EbmlBcTO/5TgN4G/BJmzPqFM/s7Atrm5fYggaQlA+oN72E7ydwbuyHfOeE+6+BbvzawLcyoVeByOpCRavBc9DUfZCaiCoAAAT2AFCLbQki2ke+9SkfkJoMAc8A5A8BldAYLPKABfIS/H3wFVEBRQdAdydwJ60QVUQVAAgN8BD78Dcqz1JdaL/ozqRRdQBUEBAJ5A1i1kgAGHGD6opj+4AwLmq7wAZeGCEZDiMD1pATEtFAO3fy++yp63a6yU4piV+WJmpbpwI85heqkVjyBrzgdOSyKlYdgYdgAAAABJRU5ErkJggg==
// @homepage     https://greasyfork.org/scripts/495490
// @homepageURL  https://greasyfork.org/scripts/495490
// @source       https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-copy-helper
// @match        *://www.educoder.net/tasks/*
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  async function saveTaskJson(request, response) {
    if (request.url.includes("/api/tasks") || request.url.includes("json?homework_common_id")) {
      const res = response.clone();
      try {
        const json = await res.json();
        console.info("saveTaskJson", json);
        if (json && json.challenge && json.challenge.path) {
          const path = json.challenge.path;
          window.taskChallengePath = path;
        }
        const signature = request.headers.get("X-EDU-Signature");
        if (signature) {
          window.xEduSignature = signature;
        }
        const timestamp = request.headers.get("X-EDU-Timestamp");
        if (timestamp) {
          window.xEduTimestamp = timestamp;
        }
        const type = request.headers.get("X-EDU-Type");
        if (type) {
          window.xEduType = type;
        }
      } catch (e) {
        console.error("Error reading response body:", e);
      }
    }
  }
  async function modifyTaskCopy(request, response) {
    if (request.url.includes("/api/tasks") || request.url.includes("json?homework_common_id")) {
      const res = response.clone();
      try {
        const json = await res.json();
        if (json && json.shixun) {
          !json.shixun.forbid_copy && (json.shixun.name = `${json.shixun.name} （已允许复制粘贴）`);
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
          headers: response.headers
        });
      } catch (e) {
        console.error("Error reading response body:", e);
      }
    }
    return response;
  }
  function hookFetch() {
    const nativeFetch = window.fetch;
    const hookedFetch = async (...args) => {
      const request = new Request(...args);
      const response = await nativeFetch(...args);
      const clonedResponse = response.clone();
      await saveTaskJson(request, clonedResponse);
      const modifiedResponse = await modifyTaskCopy(request, clonedResponse);
      return modifiedResponse;
    };
    window.fetch = hookedFetch;
  }
  hookFetch();
  window.educoderCopyHelper = "1.1";

})();