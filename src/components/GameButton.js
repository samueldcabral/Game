import React from 'react'
import { Link } from 'react-router-dom'

const GameButton = ({type, name}) => {

  if(name != undefined) {
    return <Link to={`/${type}/${name}`} className={type + '-btn'}></Link>
  }else{
    return (
      <Link to={`/${type}`} className={type + '-btn'}></Link>
    )
  }
 
}

export default GameButton
