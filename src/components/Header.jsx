import logo from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <div className='header-div'>
            <img className="quiz-logo" src={logo} alt="quiz-logo" />
            <h3 className="header-text">Geography Quiz</h3>
        </div>
    )
}