export const removeUserSelectLimit = () => {
  // 选中 .questionItem___q6Hgu 的第一个子元素
  const qItemElement = document.querySelector('.questionItem___q6Hgu > *');

  // 如果元素存在，设置其 user-select 为 text
  if (qItemElement) {
    (qItemElement as HTMLDivElement).style.userSelect = "text";

    const firstChild = qItemElement.querySelector(':first-child');
    if (firstChild) {
      (firstChild as HTMLSpanElement).style.userSelect = "none";
    }
  }
}
