import React from 'react';
import { Div, Text, Image } from 'atomize';
import './Main.scss';
import Logo from '../img/Logo.svg';
import VideoMP from '../img/Video.mp4';
import AppButton from '../Button/button';
import WebApp from '../img/webapp.svg';
import Google from '../img/playmarket.svg';
import AppStore from '../img/apple.svg';

export default function Main() {
  return (
    <Div className="container" w="84rem" m="0 auto">
      <Div>
        <Div bg="black" pos={{ xs: '', md: 'relative' }} zIndex="0">
          <video src={VideoMP} autoPlay loop muted width="100%" height="auto" className="video"></video>
        </Div>
        <Div m={{ t: { xs: '0px', md: '-720px' } }} zIndex="2" pos={{ xs: '', md: 'relative' }}>
          <Text
            textColor="#FFFFFF"
            textWeight="700"
            textSize="64px"
            zIndex="2"
            w={{ xs: '95px', md: '130px' }}
            h={{ xs: '40px', md: '63px' }}
            m={{
              l: { xs: '100px', md: '640px' },
              t: { xs: '0px', md: '-65px' },
            }}
          >
            Карта
            <Image
            src={Logo}
            w={{ xs: '', md: '60px' }}
            h={{ xs: '', md: '63px' }}
            pos={{ xs: '', md: 'relative' }}
            m={{ l: { xs: '-70px', md: '-70px' }, t: { xs: '-60px', md: '-60px' } }}
          />
           
          </Text>

          <Text
            textColor="#FFFFFF"
            textWeight="500"
            zIndex="2"
            textSize={{ xs: '16px', md: '20px' }}
            w={{ xs: '90%', md: '503px' }}
            h={{ xs: 'auto', md: '48px' }}
            m={{
              l: { xs: '30px', md: '525px' },
              t: { xs: '40px', md: '0' },
            }}
          >
            Карта терминалов от Finik, исследуйте,
          </Text>

          <Text
            textColor="#FFFFFF"
            textWeight="500"
            zIndex="2"
            textSize={{ xs: '16px', md: '20px' }}
            w={{ xs: '90%', md: '503px' }}
            h={{ xs: 'auto', md: '48px' }}
            m={{
              l: { xs: '40px', md: '535px' },
              t: { xs: '5px', md: '-25px' },
            }}
          >
            отмечайте и зарабатывайте баллы
          </Text>
        </Div>
        <Div
          d="flex"
          flexDir={{ xs: 'column', sm: 'row', md: 'row' }}
          justify="center"
          zIndex="2"
          pos="relative"
          m={{ l: { xs: '60px', md: '75px' }, t: { xs: '30px', md: 'px' } }}
        >
          <AppButton name="Go to the" title="Web App" img={WebApp} />
          <AppButton name="GET IT ON" title="Google Play" img={Google} />
          <AppButton name="Download on the" title="App Store" img={AppStore} />
        </Div>
      </Div>
    </Div>
  );
}
