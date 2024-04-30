import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function FilterandSort() {
     const [myinp, setmyinp] = useState("")
    const [datas, setdatas] = useState([])

     useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setdatas(data));
     
       
     }, [])
     
     function az(params){
        setdatas(datas.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
     }
     function za(params){
        setdatas(datas.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
     }
  return (
    <>
   <button onClick={()=>az("price")}>A-z</button>
   <br />
   <button onClick={()=>za("price")}>Z-a</button>
   <br />
   <input type="text" value={myinp} onChange={(e)=>setmyinp(e.target.value)}/>
    {    datas.filter((x)=>x.title.toLowerCase().includes(myinp.toLowerCase()))
        .map((x)=>(
            <div className="card-general" key={x.id}> 
            <h2>{x.title}</h2>
            <p>{x.description}</p>
            <p>Price : {x.price}</p>
          </div>
        ))
    }
    </>
  )
}

export default FilterandSort