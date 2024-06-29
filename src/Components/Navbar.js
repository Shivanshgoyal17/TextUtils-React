import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }


// .string is used to fix the datatype of title and about as string so that we cannot pass other kind of datatype for title by mistake

// Navbar.defaultProps = {
//     title: 'Set Title Here',
//     aboutText: 'Set About Here'
// }

// If we don't give the values for title and about in app.js then it will take these values.

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// We can also use isRequired to make sure we give the values. It will give error when no values are passed in app.js and also there are no default values in navbar.js
