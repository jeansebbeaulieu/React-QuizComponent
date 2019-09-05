import React, { Component } from 'react';
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require('./quiz_data.json');

console.log(quizData);
class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = { quiz_position: 1 };
    }
    render() {
        const isQuizEnd = this.state.quiz_position-1 === quizData.quiz_questions.length;
        return <div>
            {isQuizEnd?<QuizEnd/>:''}
            {!isQuizEnd?<QuizQuestion quiz_question={quizData.quiz_questions[0]}/>:''}

        </div>;
    }
}

export default Quiz;
