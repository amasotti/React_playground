/* Header component */
import Button from './Button'
//import { useLocation } from 'react-router-dom'
// define style for an element as variable, an alternative to packing style in a css
const headerStyle = {
  borderRadius : "10px",
  padding : "5px, 10px",
  color : "#270b8a",
  backgroundColor : "#2ddd8aa1"
}


const Header = ({title, text, onAdd, showAdd}) => {
  return (
    <div>
    <header className="App-header">
        <h1>Task Tracer</h1>
        <p>Mr. {title}</p>

        <Button 
        butText={showAdd ? 'Close form' : 'Add new task'} 
        onClick={onAdd}
        />

        {// A second paragraph with default style
        }
        <p className="things" style={headerStyle}> {text}</p>
      </header>
    </div>
  )
}

Header.defaultProps = {
    title : 'hello',
    text : 'Things to do...'
}

export default Header