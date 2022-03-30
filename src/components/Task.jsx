import React from "react";
import "./Task.css"
const Task = ({task,handleTaskClick})=>{
    return(
        <>
            <div onClick={()=>handleTaskClick(task.id)} className="task-container" style={task.completed ? {borderLeft:"6px solid  chartreuse"} : {} }>
                <div  className="task-title" onClick={()=>handleTaskClick(task.id)}>
                    {task.title}
                </div>
                <div className="icons-container">
                    <button className="remove-task-button">X</button>
                </div>
                
            </div>
        </>
    )
    //<div className="task-container">{task.title}</div>
}

export default Task;