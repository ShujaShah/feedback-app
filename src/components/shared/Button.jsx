import React from 'react';
import PropTypes from 'prop-types'


//children for wrapping the button around
//version for primary or secondary
//type for submit or regular button
//isDisabled if true the button is visible else not
function Button({children, version, type, isDisabled}) {
  return (
    <div>
      <button type ={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps ={
    version : 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button
