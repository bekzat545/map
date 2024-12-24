import React from 'react'
import {Div, Image}  from 'atomize'
import './Header.scss'
import Logo from '../img/Logo.svg';

export default function Header() {
  return (
    <Div className="header" w="1199px" d="flex" flexDir={{xs:"column", sm:"row",md:'row'}} m="0 auto">
      <Div w="32px" h="32px" m={{ t:"32px"}}>
        <Image src={Logo}  />
      </Div>
    </Div>
  )
}

