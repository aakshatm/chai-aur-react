import { useState } from 'react'
import './App.css'

function App() {


  const [counter, setCounter] = useState(10);

  const addHandler = () => {
    if (counter < 20){
      setCounter(counter + 1);
    }
  }

  const subHandler = () => {
    if (counter > 0){
      setCounter(counter - 1);
    }
  }

  return <>
    <h1>Counter Value : {counter}</h1>
    <button onClick={addHandler}>Add Value</button>
    <br />
    <button onClick={subHandler}>Subtract Value</button>

  </>
}

export default App
