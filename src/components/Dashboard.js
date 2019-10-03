import React from 'react'
// import { Link } from 'react-router-dom'
import GameButton from './GameButton'

const Dashboard = props => {
    return (
        <div className="dashboard-div">
            <div className="info"><label>DGS</label><label>Cash</label></div>
            <div className="main-div">
                <div className="card-status">
                    <div >card</div>
                    <div className="pergaminho"></div>
                </div>
                <div className="btn-battle">
                    <GameButton type="battle" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;