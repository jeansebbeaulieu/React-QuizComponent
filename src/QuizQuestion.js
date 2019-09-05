import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    render() {
        let index = 0;
        return <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map((answer_option) => <QuizQuestionButton key={index++} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>)}
                </ul>
            </section>
        </main>;
    }

    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
            console.log('Good!');
            this.props.showNextQuestionHandler();
        } else {
            console.log('No good :(');
        }
    }
}

export default QuizQuestion;