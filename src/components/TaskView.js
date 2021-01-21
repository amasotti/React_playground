/* This component defines the way in which Tasks are viewed */

import { FaTimes } from 'react-icons/fa'; // the delete icon
import React from 'react'

const TaskView = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} 
      <FaTimes 
      style={{border: '1px solid', borderRadius : '5px', cursor: 'pointer'}} 
      onClick = {() => onDelete(task.id)}/>

      </h3>

      <p className='taskDay'>{task.day}</p>
    </div>
  )
}


export default TaskView
