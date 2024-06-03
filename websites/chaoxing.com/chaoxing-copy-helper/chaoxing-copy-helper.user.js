// ==UserScript==
// @name         学习通复制粘贴助手 Chaoxing Copy Helper
// @namespace    https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-copy-helper
// @version      1.0
// @author       甜檸Cirtron (lcandy2)
// @description  📝解除超星学习通复制粘贴限制，解除学习通复制乱码问题；✨“一键复制题目”、“一键粘贴到答案”、“复制好友答案”等功能。🧹大小仅1.62KB，极小尺寸，无需任何权限，无需任何配置，安装即用。💛安全开源可读，无附加功能或远程代码，防止窃取其他信息
// @license      AGPL-3.0-or-later
// @copyright    lcandy2 All Rights Reserved
// @homepage     https://greasyfork.org/scripts/496958
// @homepageURL  https://greasyfork.org/scripts/496958
// @source       https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-copy-helper
// @match        *://*.chaoxing.com/*
// ==/UserScript==

(function () {
  'use strict';

  const removeCopyLimits = () => {
    document.body.removeAttribute("onselectstart");
    document.documentElement.style.userSelect = "unset";
    UE.EventBase.prototype.fireEvent = () => {
      console.info("[Chaoxing Copy Helper] Removed paste limits.");
      return null;
    };
    console.info("[Chaoxing Copy Helper] Removed copy limits.");
  };
  const href = window.location.href;
  const addBranding = () => {
    addExamBranding();
  };
  const addExamBranding = () => {
    if (href.includes("exam-ans/exam/test")) {
      const markInfo = document.querySelector(".mark_info");
      if (markInfo) {
        const branding = document.createElement("p");
        branding.innerHTML = `已解除复制/粘贴限制<br><span style="font-size: 12px;">- 由 学习通复制粘贴助手 Chaoxing Copy Helper 提供 -</span>`;
        markInfo.appendChild(branding);
      }
    }
  };
  setTimeout(() => {
    removeCopyLimits();
    addBranding();
  }, 1e3);

})();