import {useState} from 'react'

function Add() {

    const [add,setadd]=useState(0)
    const sum=()=>{
        
        
        setadd(add+1)
    }
    
    
  return (
    <div>
        <button onClick={sum}>add{add}</button>
        
    </div>
  )
}

export default Add

