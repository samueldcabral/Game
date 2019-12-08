import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Bot from '../model/Bot'
import GameButton from './GameButton'
 

const Battle = props => {

  const [winner, setWinner] = useState("")

    const setBattleWinner = (winner) => {
      setWinner(winner)
      // console.log(`Battle Winner is ${winner}`)
    }

    const onClick = () => {
      console.log(`Battle Winner is ${winner}`)

    }
 
    useEffect(() => {
      let audioBattle = new Audio(require(`../img/audio/battle-theme.mp3`))
      audioBattle.play()
 
    }, [])

    return (
      <>
        <button><Link to={'/dashboard'}>Go back to your dashboard</Link></button>
        <h1>There can only be one survivor. Fight!</h1>

      

        <div className="container" style={{marginTop: '16rem'}}>
          <Card 
            name={'Warrior'}
            brain={44}
            defense={15}
            hp={100}
            speed={77}
            strenght={56}
            img={`${'Warrior' === undefined ? undefined : 'warrior'}`}
          />

          {
            winner === "" ?
            <button onClick={onClick}>Fight!</button>     :
            <h2>The Winner is {winner}....!</h2>
          }
          

          <Bot setBattleWinner={setBattleWinner} strenght={80}/>

        </div>
       </>
    )
  }

export default Battle;