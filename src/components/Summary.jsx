import SummaryHeader from './SummaryHeader';
import AnsweredPercentage from './AnsweredPercentage';
import ResultList from './ResultList';

export default function Summary() {
    return (
        <div className='summary-div'>
            <div className='summary-lightbox'>
                <SummaryHeader />
                <AnsweredPercentage />
                <ResultList />
            </div>
        </div>
    )
}