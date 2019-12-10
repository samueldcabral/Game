import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Bot from '../model/Bot'
import GameButton from './GameButton'
import ErrorRoute from './ErrorRoute'
import { getSeekerByName, getSeekerCardByName } from '../services/api'
import { createSeeker } from '../services/api'

const Battle = props => {

  const [winner, setWinner] = useState("")
  const [seeker, setSeeker] = useState('')
  const [bot, setBot] = useState('')
  const [seekerCard, setSeekerCard] = useState('')
  const [redirctTo, setRedirctTo] = useState(false);

  const { name } = props.match.params

  const setBattleWinner = (winner) => {
    setWinner(winner)
    // console.log(`Battle Winner is ${winner}`)
  }

  const handleAttack = () => {
    let timeNow = Date.now()
    let botSum = bot.strenght + bot.brain
    let warriorSum = seekerCard.strenght + seekerCard.brain

    if( ( timeNow%13 ) % 2 === 0) {
      warriorSum = (warriorSum * 1.2)
    } else {
      botSum = (botSum * 1.1)
    }
    
    if(warriorSum > botSum) {
      setWinner('user')
      seeker.coins = seeker.coins + 10;
      createSeeker(seeker)

    }else {
      setWinner('bot')
      seeker.coins = seeker.coins - 5;
      createSeeker(seeker)
    }

    setTimeout(() => {
      props.history.goBack()
    }, 2000)
  }

  const handleDefend = () => {
    let botSum = bot.defense + bot.speed
    let warriorSum = seekerCard.defense + seekerCard.speed
    
    if(warriorSum > botSum) {
      setWinner('user')
      seeker.coins = seeker.coins + 10;
      createSeeker(seeker)
    }else if(warriorSum < botSum){
      setWinner('bot')
      seeker.coins = seeker.coins - 5;
      createSeeker(seeker)
    }else{
      setWinner('user')
      seeker.coins = seeker.coins + 10;
      createSeeker(seeker)
    }

    setTimeout(() => {
      props.history.goBack()
    }, 2000)
  }

  useEffect(() => {
    // let audioBattle = new Audio(require(`../img/audio/battle-theme.mp3`))
    // audioBattle.play()
    
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

    return () => {
      // audioBattle.pause()
    };

  }, [name])


  if(redirctTo){
    return <ErrorRoute />
 } 

  return (
    <>
      {/* <button className="btn btn-primary" onClick={() => props.history.goBack()}>voltar</button>
      <button><Link to={'/dashboard'}>Go back to your dashboard</Link></button> */}
      <h1>There can only be one survivor. Fight!</h1>

      <div className="container" style={{marginTop: '6rem'}}>
      <Card 
        name={`${seekerCard.character_name}`}
        brain={seekerCard.brain}
        defense={seekerCard.defense}
        hp={seekerCard.hp}
        speed={seekerCard.speed}
        strenght={seekerCard.strenght}
        img={`${seekerCard.name === undefined ? undefined : seekerCard.name.toLowerCase()}`}
      />

        {
          winner === "" ?
         (
         
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>  
            <button onClick={handleAttack} className="fight-btn" />
            <button onClick={handleDefend} className="defend-btn" />
          </div>
          
          ) :

          <h2>The Winner is {winner}....!</h2>
        }
        
        <Bot setBattleWinner={setBattleWinner} seeker={seekerCard} setBotStats={setBot}/>

      </div>
      </>
    )
  }

export default Battle;