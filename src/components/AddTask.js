/* Component responsible for adding new Tasks */

import { useState } from 'react'
const AddTask = ({onAdd}) => {
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
        <input type="text" placeholder="Add new task"></input>
      </div>

      <div className="form">
        <label>Details</label>
        <input type="text" placeholder="Add details"></input>
      </div>

      <div className="form">
        <label>Reminder</label>
        <input 
        type="checkbox"
        checked={reminder}
        value = {reminder}
        onChange = {(e) => setReminder(e.currentTarget.checked)} 
        />


        <input type="submit" value="Save" className="btn"></input>
      </div>
      
    </form>
  )
}

AddTask.propTypes = {

}

export default AddTask
