import { useContext } from "react"
import { QuizContext } from "../store/quiz-context"

export default function AnsweredPercentage() {
    const answers = useContext(QuizContext);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    
    answers.map((answer) => {
        if (answer.selectedAnswer === answer.correctAnswer) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    })

    function convertToPercentage() {
        correctAnswers = correctAnswers / 10 * 100;
        incorrectAnswers = incorrectAnswers / 10 * 100;
    }

    convertToPercentage();

    return (
        <div className='percentage-container'>
            <div className='correct-div'>
                <h3>Correctly Answered</h3>
                <p>{correctAnswers} %</p>
            </div>
            <div className='incorrect-div'>
                <h3>Incorrectly Answered</h3>
                <p>{incorrectAnswers} %</p>
            </div>
        </div>

    )
}