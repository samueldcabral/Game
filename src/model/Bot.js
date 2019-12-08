import React, { useState, useEffect } from 'react'

import { getClasses } from '../services/api'


const Bot = (props) => {

  const [classes, setClasses] = useState([])
  const { setBotStats } = props

  useEffect(() => {
    async function loadClasses() {
      const response = await getClasses();
      return setClasses(response.data)
    }
    loadClasses()

  }, [])
  
  let bot = classes[Object.keys(classes)[Math.floor(Math.random()*Object.keys(classes).length)]]
  
  let botCard = ''
  if (bot !== undefined) {

    setBotStats(bot)
    // const setWinner = () => {
    //   let botSum = bot.strenght + bot.defense + bot.brain + bot.speed
    //   console.log(`botSum ${botSum} bot.strenght ${bot.strenght} 
    //   bot.defense ${bot.defense} 
    //   bot.brain ${bot.brain} bot.speed ${bot.speed}`)

    //   let seekerSum = seeker.strenght + seeker.defense + seeker.brain + seeker.speed
    //   console.log(`seekerSum ${seekerSum} seeker.strenght ${seeker.strenght} 
    //   seeker.defense ${seeker.defense} 
    //   seeker.brain ${seeker.brain} seeker.speed ${seeker.speed}`)

    //   console.log(Date.now())

    //   // if(bot.strenght > props.warriorType.strenght) {
    //   //   props.setBattleWinner("Bot")
    //   // } else {
    //   //   props.setBattleWinner("User")
    //   // }
    // }

    // setWinner()


    botCard = (
        <div>
          <div>
          <img className="card-img" src={require(`../img/heros/${bot.name.toLowerCase()}.png`)} alt={bot.name}/>
          </div>
          <div className="card-box color-black">
            <div className="card-item">
              <p><strong><i className="fas fa-brain"></i> Brain</strong>: XX</p>
              <p><strong><i className="fas fa-shield-alt"></i> Defense</strong>: XX</p>
              <p><strong><i className="fas fa-plus-square"></i> HP</strong>: XX</p>
              <p><strong><i className="fas fa-tachometer-alt"></i> Speed</strong>: XX</p>
              <p><strong><i className="fas fa-dumbbell"></i> Strenght</strong>: XX</p>

              {/* <p><strong><i className="fas fa-brain"></i> Brain</strong>: {bot.brain}</p>
              <p><strong><i className="fas fa-shield-alt"></i> Defense</strong>: {bot.defense}</p>
              <p><strong><i className="fas fa-plus-square"></i> HP</strong>: {bot.hp}</p>
              <p><strong><i className="fas fa-tachometer-alt"></i> Speed</strong>: {bot.speed}</p>
              <p><strong><i className="fas fa-dumbbell"></i> Strenght</strong>: {bot.strenght}</p>
               */}
            </div>
            <div className="card-item">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
      </div>
    )
  }


  return (
    <div className="card-bg container flex-column">
      <div>
        <p className="color-black bolder card-name">Bot</p>
      </div>
      {botCard}
    </div>
  )
}

export default Bot


