import {useState} from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const rootElement = document.getElementById('root')

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: 'Mensaje en el estado'
  });
  const[clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
    };

    setCounters(newCountersState);
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }


  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
      <p>Clicks totales: {clicks.length}</p>
      {clicks.join(' ')}
    </div>
  )
}

ReactDOM.render(<App />, rootElement)