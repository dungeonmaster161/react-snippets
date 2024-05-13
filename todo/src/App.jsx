import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(0)
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(function(res){
      // const json = await res.json();
    })
  },[])
  return (
    <>
    will work on this compnent
    </>
  )
}

export default App
