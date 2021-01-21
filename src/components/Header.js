// we can import many packages here, including Type checking and
// import PropTypes from 'prop-types'

// define style for an element as variable

const headerStyle = {
  borderRadius : "10px",
  padding : "5px, 10px",
  color : "#270b8a",
  backgroundColor : "#2ddd8aa1"
}

const Header = ({title, text}) => {
  return (
    <div>
    <header className="App-header">
        <h1>Task Tracer</h1>
        <p>Hello {title}</p>
        {// A second paragraph with default style
        }
        <p style={headerStyle}> {text}</p>
      </header>
    </div>
  )
}

Header.defaultProps = {
    title : 'hello',
    text : 'Something with default style'
}

export default Header


// We can also add css here

