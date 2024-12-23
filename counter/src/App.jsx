import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button  
      onClick={addValue}>Add value{counter}
      </button>
      <br />
      <button
      onClick={removeValue}>Remove value{counter}</button>
    </div>
  )
}

export default App
