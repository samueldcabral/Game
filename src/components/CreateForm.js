 
import React from 'react'
import Card from './Card';

const CreateForm = props => {
  return (
    <div className="container">
      <Card 
          name={'Archer'}
          brain={10}
          defense={20}
          hp={50}
          speed={10}
          strenght={10}
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