import { Answer, QuizId, QuizInfo } from '@di-strix/quizee-types';

export type QuizeeCloudFunction = 'getQuizeeList' | 'checkAnswers';

export type GetQuizeeListFunction = () => QuizInfo[];
export type CheckAnswersFunction = (data: { answers: Answer[]; quizId: QuizId }) => number;
