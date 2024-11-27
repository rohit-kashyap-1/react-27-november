import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
 const [todo,setTodo] = useState({})
 const params = useParams()
 const id = params.id
 useEffect(function(){
    fetch('https://dummyjson.com/todos/'+id).then(response=>response.json()).then((data)=>{
        setTodo(data)
    })
 },[])
  return (
    <div>
      <div className='border p-4 rounded bg-dark text-white'>
        <h1>{todo.todo}</h1>
      </div>
    </div>
  )
}
