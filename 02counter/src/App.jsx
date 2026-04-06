import { useState } from 'react'

function App() {
  let [counter,setCounter]=useState(15)
  //let counter=15
  
  const addValue=()=>{
   // console.log("clicked ", counter)
    //counter=counter+1
   //setCounter(counter+1)
    //setCounter(counter+1)
    //setCounter(counter+1)
    //setCounter(counter+1)
    //setCounter(()=>) call accept karta h 
    setCounter((prevCounter)=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)// previse state ko store rakta h 



  }

  const removeValue=()=>{
    console.log("clicked",counter)
    counter=counter-1
    setCounter(counter)
  };

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button >      
    </>
  )
}

export default App
