import { Answer, Quiz, QuizId, QuizInfo } from '@di-strix/quizee-types';

export type QuizeeCloudFunction = 'getQuizeeList' | 'checkAnswers' | 'publishQuizee';

export namespace GetQuizeeList {
  export type ReturnType = QuizInfo[];
  export type Arg = never;
  export type Function = (arg_0: Arg) => Promise<ReturnType>;
}

export namespace CheckAnswers {
  export type ReturnType = number;
  export type Arg = { answers: Omit<Answer, 'config'>[]; quizId: QuizId };
  export type Function = (arg_0: Arg) => Promise<ReturnType>;
}

export namespace PublishQuizee {
  export type ReturnType = { quizId: string };
  export type Arg = Quiz;
  export type Function = (arg_0: Arg) => Promise<ReturnType>;
}

export namespace GetFullQuizee {
  export type ReturnType = Promise<Quiz>;
  export type Arg = QuizId;
  export type Function = (arg_0: Arg) => Promise<ReturnType>;
}

export namespace GetPublicQuizee {
  export type ReturnType = Omit<Quiz, 'answers'>;
  export type Arg = QuizId;
  export type Function = (arg_0: Arg) => Promise<ReturnType>;
}
