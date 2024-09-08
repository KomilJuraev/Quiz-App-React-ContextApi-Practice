import { useContext } from "react"
import { QuizContext } from "../store/quiz-context"

export default function ResultList() {
    const answers = useContext(QuizContext);

    return (
        <div className="result-container">
            <ul>
                {
                    answers.map((answer, index) => (
                        <li key={index}>
                            <p>Question {answer.id + 1}: {answer.question}</p>
                            {
                                answer.selectedAnswer === answer.correctAnswer ?
                                    (<span><p className="correct-answer">{answer.correctAnswer}</p></span>) :
                                    (
                                        <span>
                                            <p className="incorrect-answer">{answer.selectedAnswer}</p>
                                            <p className="correct-answer">{answer.correctAnswer}</p>
                                        </span>
                                    )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}