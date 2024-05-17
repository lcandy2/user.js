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
  const styles = document.querySelectorAll("link[rel=stylesheet]");
  styles.forEach((style) => {
    if (style.getAttribute("href")?.includes("chaoxing")) {
      style.remove();
    }
  });
};
