import css from './Feedback.module.css';

const Feedback = ({feedback, totalFeedback, positiveFeedbak}) => {
    return (
        <div className={css.feedback}>
            <p className={css.text}>Good: {feedback.good}</p>
            <p className={css.text}>Neutral: {feedback.neutral}</p>
            <p className={css.text}>Bad: {feedback.bad}</p>
            <p className={css.text}>Total feedback: {totalFeedback}</p>
            <p className={css.text}>Positive: {positiveFeedbak}%</p>
        </div>
    )
}

export default Feedback;