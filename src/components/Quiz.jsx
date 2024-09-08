import { useState } from "react";
import Header from "./Header";

export default function Quiz({ question, onSelect }) {
    return (
        <div className="quiz-window">
            <div className="quiz-lightbox">
                <div className="question-answer-div">
                    <Header />
                    <p className="question">
                        {question.text}
                    </p>
                    <ul className="answers" key={question.id}>
                        {
                            question.answers.map((answer, index) => (
                                <li
                                    className="answer"
                                    key={index}
                                    onClick={onSelect}>
                                    {answer}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}