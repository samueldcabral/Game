import React from 'react'
// import { Link } from 'react-router-dom'

// import Card from './Card';
import Class from './Class';

const Create = props => {
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
