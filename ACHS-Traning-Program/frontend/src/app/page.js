'use client'

import {useEffect, useState} from "react"

export default function Home() {
  const[data, setData] = useState({})
  useEffect(()=>{
    const getData =async() =>{
      const res= await fetch ('http://localhost:8080',{method:'GET'})
      const d=await res.json()
      console.log(d)
      setData(d)
    }
    getData()
  })
  return (
    <div>{data.message}</div>
  )
}
