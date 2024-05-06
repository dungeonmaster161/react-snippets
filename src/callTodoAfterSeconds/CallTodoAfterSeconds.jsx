import React, { useEffect, useState } from 'react'

export default function CallTodoAfterSeconds() {
    const [todo,setTodo] = useState([])
    useEffect(()=>{
        setInterval(()=>{
            fetch('https://sum-server.100xdevs.com/todos')
            .then(async function(res){
                const json = await res.json()
                console.log(json.todos," This is value")
                setTodo([...todo,...json.todos])
            })
        },2000)
      
    },[todo])
    
  return (
    <div>
        {
          todo.length &&  todo.map((data,i)=>{
                return(
                    <>
                    <h1>{data.title}</h1>
                    <h2>{data.description}</h2>
                    </>
                )
            })
        }
    </div>
  )
}
