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

export const removeContextMenuLimit = () => {
    // 重新绑定 contextmenu 事件，取消原来的禁止
    document.addEventListener('contextmenu', function(event) {
      event.stopPropagation(); // 阻止事件传播
    }, true); // 使用捕获模式
}
