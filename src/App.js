import React from 'react'
import { useState, useEffect } from'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';


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

    // Fetch a single task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5500/tasks/${id}`)
      const data = await res.json()
  
      return data
    }

  //add Task (modified in order to add directly to json)
  const addTask = async (task) => {
    console.log("Task added: ", task)
    const result = await fetch(`http://localhost:5500/tasks`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(task)
    })
    const data = await result.json()
    setTasks([...tasks, data])

  }

// Delete task function (modified, in order to delete from server)
const deleteTask = async (id) => {
  console.log("Deleted item:  ", id)
  await fetch(`http://localhost:5500/tasks/${id}`, {
    method: 'DELETE',
  })
  //  Update the task view
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder (flip the reminder if double click)
const toggleRemainder = async (id) =>{
  const taskToToggle = await fetchTask(id)
  const updateTask = {...taskToToggle, reminder : !taskToToggle.reminder }

  const result = await fetch(`http://localhost:5500/tasks/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body : JSON.stringify(updateTask)
  })

  const  data = await result.json()
  console.log('Updating task n. ', id)
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder:
       !task.reminder } : task
  ))
}

// ACTUAL RETURN FUNCTION
  return (
    <Router>
    <div className="App-header">

      {
        // Show main page
      }

      <Header 
      title='Don T. Remember'
      onAdd = {() => setShowAddTask (!showAddTask)}
      showAdd = {showAddTask}
      />
      {
        // Add task
      }

      <Route
      path = "/"
      exact render = {(props) => (<>{showAddTask && <AddTask onAdd = {addTask} />
      }</>
      )}
      />
      
      {
        // operations on tasks (delete, toggle)
      }
      
      <Route 
      path="/" 
      exact render={(props) => (
        <>
        {tasks.length > 0 ? 
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleRemainder}

      />
       : "No tasks to show"}  
        
        
        </>
      )} />
       <Footer />
    </div>
    </Router>
  )
}

export default App;

