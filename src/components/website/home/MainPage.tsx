import React from 'react';
import './MainPage.scss';
import Header from '../header/Header';
import Main from '../Main/Main';
import TextPhone from '../TextPhone/TextPhone';
import Features from '../features/Features';
import Footer from '../footer/Footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <Main />
      <TextPhone/>
      <Features/> 
      <Footer/> 
    </>
  );
}
