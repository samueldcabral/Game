import React from 'react'

import Archer from '../img/heros/archer.png';

const Card = () => {
  return (
    <div className="card-bg container flex-column">
      <div>
        <p className="color-black bolder card-name">Archer</p>
      </div>
      <div>
        <img className="card-img" src={Archer} alt="archer"/>
      </div>
      <div className="card-box color-black">
        <p><strong><i class="fas fa-brain"></i> Brain</strong>: 80</p>
        <p><strong><i class="fas fa-shield-alt"></i> Defense</strong>: 60</p>
        <p><strong><i class="fas fa-plus-square"></i> HP</strong>: 90</p>
        <p><strong><i class="fas fa-tachometer-alt"></i> Speed</strong>: 80</p>
        <p><strong><i class="fas fa-dumbbell"></i> Strenght</strong>: 70</p>
      </div>
    </div>
  )
}

export default Card


