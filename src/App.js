import './App.css';
import React from 'react'
import { useState } from'react'
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';


const App = () => {
/* DEFINE SOME DEFAULT TASKS 

UseState is defining here the default Tasks */ 
const [tasks, setTasks] = useState([
  {
    id : 1,
    text: 'Appointment with Mr. John',
    day: 'March, the 23rd 2021',
    reminder : true
  },
  {
    id : 2,
    text: 'Buy new computer',
    day: 'ASAP',
    reminder : false
  },
  {
    id : 3,
    text: 'Phone call with Mrs. Jane',
    day: 'March, the 22nd at 15:30',
    reminder : true
  }
] )

// Delete task function
const deleteTask = (id) => {
  console.log("Deleted item:  ", id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder (flip the rimander if double click)
const toggleRemainder = (id) =>{
  console.log('Reminder changed on task n. ', id)
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder:
       !task.reminder } : task
  ))
}

// ACTUAL RETURN FUNCTION
  return (
    <div className="App-header">
      <Header title='Don T. Remember' />

      <Button butText='Insert'/>
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} /> : "No tasks to show"}
    </div>
  )
}

export default App;

