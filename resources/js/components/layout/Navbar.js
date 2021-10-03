import React from 'react'
import { Link } from 'react-router-dom'

//
class Navbar extends React.Component {
  render(){
    return(
      <div>
        <div className="container">
          <Link to="/">[ Home ] </Link>
          <Link to="/About" className="ml-2">[ About ] </Link>
          <Link to="/tasks" className="ml-2">[ Tasks ] </Link>
          <Link to="/notes" className="ml-2">[ Notes ] </Link>
          <Link to="/login" className="ml-2">[ Login ] </Link>
        </div>
        <hr />
      </div>
    )
  }
}

export default Navbar;
