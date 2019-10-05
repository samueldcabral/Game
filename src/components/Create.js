import React from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';

const Create = props => {
  return (
    <div>
      This is Create page.
      <Link to="/">Click to go back</Link>

      <div className="container">
      <Card 
          name={'Archer'}
          brain={10}
          defense={20}
          hp={50}
          speed={10}
          strenght={10}
        />
      <div>
        FORM AQUI
      </div>
    </div>
    </div>
  )
}

export default Create
