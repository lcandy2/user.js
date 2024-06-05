export const removeBanner = () => {
  const antSpinContainer = document.querySelector('.ant-spin-container');
  if (antSpinContainer && antSpinContainer.children.length >= 2) {
    const firstChild = antSpinContainer.children[0];
    const secondChild = antSpinContainer.children[1];
    if (!firstChild.className.includes('header') && secondChild.className.includes('header')) {
      firstChild.remove();
    }
  }
}
