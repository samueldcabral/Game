import React from 'react'
// import { Link } from 'react-router-dom'
import GameButton from './GameButton'
import cash from '../img/dashboard/gold-saco2.png'
import chest from '../img/dashboard/gold-bau2.png'
import Card from './Card'

const Dashboard = props => {
    return (
        <div className="dashboard-div">
            <div className="info">
                <label><img src={chest} alt="chest"></img>DGS</label>
                <label><img src={cash} alt="cash"></img>Cash</label>
            </div>
            <div className="main-div">
                <div className="card-status">
                    <div className="container">
                        <Card 
                            name={'Archer'}
                            brain={10}
                            defense={20}
                            hp={50}
                            speed={10}
                            strenght={10}
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