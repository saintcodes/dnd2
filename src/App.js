import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count => count +1)
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
