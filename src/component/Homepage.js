import React from 'react'
import '../style/Homepage.css'
import profileImgWhite from '../img/start_white.png'
import profileImgBlack from '../img/start_black.png'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='container'>
        <div className='cardSettings'>
            <section className='profiles'>
            <div className='cardImg'>
            <img className='profileImg' src={profileImgWhite} alt="Profile img White"/>
            <h2>Player White</h2>
            </div>
            <div className='cardImg'>
            <img className='profileImg'src={profileImgBlack} alt="Profile img White"/>
            <h2>Player Black</h2>
            </div>
            </section>
           
            <div className='startButton'>
            <NavLink to="game_start">Game Start</NavLink>
            </div>
        </div>
    </div>
  )
}
