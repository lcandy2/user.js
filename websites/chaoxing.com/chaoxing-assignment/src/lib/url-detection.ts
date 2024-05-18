type UrlType = "home" | "homework" | "legacyHome" | undefined;

export const urlDetection = (): UrlType => {
  const url = window.location.href;
  if (url.includes("mooc1-api.chaoxing.com/work/stu-work")) {
    return "homework";
  }
  if (url.includes("i.chaoxing.com/base")) {
    return "home";
  }
  if (url.includes("i.mooc.chaoxing.com/space/index")) {
    return "legacyHome";
  }
};
