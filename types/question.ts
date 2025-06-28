/*
    type: 'multiple',
    difficulty: 'easy',
    category: 'Sports',
    question: 'How many soccer players should be on the field at the same time?',
    correct_answer: '22',
    incorrect_answers: [ '20', '24', '26' ]
*/

export type Question = {
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type Category = {
    id: number;
    name: string;
}