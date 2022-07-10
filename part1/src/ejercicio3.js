import {useState} from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

const Counter = ({number}) => {
  return <h1>{number}</h1>
}

const App = (props) => {
  const [contador, setContador] = useState(0)


  const handleClick = () => setContador(contador + 1)

  const handleClickReset = () => setContador(0)

  const handleClickDes = () => {
    contador === 0 ? setContador(0) : setContador(contador - 1)
  }

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador} />
      <button onClick={handleClick}>
        incrementar
      </button>
      <button onClick={handleClickDes}>
        Descrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>
  )
}

ReactDOM.render(<App />, rootElement)