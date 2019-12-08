 
import React, { useState, useEffect } from 'react'
import Card from './Card';

import { getClass, createSeekerCard, createSeeker } from '../services/api'

const CreateForm = props => {

  const [char, setChar] = useState('')
  const [seeker, setSeeker] = useState({})

  const { id } = props.location.state

  useEffect(() => {
    async function loadClass(id) {
      const response = await getClass(id);
      setChar(response.data)
    }
    loadClass(id)
  }, [id])

  const submitForm = (event) => {
    event.preventDefault()
      
    createSeeker(seeker)
    createSeekerCard(char)      

    props.history.push(`/dashboard/${seeker.username}`)

  }

  const handleInputChange = (event) => {
    event.persist();
    setSeeker(seeker => ({...seeker, [event.target.name]: event.target.value}))
    if (event.target.name === 'username') {
      setChar(char => ({...char, [event.target.name]: event.target.value}))
      setChar(char => ({...char, clazz_id: id}))
    }
  }

  const handleInputChangeCard = (event) => {
    event.persist();
    setChar(char => ({...char, [event.target.name]: event.target.value}))
    setSeeker(seeker => ({...seeker, coins: 100}))
  }

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
        <form onSubmit={submitForm}>
            <div>
            <label>Username:</label>
            <input type="text" name="username" value={seeker.username} placeholder="Username" onChange={handleInputChange} />      
            </div>

            <div>
            <label>Email:</label>
            <input type="email" name="email" value={seeker.email} placeholder="Email" onChange={handleInputChange} />      
            </div>
            
            <div>
            <label>Password:</label>
            <input type="password" name="password" value={seeker.password} placeholder="Password" onChange={handleInputChange} />      
            </div>
            
            <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirm-password" value={seeker.confirmPassword} placeholder="Confirm password" onChange={handleInputChange} />      
            </div>
            
            <div>
            <label>Character Name:</label>
            <input type="text" name="character_name" value={seeker.character_name} placeholder="Character name" onChange={handleInputChangeCard}  />      
            </div>
            
            <div>
            <label>Gender:</label>
             <input type="radio" name="gender" value="M" onChange={handleInputChange} />  Male  
             <input type="radio" name="gender" value="F" onChange={handleInputChange}  />  Female
            </div>
            
            <input type="submit" value="Create"/>
        </form>
      </div>
    </div>
  )
}

export default CreateForm