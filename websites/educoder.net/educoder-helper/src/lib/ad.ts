export const removeBanner = () => {
  const antSpinContainer = document.querySelector('.ant-spin-container');
  if (antSpinContainer && antSpinContainer.children.length >= 2) {
    const firstChild = antSpinContainer.children[0];
    const secondChild = antSpinContainer.children[1];
    if (!firstChild.className.includes('header') && secondChild.className.includes('header')) {
      firstChild.setAttribute('style', 'display: none;')
    }
  }
}

export const removeModal = () => {
  const adModal = document.querySelector('div.selfdomModal___doNCF');
  adModal?.setAttribute('style', 'display: none;');
}

export const removeAffix = () => {
  const affixContainer = document.querySelector('.affixContainer___CWtV9');
  affixContainer?.setAttribute('style', 'display: none;');
}
