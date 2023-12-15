// ==UserScript==
// @name         禁止 Leetcode 跳转中文站 2024
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  通过屏蔽英文版 Leetcode 中相关的中文站资源加载，从而禁止其自动跳转中文站点，并同时屏蔽中文站提示广告。
// @author       Citron
// @license      MIT
// @match        https://leetcode.com/*
// @grant        GM_webRequest
// @run-at       document-start
// ==/UserScript==
 
// codes below is based on @Tamce(https://greasyfork.org/users/674262) and @zgxkbtl(https://greasyfork.org/users/703747)
(function() {
    'use strict';
    GM_webRequest([
        { selector: 'https://leetcode.cn/api/is_china_ip/*', action: 'cancel' },
        { selector: 'https://assets.leetcode-cn.com/*', action: 'cancel' },
    ], function(info, message, details) {
        console.log(info, message, details);
    });
})();