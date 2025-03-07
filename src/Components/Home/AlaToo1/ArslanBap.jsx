import React from 'react'
import './ArslanBap.css'
import Video from '/assets/video.mp4'



function ArslanBap() {
  return (
    <div className='arslan'>
      <h1>ABOUT KYRGYZSTAN</h1>
      <div className='storis'>
      <video  className='video1'autoPlay muted loop width='350px' height='400px'>
          <source  src={Video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

          <h2>all the beauty of Kyrgyzstan</h2>
        </div>
      </div>
  )
}

export default ArslanBap