import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return(
    <p>Volviendo hacer la app de react</p>
  )
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='blue' message="Recordandome"/>
      <Mensaje color='green' message="si ahuevo aprendi"/>
      <Mensaje color='red' message="lo primero"/>
      <Description />
    </div>
  );
}

export default App;
