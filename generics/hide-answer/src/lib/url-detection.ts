type UrlType = "chaoxing-mooc" | undefined;

const chaoxingMooc = 'mooc1.chaoxing.com/mooc';
const chaoxingExam = 'mooc1.chaoxing.com/exam';

export const UrlDetection = (): UrlType => {
  const url = window.location.href;
  // const hash = window.location.hash;
  // if (hash.includes("chaoxing-assignment")) {
  //   if (url.includes("mooc1-api.chaoxing.com/work/stu-work")) {
  //     return "homework";
  //   }
  //   if (url.includes("mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode")) {
  //     return "exam";
  //   }
  // }
  if (url.includes(chaoxingMooc) || url.includes(chaoxingExam)) {
    return "chaoxing-mooc";
  }
};
