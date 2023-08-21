import React from 'react'
import PropTypes from 'prop-types';

export default function Header() {
  return (
    <header>
        <div className = "container">
            <h2>Feedback UI</h2>
        </div>
    </header>
  )
}

// if no prop passed

// Header.defaultProps = {
//     text :'Feedback UI'
// }

//extra type checking for react

// Header.propTypes = {
//     text:PropTypes.string
// }
