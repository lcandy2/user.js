declare const counterDown: HTMLDivElement | undefined;

export function addBrandization() {
  const counterDownElement =
    counterDown || document.querySelector("#countdown");
  if (counterDownElement) {
    const span = counterDownElement.querySelector("span");
    if (span) {
      const p1 = document.createElement("p");
      const style = span.getAttribute("style");
      style && p1.setAttribute("style", style);
      p1.textContent = "Download subtitles now! without any waiting!";
      counterDownElement.replaceChild(p1, span);
      const p2 = document.createElement("p");
      style && p2.setAttribute("style", style);
      p2.style.fontWeight = "normal";
      p2.innerHTML = `by <a href="https://greasyfork.org/scripts/495403" target="_blank">[Download Subtitles without Waiting]</a>, A <a href="https://github.com/lcandy2" target="_blank">甜檸Cirtron@lcandy2</a>'s project.`;
      counterDownElement.appendChild(p2);
    }
  }
}
