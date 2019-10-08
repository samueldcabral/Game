import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getClass, getClasses } from '../services/api'

import Card from './Card';

const Create = props => {

  const [classes, setClasses] = useState([])
  const [char, setChar] = useState('')

  useEffect(() => {
    async function loadClasses() {
      const response = await getClasses();
      setClasses(response.data)
    }
    loadClasses()
  }, [])


  useEffect(() => {
    async function loadClass(id) {
      const response = await getClass(id);
      setChar(response.data)
    }
    loadClass('-LpefKKRQBfWJIg7TK0v')
  }, [])

  console.log(classes)

  return (
    <div>
      This is Create page.
      <Link to="/">Click to go back</Link>

      <div className="container">
      <Card 
          name={char.name}  // RESOLVER PQ ISSO ESTÁ DANDO UNDEFINED
          brain={char.brain}
          defense={char.defense}
          hp={char.hp}
          speed={char.speed}
          strenght={char.strenght}
        />
      <div>
        FORM AQUI
      </div>
    </div>
    </div>
  )
}

export default Create
