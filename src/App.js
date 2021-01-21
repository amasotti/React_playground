import React from 'react'
import { useState, useEffect } from'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
/* DEFINE SOME DEFAULT TASKS 

UseState is defining here the default Tasks */ 
const [tasks, setTasks] = useState([])

useEffect(() => {
  const getTasks = async () => {
    const tasksFromJson = await fetchTasks()
    setTasks(tasksFromJson)
  }

  getTasks()
}, [])


  // Fetch tasks data 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5500/tasks')
    const data = await res.json()

    return data
  }

  //add Task
  const addTask = (task) => {
    console.log("Task added: ", task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

// Delete task function (modified, in order to delete from server)
const deleteTask = async (id) => {
  await fetch(`http://localhost/5500/tasks/${id}`, {
    method : 'DELETE',
  })
  console.log("Deleted item:  ", id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder (flip the reminder if double click)
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

      <Header 
      title='Don T. Remember'
      onAdd = {() => setShowAddTask (!showAddTask)}
      showAdd = {showAddTask}
      />

      {showAddTask && <AddTask onAdd = {addTask} />}
      
      {tasks.length > 0 ? 
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleRemainder} 
      />
       : "No tasks to show"}
    </div>
  )
}

export default App;

