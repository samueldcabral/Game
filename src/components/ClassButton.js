import React from 'react'
import { Link } from 'react-router-dom'

const ClassButton = ({type}) => {
    return (
        <Link to={'/'+ type} className={type}> </Link>
    )
}

export default ClassButton