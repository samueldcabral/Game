
import React from 'react'
import Class from './Class';

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
    <div className="select-class">
      <h2 className="select-class-header">Choose your class to begin your adventure...</h2>
      <div className="container-class">
      <Class name='Archer' />
      <Class name='Warrior' />
      <Class name='Witch' />
      <Class name='Priest' />
    </div>
    </div>
  )
}

export default Create
