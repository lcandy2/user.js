export const addMenuItem = () => {
  const menubarElement = document.querySelector('div.menubar[role="menubar"]');
  if (menubarElement) {
    const menuItemElement = document.createElement("a");
    menuItemElement.setAttribute("role", "menuitem");
    menuItemElement.setAttribute("focus_element", "0");
    menuItemElement.setAttribute("tabindex", "-1");
    menuItemElement.id = "first1000001";
    menuItemElement.setAttribute("imgname", "icon-home");
    menuItemElement.setAttribute(
      "onclick",
      `setUrl('1000001','https://mooc1-api.chaoxing.com/work/stu-work#chaoxing-assignment',this,'0','全部作业')`,
    );
    menuItemElement.setAttribute(
      "dataurl",
      "https://mooc1-api.chaoxing.com/work/stu-work#chaoxing-assignment",
    );
    const iconElement = document.createElement("span");
    iconElement.className = "icon-space icon-bj";
    menuItemElement.appendChild(iconElement);
    const titleElement = document.createElement("h5");
    titleElement.title = "全部作业";
    const boldElement = document.createElement("b");
    boldElement.textContent = "全部作业";
    titleElement.appendChild(boldElement);
    menuItemElement.appendChild(titleElement);
    const arrowElement = document.createElement("span");
    arrowElement.className = "arrow icon-uniE900";
    menuItemElement.appendChild(arrowElement);
    menubarElement.prepend(menuItemElement);
  }
};

export const addMenuItemExam = () => {
  const menubarElement = document.querySelector('div.menubar[role="menubar"]');
  if (menubarElement) {
    const menuItemElement = document.createElement("a");
    menuItemElement.setAttribute("role", "menuitem");
    menuItemElement.setAttribute("focus_element", "0");
    menuItemElement.setAttribute("tabindex", "-1");
    menuItemElement.id = "first1000002";
    menuItemElement.setAttribute("imgname", "icon-home");
    menuItemElement.setAttribute(
      "onclick",
      `setUrl('1000002','https://mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode#chaoxing-assignment',this,'0','全部考试')`,
    );
    menuItemElement.setAttribute(
      "dataurl",
      "https://mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode#chaoxing-assignment",
    );
    const iconElement = document.createElement("span");
    iconElement.className = "icon-space icon-cj";
    menuItemElement.appendChild(iconElement);
    const titleElement = document.createElement("h5");
    titleElement.title = "全部考试";
    const boldElement = document.createElement("b");
    boldElement.textContent = "全部考试";
    titleElement.appendChild(boldElement);
    menuItemElement.appendChild(titleElement);
    const arrowElement = document.createElement("span");
    arrowElement.className = "arrow icon-uniE900";
    menuItemElement.appendChild(arrowElement);
    menubarElement.prepend(menuItemElement);
  }
};

export const addMenuItemLegacy = () => {
  const funclistulElement = document.querySelector("ul.funclistul");
  if (funclistulElement) {
    const liElement = document.createElement("li");
    liElement.id = "li_chaoxing-assignment-task";
    const spanElement = document.createElement("span");
    liElement.appendChild(spanElement);
    const aElement = document.createElement("a");
    aElement.id = "chaoxing-assignment-task";
    aElement.href =
      "javascript:switchM('chaoxing-assignment-task','https://mooc1-api.chaoxing.com/work/stu-work#chaoxing-assignment')";
    aElement.target = "_top";
    aElement.title = "全部作业";
    const bIconElement = document.createElement("b");
    bIconElement.className = "liticons znewyun zne_bj_icon";
    aElement.appendChild(bIconElement);
    const emTitleElement = document.createElement("em");
    emTitleElement.setAttribute("style", "font-weight: bolder;");
    emTitleElement.textContent = "全部作业";
    aElement.appendChild(emTitleElement);
    liElement.appendChild(aElement);
    funclistulElement.prepend(liElement);
  }
};

export const addMenuItemExamLegacy = () => {
  const funclistulElement = document.querySelector("ul.funclistul");
  if (funclistulElement) {
    const liElement = document.createElement("li");
    liElement.id = "li_chaoxing-assignment-exam";
    const spanElement = document.createElement("span");
    liElement.appendChild(spanElement);
    const aElement = document.createElement("a");
    aElement.id = "chaoxing-assignment-exam";
    aElement.href =
      "javascript:switchM('chaoxing-assignment-exam','https://mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode#chaoxing-assignment')";
    aElement.target = "_top";
    aElement.title = "全部考试";
    const bIconElement = document.createElement("b");
    bIconElement.className = "liticons znewyun zne_jc_icon";
    aElement.appendChild(bIconElement);
    const emTitleElement = document.createElement("em");
    emTitleElement.setAttribute("style", "font-weight: bolder;");
    emTitleElement.textContent = "全部考试";
    aElement.appendChild(emTitleElement);
    liElement.appendChild(aElement);
    funclistulElement.prepend(liElement);
  }
};
