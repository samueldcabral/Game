import React from 'react'

const Card = ({name, brain, defense, hp, speed, strenght}) => {
  return (
    <div className="card-bg container flex-column">
      <div>
        <p className="color-black bolder card-name">{name}</p>
      </div>
      <div>
        <img className="card-img" src={require(`../img/heros/${name.toLowerCase()}.png`)} alt={name}/>
      </div>
      <div className="card-box color-black">
        <div className="card-item">
          <p><strong><i class="fas fa-brain"></i> Brain</strong>: {brain}</p>
          <p><strong><i class="fas fa-shield-alt"></i> Defense</strong>: {defense}</p>
          <p><strong><i class="fas fa-plus-square"></i> HP</strong>: {hp}</p>
          <p><strong><i class="fas fa-tachometer-alt"></i> Speed</strong>: {speed}</p>
          <p><strong><i class="fas fa-dumbbell"></i> Strenght</strong>: {strenght}</p>
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

export default Card


