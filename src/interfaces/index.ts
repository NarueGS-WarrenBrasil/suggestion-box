export interface ISuggestion {
    author: string;
    age: string;
    score: string;
    content: string;
    hour: number;
    day: number;
    mounth: number;
    year: number;
    comments: object[] | never[],
};

export interface IComment {
    commentator: string;
    text: string;
}