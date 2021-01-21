// Task array
import TaskView from './TaskView'

/* 
In principle tasks are defined as shown here below, but
surely we don't want an app which is able just to deal with 2 or 3 predefined
tasks. We want to use a hook, to be able to dynamically add and delete tasks

const tasks = [
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
] 

Let's import the hook in the main file App.js 

(in real world apps, we would use an API like redux to get the tasks from other
  components)
*/


// The task component
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskView key={index} task={task} onDelete = {onDelete} />
      ))}
    </>
  )
}

export default Tasks
