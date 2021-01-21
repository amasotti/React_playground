import './App.css';
import React from 'react'
import Header from './components/Header';
import Button from './components/Button';

// App as class
/* class App extends React.Component {
  render() {
    return <h1>Hello from the class</h1>
  }
} */

const App = () => {
  return (
    <div className="App-header">
      <Header title='Pipino' />

      <div><Button butText='Insert'/>
      <Button butText="Delete"/></div>
    </div>
  )
}

export default App;

