// ==UserScript==
// @name         中国大学MOOC隐藏答案
// @namespace    https://github.com/lcandy2
// @version      1.4
// @description  添加一个切换答案按钮，点击可显示/隐藏答案
// @author       lcandy2
// @license      MIT
// @match        *://www.icourse163.org/learn/*
// @homepage     https://github.com/lcandy2/user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

function main() {
  const targetElement = document.querySelector('.u-learn-moduletitle');
  if (targetElement) {
    console.log('中国大学MOOC隐藏答案');
    console.log(targetElement);
    const toggleButton = document.createElement('a');
    toggleButton.className = 'j-backList backbtn f-fl f-fc9';
    toggleButton.id = 'hideAnswer';
    toggleButton.tabIndex = '-1';
    toggleButton.textContent = '隐藏答案';

    targetElement.appendChild(toggleButton);
    let radioInputs, itemsRight, itemsWrong, analysisInfo, scoreElements;

    let visibility = true;

    toggleButton.addEventListener('click', () => {

      if (visibility) {
        radioInputs = document.querySelectorAll('input[type="radio"]:checked');
        itemsRight = document.querySelectorAll('li.f-cb.checked.right');
        itemsWrong = document.querySelectorAll('li.f-cb.checked.wrong');
        analysisInfo = document.querySelectorAll('.analysisInfo');
        scoreElements = document.querySelectorAll('.score.f-fr');
      }

      visibility ? visibility = false : visibility = true;
      radioInputs.forEach(input => {
        visibility ? input.checked = true : input.checked = false;
      });
      itemsRight.forEach(item => {
        visibility ? item.className = 'li f-cb checked right' : item.className = 'f-cb';
      });
      itemsWrong.forEach(item => {
        visibility ? item.className = 'li f-cb checked wrong' : item.className = 'f-cb';
      });
      analysisInfo.forEach(element => {
        visibility ? element.style.display = 'block' : element.style.display = 'none';
      });
      scoreElements.forEach(element => {
        visibility ? element.style.display = 'block' : element.style.display = 'none';
      });
      toggleButton.textContent = visibility ? '隐藏答案' : '显示答案';
    });
  }
}

window.onload = main;
