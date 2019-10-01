import React from 'react'
import GameButton from './GameButton'

const Home = props => {
  return (
    <div className="home">
      <h1 className="home-header">Hello Young Adventurer, your journey shall begin...</h1>
      <div className="btn-wrapper">
        <GameButton type="create" />
        <GameButton type="start" />
      </div>
    </div>
  )
}

export default Home
