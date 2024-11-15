/* External dependencies */
import React from 'react';

/* Local dependencies */
import AboutUs from '../aboutUs/AboutUs';
import './MainPage.scss'
import Header from '../header/Header';
import Navbar from '../Navbar/Navbar';

export default function MainPage() {
  return (
    <>
      <AboutUs />
      <Header/>
      <Navbar/>
    </>
  );
}

