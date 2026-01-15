import React from 'react'
import { Link} from "react-router";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/info">Information</Link>
    </div>
  )
}

export default Navbar