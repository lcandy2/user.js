declare const countDownInterval: number | undefined;

export function removeTimingScripts() {
  const scripts = document.querySelectorAll("script");
  scripts.forEach((script) => {
    if (script.innerHTML.includes("#timer")) {
      script.remove();
    }
  });
  countDownInterval && clearInterval(countDownInterval);
}

export function removeTimingElements() {
  const elements = document.querySelectorAll(".countdown");
  elements.forEach((element) => {
    element.remove();
  });
}
