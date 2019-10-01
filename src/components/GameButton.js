import React from 'react'
import { Link } from 'react-router-dom'

const GameButton = ({type}) => {
  return (
    <Link to={'/'+ type} className={type + '-btn'}></Link>
  )
}

export default GameButton
