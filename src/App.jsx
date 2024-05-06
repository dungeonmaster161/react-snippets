import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Todo from './component/Todo'
import WrapperComponent from './component/WrapperComponent'
import CallTodoAfterSeconds from './callTodoAfterSeconds/CallTodoAfterSeconds'

function App() {
  // const [random, setRandom] = useState("Random number will be generated here")

  return (
    <div>
      {/* <HeaderWithButton /> */}
      {/* <button onClick={()=>{
            setRandom("My name is "+Math.random())
          }}>Click me</button>
          <Header title={random} /> */}
      {/* <Header title={"Title 2"} />
      <Header title={"Title 3"} />
      <Header title={"Title 4"} />
      <Header title={"Title 5"} />
      <Header title={"Title 6"} /> */}
      {/* <CreateTodo /> */}

      {/* <WrapperComponent innerComponent={<TextComponent title="Card One" />} />
      <WrapperComponent innerComponent={<TextComponent title="Card Two" />} />

      <WrapperComponent>
        This is cleaner way for implementing card wrapper
      </WrapperComponent> */}
      <CallTodoAfterSeconds />
    </div>
  )
}

function TextComponent({title}){
  return(
      <div>
      {title}
      </div>
  )
}
//push down state make state change component that need to pass in component as low as possible to avoid extra 
// re rendering
function HeaderWithButton(){
  const [random, setRandom] = useState("Random number will be generated here")
  return(
    <div>
    <button onClick={()=>{
            setRandom("My name is "+Math.random())
          }}>Click me</button>
          <Header title={random} />
    </div>
  )
}

function CreateTodo(){
  const [title,setTitle] = useState()
  const [description,setDescription] = useState()
  const [todo,setTodo] =  useState([{
    id:1,
    title:'Go to gym',
    description:'Go gym in morning at 6 Am'
  },
  {
    id:2,
    title:'Go for a yoga',
    description:'Go for a yoga'
  },
  {
    id:3,
    title:'Go for aerobics',
    description:'Go for a aerobics'
  }
])
  return(
    <>
      <input type="text" placeholder='Enter Todo Title' onChange={(e)=>{
          setTitle(e.target.value)
      }} /> <br /> <br />
      <input type="text" placeholder='Enter Todo Description' onChange={(e)=>{
          setDescription(e.target.value)
      }}  /> <br /> <br />
      <button onClick={()=>{
        setTodo([...todo,{
          id:todo.length+1,
          title:title,
          description:description}
        ])
        console.log(todo,' todo');
      }}>Add Todo</button>
      {
        todo.map((data,index)=> <Todo key={data.id} title={data.title} description={data.description} id={data.id} /> )
      }
      
    </>
  )
}

export default App
