// import { Link } from 'react-router-dom'
import { Redirect, Link } from "react-router-dom";
import GameButton from './GameButton'
import cash from '../img/dashboard/gold-saco2.png'
import chest from '../img/dashboard/gold-bau2.png'
import Card from './Card'
import React, { useState, useEffect } from 'react'
import ErrorRoute from './ErrorRoute'
import { getSeekerByName, getSeekerCardByName } from '../services/api'

const Dashboard = props => {

    const [seeker, setSeeker] = useState('')
    const [seekerCard, setSeekerCard] = useState('')
    const [redirctTo, setRedirctTo] = useState(false);

    const { name } = props.match.params
  
    useEffect(() => {
      async function loadClass(name) {
        const response = await getSeekerByName(name);
        if (response.data === null) {
            setRedirctTo(true)
        } else {
            setSeeker(response.data)
        }

        const response2 = await getSeekerCardByName(name);
        if (response2.data === null) {
            setRedirctTo(true)
        } else {
            setSeekerCard(response2.data)
        }
      }
      loadClass(name)
    }, [name]
    )
    
    if(redirctTo){
       return <ErrorRoute />
    } 

    return (
            <div className="dashboard-div">
                <div className="info">
                    <label><img src={chest} alt="dgs"></img>{seeker.coins} DGS</label>
                    <label><img src={cash} alt="cash"></img>Cash</label>
                </div>
                <div className="main-div">
                    <div className="card-status">
                        <div style={{marginTop: '6rem'}}>
                            <Card 
                                name={`${seekerCard.character_name}`}
                                brain={seekerCard.brain}
                                defense={seekerCard.defense}
                                hp={seekerCard.hp}
                                speed={seekerCard.speed}
                                strenght={seekerCard.strenght}
                                img={`${seekerCard.name === undefined ? undefined : seekerCard.name.toLowerCase()}`}
                            />
                        </div>
                        <div className="card-ds">
                            <label>Jogador: {seeker.username}</label><br></br>
                            <label>Email: {seeker.email}</label><br></br>
                            <label>Bla bla bla</label><br></br>
                            <label>Bla bla bla</label><br></br>
                            <label>Bla bla bla</label>
                        </div>
                    </div>
                    <div className="btn-battle">
                        <GameButton type="battle" />
                    </div>
                </div>
            </div> 
    )
  }

export default Dashboard;