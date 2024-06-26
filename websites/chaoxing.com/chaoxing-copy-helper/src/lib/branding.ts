const href = window.location.href;

export const addBranding = () => {
  addExamBranding();
};

const addExamBranding = () => {
  if (href.includes("exam-ans/exam/test")) {
    const markInfo = document.querySelector(".mark_info");
    if (markInfo) {
      const branding = document.createElement("p");
      branding.innerHTML = `已解除复制/粘贴限制<br><span style="font-size: 12px;">- 由 <a href="https://greasyfork.org/scripts/496958" target="_blank">学习通复制粘贴助手 Chaoxing Copy Helper 提供</a> -</span>`;
      markInfo.appendChild(branding);
    }
  }
};
