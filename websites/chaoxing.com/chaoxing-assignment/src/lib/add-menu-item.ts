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
      `setUrl('1000001','https://mooc1-api.chaoxing.com/work/stu-work',this,'0','全部作业')`,
    );
    menuItemElement.setAttribute(
      "dataurl",
      "https://mooc1-api.chaoxing.com/work/stu-work",
    );
    const iconElement = document.createElement("span");
    iconElement.className = "icon3 zne_bj_icon";
    menuItemElement.appendChild(iconElement);
    const titleElement = document.createElement("h5");
    titleElement.title = "全部作业";
    titleElement.textContent = "全部作业";
    menuItemElement.appendChild(titleElement);
    const arrowElement = document.createElement("span");
    arrowElement.className = "arrow icon-uniE900";
    menuItemElement.appendChild(arrowElement);
    menubarElement.prepend(menuItemElement);
  }
};
