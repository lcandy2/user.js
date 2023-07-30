// ==UserScript==
// @name         学习通隐藏答案
// @namespace    https://github.com/lcandy2
// @version      1.3
// @description  添加一个切换答案按钮，点击可显示/隐藏答案
// @author       Lcandy
// @license      MIT
// @match        *://mooc1.chaoxing.com/mooc*
// @match        *://mooc1.chaoxing.com/exam*
// @homepage     https://github.com/lcandy2/user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
  if (window.location.href.includes("work/view") || window.location.href.includes("test/reVersionPaperMarkContentNew")) {
    const targetElement = document.querySelector('.subNav');
    const toggleButton = document.createElement('div');
    toggleButton.className = 'sub-button fr';
    toggleButton.id = 'submitFocus';
    toggleButton.tabIndex = '-1';
    toggleButton.innerHTML = '<a href="javascript:;" class="fl" tabindex="0" role="button">隐藏答案</a>';

    targetElement.appendChild(toggleButton);

    const elements = document.getElementsByClassName('mark_answer');
    Array.from(elements).forEach(element => {
      element.style.visibility = 'visible';
    });

    toggleButton.addEventListener('click', function() {
      Array.from(elements).forEach(element => {
        element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
      });
      toggleButton.firstChild.textContent = toggleButton.firstChild.textContent === '隐藏答案' ? '显示答案' : '隐藏答案';
    });
  }
})();
