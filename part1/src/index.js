import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Titulo = () => <h1>Give Feedback</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleStateGood = () => {
    setGood(
      good + 1
    )
  };

  const handleStateNeutral = () => {
    setNeutral(
      neutral + 1
    )
  };

  const handleStateBad = () => {
    setBad(
      bad + 1
    )
  };

  let sum = good + neutral + bad;
  let res = sum / 3;
  let pos = good / sum;
  return (
    <div>
      <Titulo/>
      
      <button onClick={handleStateGood}>
        Good
      </button>
      <button onClick={handleStateNeutral}>
        Neutral
      </button>
      <button onClick={handleStateBad}>
        Bad
      </button>
      <h2>statics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {sum}</p>
      <p>Average: {res}</p>
      <p>positive: {pos}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)