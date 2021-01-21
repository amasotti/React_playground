import PropTypes from 'prop-types';

const Button = ({butText}) => {
  return (<button className='btn' onClick={onClick}>{butText}</button>
  )
}

Button.defaultProps = {
  butText : 'Add'
}

Button.propTypes = {
  butText : PropTypes.string // The label must be a string
}


  // Add event handler
  const onClick = (e) => {
    console.log(e)
    alert('Button clicked: ')
  }
export default Button
