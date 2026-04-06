import React from "react"
import { useState } from 'react'
//two buttons addValue and removeValue
function App(){
  let [count,setCount]=useState(1)
  const addValue=()=>{
    count=count+1
    count=count+1
    setCount(count)
  }
  const remove=()=>{
    count=count-1
    count=count-1
    setCount(count)
  }

  return(
    <>
    <h1>count</h1>
    <button onClick={addValue} >AddValue{count} </button>
    <br />
    <button onClick={remove}>RemoveValue{count}</button> //onClicked


    </>

  )
}



export default App


