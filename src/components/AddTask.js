/* Component responsible for adding new Tasks */

import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  // let's define what the user can pass as params
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')

  // define what happens when the User submits the form
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please, insert a title for the Task')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className="add-task" onSubmit = {onSubmit}>
      <div className="form">
        <label>Task</label>
        <input type="text" 
        placeholder="Add new task"
        value={text}
        onChange = {(e) => setText(e.target.value)}
        />
      </div>

      <div className="form">
        <label>When and what?</label>
        <input type="text" 
        placeholder="Add details"
        value={day}
        onChange = {(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form">
        <label>Reminder:</label>
        <input 
        id="remindercheck"
        type="checkbox"
        checked={reminder}
        value = {reminder}
        onChange = {(e) => setReminder(e.currentTarget.checked)} 
        />


        <input type="submit" value="Save" className="btn-block"></input>
      </div>
      
    </form>
  )
}


export default AddTask
