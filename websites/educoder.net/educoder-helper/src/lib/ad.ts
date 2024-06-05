export const removeBanner = () => {
  const antSpinContainer = document.querySelector('.ant-spin-container');
  if (antSpinContainer && antSpinContainer.firstElementChild) {
    const firstElementChild = antSpinContainer.firstElementChild;
    if (!firstElementChild.className.includes('header')) {
      firstElementChild.remove();
    }
  }
}
