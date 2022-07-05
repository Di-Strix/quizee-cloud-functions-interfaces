import { Answer, QuizId, QuizInfo } from '@di-strix/quizee-types';

export type QuizeeCloudFunction = 'getQuizeeList' | 'checkAnswers';

export type GetQuizeeListFunction = () => Promise<QuizInfo[]>;
export type CheckAnswersFunction = (data: { answers: Omit<Answer, 'config'>[]; quizId: QuizId }) => Promise<number>;
