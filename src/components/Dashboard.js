// import { Link } from 'react-router-dom'
import GameButton from './GameButton'
import cash from '../img/dashboard/gold-saco2.png'
import chest from '../img/dashboard/gold-bau2.png'
import Card from './Card'
import React, { useState, useEffect } from 'react'
import { getClass } from '../services/api'

const Dashboard = props => {

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
        <div className="dashboard-div">
            <div className="info">
                <label><img src={chest}></img>DGS</label>
                <label><img src={cash}></img>Cash</label>
            </div>
            <div className="main-div">
                <div className="card-status">
                    <div className="container">
                        <Card 
                            name={`${char.name}`}
                            brain={char.brain}
                            defense={char.defense}
                            hp={char.hp}
                            speed={char.speed}
                            strenght={char.strenght}
                            img={`${char.name === undefined ? undefined : char.name.toLowerCase()}`}
                        />
                    </div>
                    <div className="card-ds">
                        <label>Bla bla bla</label><br></br>
                        <label>Bla bla bla</label><br></br>
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