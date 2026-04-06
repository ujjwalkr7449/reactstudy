import { useState } from 'react'
import './App.css'
import Add from './Add'
function App() {
  //two button use it increase and decrease buttons
  let [counter,setCounter]=useState(0)
  const addvalue=()=>{
    counter=counter+1
    setCounter(counter)
  }
  const remove=()=>{
    counter=counter-1
    setCounter(counter)
  }
  const sub=()=>{
    counter=counter-1
    setCounter(counter)


  }


  return (
    <>
    <h3>Counter {counter}</h3>
    <Add/>
    <button onClick={sub}>sub</button>

    <button onClick={addvalue}>AddValue{counter}</button>
    <button onClick={remove}>RemoveValue{counter}</button>
    </>
  )
}

export default App
