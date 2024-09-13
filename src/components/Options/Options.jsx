import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetOptions }) => {
    return (
        <div className={css.options}>
            <button onClick={() => updateFeedback('good')} className={css.btn}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={css.btn}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={css.btn}>Bad</button>
            {totalFeedback > 0 ? <button onClick={resetOptions} className={css.btn}>Reset</button> : ''}
        </div>
    )
}

export default Options;