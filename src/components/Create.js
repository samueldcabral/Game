import React from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';

const Create = props => {
  return (
    <div>
      This is Create page.
      <Link to="/">Click to go back</Link>

      <div className="container">
      <Card />
      <div>
        FORM AQUI
      </div>
    </div>
    </div>
  )
}

export default Create
