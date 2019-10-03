import React from 'react'
// import { Link } from 'react-router-dom'
import GameButton from './GameButton'
import logo from '../img/Pergaminho2.jpg'

const Dashboard = props => {
    return (
        <div className="dashboard-div">
            <div className="info"><label>DGS</label><label>Cash</label></div>
            <div className="main-div">
                <div className="card-status">
                    <div className="cards">card</div>
                    <div className="status">
                        {/* <div className="pergaminho"> */}
                        <img src={logo}></img>
                        <label>Nome</label>
                        <label>Idade</label>
                        <label>Gênero</label>
                        <label>Raça</label>
                    </div>
                </div>
                <div className="btn-battle">
                    <GameButton type="battle" />
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Dashboard;