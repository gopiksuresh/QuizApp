export interface Questions{
    no:number,
    questionText:string,
    selectedValue?:number,
    correctAnswer: number,
    options:QuestionOptions[]
}

export interface QuestionOptions{
    value:number,
    text:string
}

export interface SelectedAnswer{
    id:number,
    value:number
}

export interface SubjectData{
    questions:Questions[],
    name: string,
    id: number
}

export interface QuestionAnswer{
    questionNo: number,
    answerId: number
}