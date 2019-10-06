import React from 'react'
import ClassButton from './ClassButton'

const Create = props => {
  return (
    <div className="create">
      <h1 className="create-header">Choose your class to begin your adventure</h1>
      <div className="btn-wrapper">
        <ClassButton type="warrior"/>
        <ClassButton type="archer"/>
        <ClassButton type="wizard"/>
        <ClassButton type="priest"/>
      </div>
      <div>
        <h2>Teste</h2>
      </div>
    </div>
  )
}

export default Create
