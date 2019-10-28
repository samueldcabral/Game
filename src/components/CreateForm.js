 
import React, { useState, useEffect } from 'react'
import Card from './Card';

import { getClass } from '../services/api'

const CreateForm = props => {

  const [char, setChar] = useState('')

  const { id } = props.match.params

  useEffect(() => {
    async function loadClass(id) {
      const response = await getClass(id);
      setChar(response.data)
    }
    loadClass(id)
  }, [id])
  console.log(props)

  return (
    <div className="container" style={{marginTop: '6rem'}}>
      <Card 
          name={`${char.name}`}
          brain={char.brain}
          defense={char.defense}
          hp={char.hp}
          speed={char.speed}
          strenght={char.strenght}
          img={`${char.name === undefined ? undefined : char.name.toLowerCase()}`}
        />
      <div className="container-form">
        <form>
            <div>
            <label>Username:</label>
            <input type="text" id="username"/>      
            </div>

            <div>
            <label>Email:</label>
            <input type="email" id="email"/>      
            </div>
            
            <div>
            <label>Password:</label>
            <input type="password" id="password"/>      
            </div>
            
            <div>
            <label>Confirm Password:</label>
            <input type="password" id="confirm-password"/>      
            </div>
            
            <div>
            <label>Character Name:</label>
            <input type="text" id="charname"/>      
            </div>
            
            <div>
            <label>Gender:</label>
             <input type="radio" value="male" />  Male  
             <input type="radio" value="female" />  Female
            </div>
            
            <input type="submit" value="Create"/>
        </form>
      </div>
    </div>
  )
}

export default CreateForm