// ==UserScript==
// @name         学习通考试移除背景水印
// @name:en      SuperStar: Remove exam identifier mask
// @namespace    https://github.com/lcandy2
// @version      1.2
// @description  通过删除水印元素的方式，移除学习通考试时个人信息（姓名、学号/工号）水印。请注意：本脚本仅供学习交流，严紧通过本脚本实行任何违反考试纪律的行为，脚本请于下载后的24小时内删除。
// @description:en  Remove exam identifier mask (including name and ID) of the SuperStar exam page. NOTICE: This script is for learning and communication purposes only. You will NOT do any academic misconduct using this script. Please delete the script within 24 hours after downloading.
// @author       Lcandy
// @homepage     https://github.com/lcandy2/user.js
// @match        *://*.chaoxing.com/exam*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    function removeMask() {
        let elements = document.getElementsByClassName('mask_div');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }

    // remove mask after page fully loaded
    if (document.readyState === 'complete') {
        removeMask();
    } else {
        document.addEventListener('readystatechange', () => {
            if (document.readyState === 'complete') {
                removeMask();
            }
        });
    }
})();
