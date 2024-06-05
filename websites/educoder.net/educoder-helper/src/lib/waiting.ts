export function waitTwoTime() {
  // 生成一个2.5到5.0之间的随机数
  const randomTime = 2.5 + Math.random() * (5.0 - 2.5);

  // 将随机时间转换为毫秒
  const randomTimeInMilliseconds = randomTime * 1000;

  // 返回一个新的Promise，它将在随机时间后解析
  return new Promise(resolve => setTimeout(resolve, randomTimeInMilliseconds));
}

export function waitTime(ms: number) {
  // 返回一个新的Promise，它将在随机时间后解析
  return new Promise(resolve => setTimeout(resolve, ms));
}
