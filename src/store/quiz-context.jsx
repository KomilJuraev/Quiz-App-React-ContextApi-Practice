import { createContext } from "react";

export const QuizContext = createContext([]);

export default function QuizContextProvider({ children, value }) {
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}