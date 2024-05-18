declare const downloadBtn: HTMLButtonElement | undefined;

export function makeDownloadAvaliable() {
  const downloadBtnElement =
    downloadBtn || document.querySelector("#downloadBtn");
  downloadBtnElement && downloadBtnElement.removeAttribute("disabled");
}
