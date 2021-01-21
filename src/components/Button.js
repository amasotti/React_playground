/* Button component 

defines a HTML-button, an onclick method and a custom text, passed as property

*/

import PropTypes from 'prop-types';

const Button = ({butText, onClick}) => {
  return (<button 
    className='btn'
    onClick={onClick}>
      {butText}
    </button>)
}

Button.defaultProps = {
  butText : 'Add'
}

Button.propTypes = {
  butText : PropTypes.string, // The label must be a string
  onClick : PropTypes.func
}

export default Button
