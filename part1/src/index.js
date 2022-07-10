import {useState} from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

const App = (props) => {
  const [contador, setContador] = useState(0)

  /*const contador = useState(0)
  const contadorValue = contador[0]
  const updateContador = contador[1]
  */

  const handleClick = () => setContador(contador + 1)

  const handleClickReset = () => setContador(0)

  const handleClickDes = () => {
    contador === 0 ? setContador(0) : setContador(contador - 1)
  }

  return (
    <div>
      <p>El valor del contador es:</p>
      <h1>{contador}</h1>
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