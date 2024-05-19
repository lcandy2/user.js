declare global {
  interface Window {
    globalResponseContent: any;
    taskChallengePath: string;
    xEduSignature: string;
    xEduTimestamp: string;
    xEduType: string;
  }
}

export {};
