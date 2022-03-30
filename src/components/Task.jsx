import React from "react";
import {CgClose,CgInfo} from "react-icons/cg"
import "./Task.css"
const Task = ({task,handleTaskClick,handleTaskDelete})=>{
    return(
        <>
            <div  className="task-container" style={task.completed ? {borderLeft:"6px solid  chartreuse"} : {} }>
                <div  className="task-title" onClick={()=>handleTaskClick(task.id)}>
                    {task.title}
                </div>
                <div className="icons-container">
                    <button className="info-task-button">
                        <CgInfo/>
                    </button>
                    <button className="remove-task-button" onClick={()=>handleTaskDelete(task.id)}>
                        <CgClose/>
                    </button>
                </div>
                
            </div>
        </>
    )
    //<div className="task-container">{task.title}</div>
}

export default Task;