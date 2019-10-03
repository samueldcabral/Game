import React from 'react'
import { Link } from 'react-router-dom'

const Create = props => {
  return(
    <div>
      This is Create page.<br></br>
      <Link to="/">Click to go back</Link> <br></br>
      <Link to="/dashboard">Click to go to the dashboard</Link>
    </div>
  )
}

export default Create
