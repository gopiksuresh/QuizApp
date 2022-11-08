import { QuestionAnswer, Questions } from "./questions";

export interface ReportData{
    name: string,
    questions: Questions[],
    answers: QuestionAnswer[]
}