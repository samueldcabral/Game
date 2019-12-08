import React from 'react'
import { Link } from 'react-router-dom'

const GameButton = ({type, name}) => {
  return (
    <Link to={`/${type}/${name}`} className={type + '-btn'}></Link>
  )
}

export default GameButton
