import React from 'react'
import './Header.scss'
import Logo from '../img/logo.png';
import MapKG from '../img/Kyrgyzstan.png'
import Video from '../img/Video.mp4'

export default function Header() {
  return (
    <body>
      <header>
        <div className='logo1'>
          <img src={Logo} alt="Logo" />
        </div>
        <map>
          <img src={MapKG} alt="Map" />
        </map>
        <div className='logo2'>
          <img src={Logo} alt="Logo"/>
        </div>
        <h1>
          Карта
        </h1>
      </header>
    </body>
  )


}

