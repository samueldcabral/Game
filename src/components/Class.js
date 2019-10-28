import React from 'react'
import { Link } from 'react-router-dom'

const Class = ({name}) => {
  return (
    <div className="class">
      <div>
      <Link to={`create/${name}`}><img className="img" src={require(`../img/heros/${name.toLowerCase()}.png`)} alt={name}/></Link>
      </div>
    </div>
  )
}

export default Class