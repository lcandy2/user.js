// ==UserScript==
// @name         头歌助手 Educoder Helper
// @namespace    https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-helper
// @version      1.4.2
// @author       甜檸Cirtron (lcandy2)
// @description  【本脚本需配合《头歌复制助手 Educoder Copy Helper》使用，使用脚本前请确保复制助手已安装】📝解除头歌复制粘贴限制，解除头哥复制缩短限制；✨增加“一键复制”、“一键全部文件复制”、“导出全部文件”等功能。🧹简单高效代码，无需任何权限，无需任何配置，安装即用。💛安全开源可读，无论是编译前后的代码均保持开源和易读性，保护隐私与账号安全
// @license      AGPL-3.0-or-later
// @copyright    lcandy2 All Rights Reserved
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2ZzUrDQBCAA3kM23NfJKuC4FW6vYjZV/DiK7SaeCxYKiRQE5qNB7EPUoT6A3op9GBFi5eeIhsMjNbW2s2apMwHc2t35tud3RxG0xTQ6IRlyw26thtMRFgu55ZzWdGKQKMTlm2Hj22XR1/C4eNTJyhpeceKdz4u+ur43N8QRdtOcP0p4Wt5x47bhkdwt+NTcXlkucFbJkVt7u2XCTW7RpVNCGVREjNtAuLopLmT/P/Qau4u+i0Ba4ocBmXhVu2gklrxBmVjmGQZgXr7YiokRPH1tj9dVoAkItR8EbmlBcTO/5TgN4G/BJmzPqFM/s7Atrm5fYggaQlA+oN72E7ydwbuyHfOeE+6+BbvzawLcyoVeByOpCRavBc9DUfZCaiCoAAAT2AFCLbQki2ke+9SkfkJoMAc8A5A8BldAYLPKABfIS/H3wFVEBRQdAdydwJ60QVUQVAAgN8BD78Dcqz1JdaL/ozqRRdQBUEBAJ5A1i1kgAGHGD6opj+4AwLmq7wAZeGCEZDiMD1pATEtFAO3fy++yp63a6yU4piV+WJmpbpwI85heqkVjyBrzgdOSyKlYdgYdgAAAABJRU5ErkJggg==
// @homepage     https://greasyfork.org/scripts/495493
// @homepageURL  https://greasyfork.org/scripts/495493
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

  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("VuetifyStyle");
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
  const _hoisted_1$2 = {
    key: 0,
    style: { "display": "flex", "flex-direction": "row", "align-items": "center", "gap": "1em" }
  };
  const _hoisted_2$1 = {
    class: "text-body-2",
    style: { "margin": "0" }
  };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
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
      const progress = vue.ref(0);
      const progressMessage = vue.ref("");
      const isError = vue.ref(false);
      const allChecked = vue.ref(false);
      const helperNotInstalled = vue.ref(false);
      vue.onMounted(async () => {
        const window2 = _unsafeWindow;
        if (window2.educoderCopyHelper === void 0) {
          helperNotInstalled.value = true;
          isLoading.value = false;
          isError.value = true;
          return;
        }
        const paths = window2.taskChallengePath && window2.taskChallengePath.split("；").filter((value) => value !== "");
        if (paths) {
          for (const [index, path] of paths.entries()) {
            progress.value = (index + 1) / paths.length * 100;
            progressMessage.value = `正在获取文件：${path}`;
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
                content: jsBase64.decode(res.content.content),
                visible: true
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
          if (helperNotInstalled.value) {
            return `获取代码失败！
本插件需要《头歌复制助手 EduCoder Copy Helper》安装并启用后方可使用。
请安装并启用后刷新页面再试。

Greasy Fork 安装地址：https://greasyfork.org/scripts/495490

ScriptCat脚本猫 安装地址：https://scriptcat.org/script-show-page/1860`;
          }
          return "获取代码失败，请刷新再试。";
        }
        return files.value.filter((file) => file.visible).map((file) => `${file.name}
\`\`\`
${file.content}\`\`\``).join("\n\n");
      });
      vue.watch(allChecked, (newValue) => {
        if (newValue) {
          files.value.forEach((file) => file.visible = newValue);
        }
      });
      vue.watch(
        () => files.value.map((file) => file.visible),
        (newValues) => {
          allChecked.value = newValues.every(Boolean);
        },
        { deep: true }
      );
      return (_ctx, _cache) => {
        const _component_v_checkbox_btn = vue.resolveComponent("v-checkbox-btn");
        const _component_v_textarea = vue.resolveComponent("v-textarea");
        const _component_v_card_text = vue.resolveComponent("v-card-text");
        const _component_v_progress_circular = vue.resolveComponent("v-progress-circular");
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_spacer = vue.resolveComponent("v-spacer");
        const _component_v_card_actions = vue.resolveComponent("v-card-actions");
        const _component_v_card = vue.resolveComponent("v-card");
        return vue.openBlock(), vue.createBlock(_component_v_card, {
          loading: isLoading.value,
          title: "全部代码"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_v_card_text, null, {
              default: vue.withCtx(() => [
                files.value.length ? (vue.openBlock(), vue.createBlock(_component_v_checkbox_btn, {
                  key: 0,
                  label: "全选",
                  modelValue: allChecked.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allChecked.value = $event),
                  onClick: _cache[1] || (_cache[1] = () => {
                    allChecked.value && files.value.forEach((file) => file.visible = false);
                  })
                }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(files.value, (file, index) => {
                  return vue.openBlock(), vue.createBlock(_component_v_checkbox_btn, {
                    key: index,
                    label: file.name,
                    modelValue: file.visible,
                    "onUpdate:modelValue": ($event) => file.visible = $event
                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
                }), 128)),
                vue.createVNode(_component_v_textarea, {
                  "auto-grow": "",
                  modelValue: filesContent.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filesContent.value = $event),
                  disabled: isLoading.value,
                  readonly: isError.value || isLoading.value,
                  placeholder: "全部代码将在这里显示",
                  loading: isLoading.value,
                  "persistent-placeholder": ""
                }, null, 8, ["modelValue", "disabled", "readonly", "loading"])
              ]),
              _: 1
            }),
            vue.createVNode(_component_v_card_actions, null, {
              default: vue.withCtx(() => [
                isLoading.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
                  vue.createVNode(_component_v_progress_circular, { "model-value": progress.value }, null, 8, ["model-value"]),
                  vue.createElementVNode("p", _hoisted_2$1, vue.toDisplayString(progressMessage.value), 1)
                ])) : vue.createCommentVNode("", true),
                helperNotInstalled.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
                  key: 1,
                  text: "安装《头歌复制助手 EduCoder Copy Helper》",
                  variant: "elevated",
                  color: "primary",
                  href: "https://greasyfork.org/scripts/495490",
                  target: "_blank"
                })) : vue.createCommentVNode("", true),
                helperNotInstalled.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
                  key: 2,
                  text: "通过 ScriptCat 脚本猫安装",
                  variant: "text",
                  color: "primary",
                  href: "https://scriptcat.org/script-show-page/1860",
                  target: "_blank"
                })) : vue.createCommentVNode("", true),
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
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "copy-all",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_dialog = vue.resolveComponent("v-dialog");
        return vue.openBlock(), vue.createBlock(_component_v_dialog, {
          "max-width": "800",
          scrollable: ""
        }, {
          activator: vue.withCtx(({ props: activatorProps }) => [
            vue.createVNode(_component_v_btn, vue.mergeProps(activatorProps, {
              color: "surface-variant",
              text: "复制全部",
              variant: "flat"
            }), null, 16)
          ]),
          default: vue.withCtx(({ isActive }) => [
            vue.createVNode(_sfc_main$4, { "is-active": isActive }, null, 8, ["is-active"])
          ]),
          _: 1
        });
      };
    }
  });
  const _hoisted_1$1 = { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "gap": "1em" } };
  const _hoisted_2 = {
    class: "text-body-1",
    style: { "margin": "0" }
  };
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_8 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_9 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "reset-all-content",
    props: {
      isActive: {},
      setIsPersistent: { type: Function }
    },
    setup(__props) {
      const props = __props;
      const closeDialog = () => {
        props.isActive.value = false;
      };
      const inProgress = vue.ref(false);
      const progress = vue.ref(-1);
      const progressMessage = vue.ref("准备开始");
      const isAvailable = vue.ref(false);
      const isError = vue.ref(false);
      const isWaitingForRefresh = vue.ref(false);
      const allPaths = vue.ref([]);
      const handleReset = async () => {
        inProgress.value = true;
        props.setIsPersistent(true);
        if (allPaths.value.length === 0) {
          inProgress.value = false;
          isError.value = true;
          props.setIsPersistent(false);
          return;
        }
        for (const [index, path] of allPaths.value.entries()) {
          if (allPaths.value.length > 1) {
            progress.value = (index + 1) / allPaths.value.length * 100;
          }
          progressMessage.value = `正在重置：${path}`;
          const { taskId } = getTaskInfo();
          const window2 = _unsafeWindow;
          const response = await fetch(
            `https://data.educoder.net/api/tasks/${taskId}/reset_original_code.json?path=${path}`,
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
          if (res && res.content) {
            console.info(`重置成功：${path}`);
          } else {
            console.error(`重置失败：${path}`, res);
          }
          await new Promise((resolve) => setTimeout(resolve, 250));
        }
        progress.value = -1;
        progressMessage.value = "等待刷新";
        isWaitingForRefresh.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        window.location.reload();
        progressMessage.value = "重置完成，等待页面刷新";
        props.setIsPersistent(false);
      };
      vue.onMounted(() => {
        const window2 = _unsafeWindow;
        if (window2.educoderCopyHelper === void 0) {
          isAvailable.value = false;
          return;
        }
        isAvailable.value = true;
        const paths = window2.taskChallengePath && window2.taskChallengePath.split("；").filter((value) => value !== "");
        if (paths) {
          allPaths.value = paths;
        }
      });
      const handleRefresh = () => {
        window.location.reload();
      };
      return (_ctx, _cache) => {
        const _component_v_progress_circular = vue.resolveComponent("v-progress-circular");
        const _component_v_card_text = vue.resolveComponent("v-card-text");
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_spacer = vue.resolveComponent("v-spacer");
        const _component_v_card = vue.resolveComponent("v-card");
        return vue.openBlock(), vue.createBlock(_component_v_card, {
          "prepend-icon": "mdi-alert",
          title: isError.value ? "重置失败" : isAvailable.value ? "重置全部代码？" : "依赖插件未安装",
          loading: inProgress.value
        }, {
          actions: vue.withCtx(() => [
            !isAvailable.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
              key: 0,
              text: "安装插件",
              variant: "elevated",
              color: "primary",
              href: "https://greasyfork.org/scripts/495490",
              target: "_blank"
            })) : vue.createCommentVNode("", true),
            !isAvailable.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
              key: 1,
              text: "脚本猫",
              variant: "text",
              color: "primary",
              href: "https://scriptcat.org/script-show-page/1860",
              target: "_blank"
            })) : vue.createCommentVNode("", true),
            vue.createVNode(_component_v_spacer),
            vue.createVNode(_component_v_btn, {
              disabled: inProgress.value,
              onClick: closeDialog
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(isError.value ? "完成" : "取消"), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            isAvailable.value && !isError.value && !isWaitingForRefresh.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
              key: 2,
              disabled: inProgress.value,
              color: "error",
              variant: "tonal",
              onClick: handleReset
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 重置所有代码 ")
              ]),
              _: 1
            }, 8, ["disabled"])) : vue.createCommentVNode("", true),
            isWaitingForRefresh.value ? (vue.openBlock(), vue.createBlock(_component_v_btn, {
              key: 3,
              color: "primary",
              variant: "tonal",
              onClick: handleRefresh
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 手动刷新页面 ")
              ]),
              _: 1
            })) : vue.createCommentVNode("", true)
          ]),
          default: vue.withCtx(() => [
            inProgress.value ? (vue.openBlock(), vue.createBlock(_component_v_card_text, { key: 0 }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_1$1, [
                  vue.createVNode(_component_v_progress_circular, {
                    "model-value": progress.value,
                    indeterminate: progress.value === -1
                  }, null, 8, ["model-value", "indeterminate"]),
                  vue.createElementVNode("p", _hoisted_2, vue.toDisplayString(progressMessage.value), 1)
                ])
              ]),
              _: 1
            })) : isError.value ? (vue.openBlock(), vue.createBlock(_component_v_card_text, { key: 1 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 重置失败，请刷新再试。 ")
              ]),
              _: 1
            })) : isAvailable.value ? (vue.openBlock(), vue.createBlock(_component_v_card_text, { key: 2 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 你确定要将所有代码恢复为初始状态？"),
                _hoisted_3,
                _hoisted_4,
                vue.createTextVNode(" 请注意，此操作不可撤销，所有未保存的代码将会丢失。 ")
              ]),
              _: 1
            })) : (vue.openBlock(), vue.createBlock(_component_v_card_text, { key: 3 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 本插件需要《头歌复制助手 EduCoder Copy Helper》安装并启用后方可使用。"),
                _hoisted_5,
                vue.createTextVNode("请安装并启用后刷新页面再试。 "),
                _hoisted_6,
                _hoisted_7,
                vue.createTextVNode(" Greasy Fork 安装地址：https://greasyfork.org/scripts/495490 "),
                _hoisted_8,
                _hoisted_9,
                vue.createTextVNode(" ScriptCat脚本猫 安装地址：https://scriptcat.org/script-show-page/1860 ")
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["title", "loading"]);
      };
    }
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "reset-all",
    setup(__props) {
      const isPersistent = vue.ref(false);
      const setIsPersistent = (value) => {
        isPersistent.value = value;
      };
      return (_ctx, _cache) => {
        const _component_v_btn = vue.resolveComponent("v-btn");
        const _component_v_dialog = vue.resolveComponent("v-dialog");
        return vue.openBlock(), vue.createBlock(_component_v_dialog, {
          "max-width": "400",
          persistent: isPersistent.value
        }, {
          activator: vue.withCtx(({ props: activatorProps }) => [
            vue.createVNode(_component_v_btn, vue.mergeProps(activatorProps, {
              "prepend-icon": "mdi-restart",
              color: "warning",
              text: "全部重置",
              variant: "plain"
            }), null, 16)
          ]),
          default: vue.withCtx(({ isActive }) => [
            vue.createVNode(_sfc_main$2, {
              "is-active": isActive,
              "set-is-persistent": setIsPersistent
            }, null, 8, ["is-active"])
          ]),
          _: 1
        }, 8, ["persistent"]);
      };
    }
  });
  const _hoisted_1 = { style: { "display": "flex", "flex-direction": "row", "gap": "0.5em", "align-items": "center" } };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "toolbar-app",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createVNode(_sfc_main$1),
          vue.createVNode(_sfc_main$3)
        ]);
      };
    }
  });
  const appendCopyAllButton = () => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://registry.npmmirror.com/@mdi/font/7.4.47/files/css/materialdesignicons.min.css";
    document.head.appendChild(css);
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