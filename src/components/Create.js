
import Class from './Class';
import React, { useState, useEffect } from 'react'

import { getClasses } from '../services/api'

const Create = props => {

  const [classes, setClasses] = useState([])

  useEffect(() => {
    async function loadClasses() {
      const response = await getClasses();
      setClasses(response.data)
    }
    loadClasses()
  }, [])

  return (
    <div className="select-class">
      <h2 className="select-class-header">Choose your class to begin your adventure...</h2>
      <div className="container-class">
      {
        classes.map(c => {
          return <Class name={c.name} key={c.id} id={c.id} />
        })
      }
    </div>
    </div>
  )
}

export default Create
