import logo from '../assets/quiz-complete.png'

export default function SummaryHeader() {
    return (
        <div className='simmary-header'>
            <img className="completed-logo" src={logo} alt="completed" />
            <h3>Quiz Summary</h3>
        </div>
    )
}