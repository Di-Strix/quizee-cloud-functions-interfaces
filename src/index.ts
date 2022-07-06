import { Answer, Quiz, QuizId, QuizInfo } from '@di-strix/quizee-types';

export type QuizeeCloudFunction = 'getQuizeeList' | 'checkAnswers' | 'publishQuizee';

export type GetQuizeeListFunction = () => Promise<QuizInfo[]>;
export type CheckAnswersFunction = (data: { answers: Omit<Answer, 'config'>[]; quizId: QuizId }) => Promise<number>;
export type PublishQuizeeFunction = (data: Quiz) => Promise<{ quizId: string }>;
