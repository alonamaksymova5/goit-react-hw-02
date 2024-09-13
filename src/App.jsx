import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedOptions = localStorage.getItem('feedbackOptions');
    return savedOptions ? JSON.parse(savedOptions) : {
      good: 0,
	    neutral: 0,
	    bad: 0
    }
  }
  )

  useEffect(() => {
    localStorage.setItem('feedbackOptions', JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 })
    );
  }

  const resetOptions = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);


  
  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetOptions={resetOptions} />
      {totalFeedback > 0 ?  <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbak={positiveFeedback}/> :  <Notification />}
    </div>
  )
}


export default App;
