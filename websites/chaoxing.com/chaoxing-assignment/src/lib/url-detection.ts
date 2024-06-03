type UrlType = "home" | "homework" | "legacyHome" | "exam" | undefined;

export const urlDetection = (): UrlType => {
  const url = window.location.href;
  const hash = window.location.hash;
  if (hash.includes("chaoxing-assignment")) {
    if (url.includes("mooc1-api.chaoxing.com/work/stu-work")) {
      return "homework";
    }
    if (url.includes("mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode")) {
      return "exam";
    }
  }
  if (url.includes("i.chaoxing.com/base")) {
    return "home";
  }
  if (
    url.includes("i.mooc.chaoxing.com/space/index") ||
    url.includes("i.mooc.chaoxing.com/settings")
  ) {
    return "legacyHome";
  }
};
