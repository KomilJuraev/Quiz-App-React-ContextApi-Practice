import { useState } from 'react';

import Quiz from './components/Quiz';
import Summary from './components/Summary';
import QuizContextProvider from './store/quiz-context';

import QUESTIONS from "./Questions"

function App() {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState([]);

    function handleSelectAnswer(event) {
        const selectedAnswer = event.target.textContent;
        setAnswer([...answer,
        {
            id: index,
            question: QUESTIONS[index].text,
            selectedAnswer: selectedAnswer,
            correctAnswer: QUESTIONS[index].correctAnswer
        }
        ])
        setIndex((prevIndex) => prevIndex + 1);
    }

    return (
        <QuizContextProvider value={answer}>
            <div>
                {
                    index < QUESTIONS.length ?
                        (<Quiz question={QUESTIONS[index]} onSelect={handleSelectAnswer} />)
                        :
                        (<Summary />)
                }
            </div>
        </QuizContextProvider>
    )
}

export default App;