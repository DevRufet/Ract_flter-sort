import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState } from 'react'
function Todo() {
    const [myinp, setmyinp] = useState("")
    const [data,setdata]= useLocalStorage("value",[])
    function add(){
        setdata([...data,myinp])
        setmyinp("")
    }
  return (
    <>
    <input type="text" value={myinp} onChange={e=>setmyinp(e.target.value)}/>
    <br />
    <button onClick={()=>add()}>add</button>
    {
        data.map((x,i)=><h2 key={i}>{x}</h2>)
    }
    </>
  )
}

export default Todo