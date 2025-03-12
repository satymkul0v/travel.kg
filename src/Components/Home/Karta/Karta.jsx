import React from 'react'
import './Karta.css'
import eat from '/assets/133.png'

function Karta() {
  return (
    <div className='karta'>
        <h1>KYRGYZSTAN  ON THE MAP</h1>

        <hr className='hre' />
        <img src={eat} alt="" />

        <hr className='hree'/>
    </div>
  )
}

export default Karta