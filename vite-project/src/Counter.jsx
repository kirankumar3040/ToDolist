import React from 'react'
import { useState } from 'react'

export const Counter = (props) => {
    const[count,setcount]=useState(2);
    const increment=()=>{
        setcount(count+1)
    }
    const deccrese=()=>{
        setcount(count-1)
    }
  return (
    <div>
<h1>CounterFunction</h1>
<p>{count}</p>
<button onClick={increment}>increse</button>
<button onClick={deccrese}>deccrese</button>

 <p>{props.name}</p>
 <p>{props.salary}</p>


    </div>
  )
}
