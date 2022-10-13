import { Answer, Quiz, QuizId, QuizInfo } from '@di-strix/quizee-types';

export type QuizeeCloudFunction = 'getQuizeeList' | 'checkAnswers' | 'publishQuizee';

export namespace GetQuizeeList {
  export type ReturnType = Promise<QuizInfo[]>;
  export type Args = [];
  export type Function = (...args: Args) => ReturnType;
}

export namespace CheckAnswers {
  export type ReturnType = Promise<number>;
  export type Args = [{ answers: Omit<Answer, 'config'>[]; quizId: QuizId }];
  export type Function = (...args: Args) => ReturnType;
}

export namespace PublishQuizee {
  export type ReturnType = Promise<{ quizId: string }>;
  export type Args = [Quiz];
  export type Function = (...args: Args) => ReturnType;
}

export namespace GetFullQuizee {
  export type ReturnType = Promise<Quiz>;
  export type Args = [QuizId];
  export type Function = (...args: Args) => ReturnType;
}

export namespace GetPublicQuizee {
  export type ReturnType = Promise<Omit<Quiz, 'answers'>>;
  export type Args = [QuizId];
  export type Function = (...args: Args) => ReturnType;
}
