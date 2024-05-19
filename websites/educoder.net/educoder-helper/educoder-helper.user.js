// ==UserScript==
// @name         头歌助手 Educoder Helper
// @namespace    https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-helper
// @version      1.0
// @author       甜檸Cirtron (lcandy2)
// @description  【本脚本需配合《头歌复制助手 Educoder Copy Helper》使用，使用脚本前请确保复制助手已安装】📝解除头歌复制粘贴限制，解除头哥复制缩短限制；✨增加“一键复制”、“一键全部文件复制”、“导出全部文件”等功能。🧹简单高效代码，无需任何权限，无需任何配置，安装即用。💛安全开源可读，无论是编译前后的代码均保持开源和易读性，保护隐私与账号安全
// @license      AGPL-3.0-or-later
// @copyright    lcandy2 All Rights Reserved
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2ZzUrDQBCAA3kM23NfJKuC4FW6vYjZV/DiK7SaeCxYKiRQE5qNB7EPUoT6A3op9GBFi5eeIhsMjNbW2s2apMwHc2t35tud3RxG0xTQ6IRlyw26thtMRFgu55ZzWdGKQKMTlm2Hj22XR1/C4eNTJyhpeceKdz4u+ur43N8QRdtOcP0p4Wt5x47bhkdwt+NTcXlkucFbJkVt7u2XCTW7RpVNCGVREjNtAuLopLmT/P/Qau4u+i0Ba4ocBmXhVu2gklrxBmVjmGQZgXr7YiokRPH1tj9dVoAkItR8EbmlBcTO/5TgN4G/BJmzPqFM/s7Atrm5fYggaQlA+oN72E7ydwbuyHfOeE+6+BbvzawLcyoVeByOpCRavBc9DUfZCaiCoAAAT2AFCLbQki2ke+9SkfkJoMAc8A5A8BldAYLPKABfIS/H3wFVEBRQdAdydwJ60QVUQVAAgN8BD78Dcqz1JdaL/ozqRRdQBUEBAJ5A1i1kgAGHGD6opj+4AwLmq7wAZeGCEZDiMD1pATEtFAO3fy++yp63a6yU4piV+WJmpbpwI85heqkVjyBrzgdOSyKlYdgYdgAAAABJRU5ErkJggg==
// @homepage     https://greasyfork.org/scripts/495490
// @homepageURL  https://greasyfork.org/scripts/495490
// @source       https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-helper
// @match        *://www.educoder.net/tasks/*
// @require      https://registry.npmmirror.com/vue/3.4.27/files/dist/vue.global.prod.js
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3B
// @require      https://registry.npmmirror.com/vuetify/3.6.6/files/dist/vuetify.min.js
// @require      data:application/javascript,%3B
// @require      https://registry.npmmirror.com/js-base64/3.7.7/files/base64.js
// @resource     VuetifyStyle  https://registry.npmmirror.com/vuetify/3.6.6/files/dist/vuetify.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

(function (vue, vuetify, jsBase64) {
  'use strict';

  const getTaskInfo = () => {
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
      taskId
    };
  };
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "copy-all-content",
    props: {
      isActive: {}
    },
    setup(__props) {
      const props = __props;
      const closeDialog = () => {
        props.isActive.value = false;
      };
      const files = vue.ref([]);
      const isLoading = vue.ref(true);
      const isError = vue.ref(false);
      vue.onMounted(async () => {
        const window2 = _unsafeWindow;
        const paths = window2.taskChallengePath && window2.taskChallengePath.split("；").filter((value) => value !== "");
        if (paths) {
          for (const path of paths) {
            const { taskId } = getTaskInfo();
            const response = await fetch(
              `https://data.educoder.net/api/tasks/${taskId}/rep_content.json?path=${path}`,
              {
                credentials: "include",
                headers: {
                  "X-EDU-Signature": window2.xEduSignature || "",
                  "X-EDU-Timestamp": window2.xEduTimestamp || "",
                  "X-EDU-Type": window2.xEduType || "pc"
                }
              }
            );
            const res = await response.json();
            if (res && res.content && res.content.content) {
              const file = {
                name: path,
                content: jsBase64.decode(res.content.content)
              };
              files.value.push(file);
            }
          }
        }
        isLoading.value = false;
        if (files.value.length === 0) {
          isError.value = true;
        }
      });
      const filesContent = vue.computed(() => {
        if (isError.value) {
          return "获取代码失败，请刷新再试。";
        }
        return files.value.map((file) => `${file.name}
${file.content}`).join("\n\n");
      });
      return (_ctx, _cache) => {
        const _component_v_textarea = vue.resolveComponent("v-textarea");
        const _component_v_spacer = vue.resolveComponent("v-spacer");
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_card_actions = vue.resolveComponent("v-card-actions");
        const _component_v_card = vue.resolveComponent("v-card");
        return vue.openBlock(), vue.createBlock(_component_v_card, {
          loading: isLoading.value,
          title: "全部代码"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_v_textarea, {
              "auto-grow": "",
              "max-rows": "20",
              modelValue: filesContent.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filesContent.value = $event),
              placeholder: "全部代码将在这里显示",
              "persistent-placeholder": ""
            }, null, 8, ["modelValue"]),
            vue.createVNode(_component_v_card_actions, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_v_spacer),
                vue.createVNode(_component_v_btn, {
                  text: "关闭",
                  onClick: closeDialog
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["loading"]);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "copy-all",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_dialog = vue.resolveComponent("v-dialog");
        return vue.openBlock(), vue.createBlock(_component_v_dialog, {
          "max-width": "800",
          "max-height": "680"
        }, {
          activator: vue.withCtx(({ props: activatorProps }) => [
            vue.createVNode(_component_v_btn, vue.mergeProps(activatorProps, {
              color: "surface-variant",
              text: "复制全部",
              variant: "flat"
            }), null, 16)
          ]),
          default: vue.withCtx(({ isActive }) => [
            vue.createVNode(_sfc_main$1, { "is-active": isActive }, null, 8, ["is-active"])
          ]),
          _: 1
        });
      };
    }
  });
  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("VuetifyStyle");
  const appendCopyAllButton = () => {
    const vuetify$1 = vuetify.createVuetify({});
    const app = vue.createApp(_sfc_main);
    app.use(vuetify$1);
    const antRow = document.querySelectorAll(".ant-row");
    const host = document.createElement("div");
    let target = document.body;
    antRow.forEach((row) => {
      const innerDiv = row.querySelectorAll("div");
      innerDiv.forEach((div) => {
        if (div.className.includes("action-bar")) {
          target = div;
          return;
        }
      });
    });
    target.prepend(host);
    app.mount(host);
  };
  const observerCopyAll = () => {
    const observer = new MutationObserver((mutationsList, observer2) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const antRow = document.querySelector(".ant-row");
          if (antRow) {
            appendCopyAllButton();
            observer2.disconnect();
            break;
          }
        }
      }
    });
    const config = { childList: true, subtree: true };
    observer.observe(document, config);
  };
  observerCopyAll();
  console.info("loaded");

})(Vue, Vuetify, Base64);