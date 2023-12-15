// ==UserScript==
// @name         学习通导出习题
// @namespace    https://github.com/lcandy2
// @version      1.3
// @description  添加一个切换答案按钮，点击可显示/隐藏答案
// @author       Lcandy
// @match        *://mooc1.chaoxing.com/mooc*
// @match        *://mooc1.chaoxing.com/exam*
// @homepage     https://github.com/lcandy2/user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

const getTitle = () => {
    // 提取标题中的文本
    const titleCss = '.mark_title';
    const title = document.querySelector(titleCss)?.textContent;
    return title;
}

const extractTextAndImage = (node) => {
    let extractedContent = [];

    /**
     * Retrieves the styled text content from a given node.
     * 
     * @param {Node} node - The node to retrieve the styled text content from.
     * @returns {string} - The styled text content.
     */
    const getTextStyle = (node) => {
        const textContent = node.textContent;
        const parentNode = node.parentNode;
        const isCurrentNodeDiv = node.tagName === 'DIV'
        let styledTextContent = textContent;
        while (node && !isCurrentNodeDiv && parentNode) {
            // Check if the node is a span with style attribute
            if (node.tagName === 'SPAN' && node.getAttribute('style')) {
                const spanStyle = node.getAttribute('style');
                const formattedSpanStyle = spanStyle.replace(/\s+/g, '');

                // Style for underline text
                const underlineReg = /text-decoration-line:\s*underline/;
                if (underlineReg.test(formattedSpanStyle)) {
                    styledTextContent = `<ins>${styledTextContent}</ins>`;
                }
            }
            if (node.tagName === 'STRONG') {
                styledTextContent = `**${styledTextContent}**`;
            }
            if (node.tagName === 'P') {
                styledTextContent = `\n${styledTextContent}`;
            }

            node = node.parentNode;
        }
        return styledTextContent.trim();
    };

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const textContent = getTextStyle(node);
            extractedContent.push(textContent);
            // extractedContent.push(node.textContent);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // if (node.tagName === 'P') extractedContent.push('\n');
            if (node.hasChildNodes()) {
                // node.childNodes.forEach((childNode) => {
                //     processNode(childNode);
                // });
                Array.from(node.childNodes).forEach(processNode);
            } else {
                if (node.tagName === 'IMG') {
                    const src = node.src;
                    const title = node.title ?? node.alt;
                    const image = ` ![${title}](${src}) `;
                    extractedContent.push(image);
                // } else if (node.tagName === 'SPAN') {
                //     console.log('span')
                //     console.log(node.getAttribute('style'));
                //     // && /text-decoration-line:\s*underline/.test(node.getAttribute('style').replace(/\s+/g, ''))
                //     console.log('underline')
                //     extractedContent.push('<ins>' + node.textContent + '</ins>');
                // } else if (node.tagName === 'P') {
                //     extractedContent.push(`\n${node.textContent.trim()}`);
                } else {
                    extractedContent.push(node.textContent.trim());
                }
            }
        }
    }

    processNode(node);

    return extractedContent.join('');
}


const getQuestions = () => {
    const css = {
        markTable: '.mark_table', // Question Area
        markItem: '.mark_item', // Question Category
        markItemTitle: '.type_tit', // Question Category Title
        questionLi: '.questionLi', // Single Question Area
        markName: '.mark_name', // Single Question
        markAnswer: '.mark_answer', // Single Question Answer Area
        markFill: '.mark_fill', // Single Question Answer
        colorDeep: '.colorDeep', // Single My Answer
        colorGreen: '.colorGreen' // Single Correct Answer
    }
    const questions = [];
    const items = document.querySelectorAll(`${css.markTable} ${css.markItem}`);
    items.forEach((item) => {
        const category = item.querySelector(css.markItemTitle).textContent;
        const questionLis = item.querySelectorAll(css.questionLi);
        const marks = [];
        questionLis.forEach((questionLi) => {
            // Get question content
            const markName = questionLi.querySelector(css.markName);
            const questionContent = extractTextAndImage(markName);
            // Get correct answer
            const colorGreen = questionLi.querySelector(css.colorGreen);
            const answerContent = extractTextAndImage(colorGreen);
            // Merge question and answer
            const mark = {
                question: questionContent,
                answer: answerContent
            }
            marks.push(mark);
        });
        const question = {
            title: category,
            questions: marks
        };
        questions.push(question);
    })

    return questions;
}

(function () {
    'use strict';

    let output = '';

    const title = getTitle();
    output += `## ${title}\n\n`;

    const questions = getQuestions();

    questions.forEach((question) => {
        const title = question.title;
        output += `##### ${title}\n\n`;
        const questions = question.questions;
        questions.forEach((question) => {
            const questionContent = question.question;
            const answer = question.answer;
            output += `${questionContent}\n`;
            output += `\n${answer}\n\n\n`;
        });
    });

    document.querySelector('.mark_table').previousElementSibling.textContent = `<p>${output}</p>`;

    console.log(output);
})();