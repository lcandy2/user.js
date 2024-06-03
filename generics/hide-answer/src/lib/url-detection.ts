type UrlType = "chaoxing-mooc" | undefined;

const chaoxingMooc = "mooc1.chaoxing.com/mooc";
const chaoxingExam = "mooc1.chaoxing.com/exam";

export const UrlDetection = (): UrlType => {
  const url = window.location.href;
  if (url.includes(chaoxingMooc) || url.includes(chaoxingExam)) {
    if (
      url.includes("work/view") ||
      url.includes("test/reVersionPaperMarkContentNew")
    ) {
      return "chaoxing-mooc";
    }
  }
};
