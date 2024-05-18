export const wrapElements = () => {
  const wrapper = document.createElement("body");
  wrapper.id = "chaoxing-assignment-wrapper";
  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }
  document.body.appendChild(wrapper);
  wrapper.style.display = "none";
};

export const removeStyles = () => {
  removeHtmlStyle();
  const styles = document.querySelectorAll("link[rel=stylesheet]");
  styles.forEach((style) => {
    if (style.getAttribute("href")?.includes("chaoxing")) {
      style.remove();
    }
  });
};

const removeHtmlStyle = () => {
  const html = document.querySelector("html");
  html?.removeAttribute("style");
};

export const keepRemoveHtmlStyle = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        removeHtmlStyle();
      }
    });
  });
  const html = document.querySelector("html");
  html && observer.observe(html, { attributes: true });
}

export const removeScripts = () => {
  const scripts = document.querySelectorAll("script");
  scripts.forEach((script) => {
    if (script.getAttribute("src")?.includes("chaoxing")) {
      script.remove();
    }
  });
}
