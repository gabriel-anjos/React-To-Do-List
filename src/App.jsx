import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import AddTask from "./components/AddTask";
const App =()=>{
  const[tasks,setTasks]=useState([
    {
      id:'1',
      title:'estudar programaçao',
      complete:false
    },
    {
      id:'2',
      title:'ler livros',
      complete:true
    }
  ]);

  const handleTaskAddition=(taskTitle)=>{
    const newTask=[...tasks,{
      title: taskTitle,
      id: Math.random(10),
      complete:false
    }]
    setTasks(newTask)
  }

  return(
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
    )
}

export default App;