import React from 'react';
import { Div, Image, Text } from 'atomize';
import Logo from '../img/Logo.svg';
import Facebook from '../img/Social icon.svg';
import Twitter from '../img/Social icon-2.svg';
import Telegram from '../img/Social icon-6.svg';
import Youtube from '../img/Social icon-5.svg';
import Linkedin from '../img/Social icon-4.svg';
import Inst from '../img/Social icon-3.svg';
export default function Footer() {
  return (
    <Div  h="204px" bg="black" d="flex" flexDir={{ xs: 'column', sm: 'row', md: 'row' }} w="84rem" m="0 auto">
      <Div  m={{ t: { xs: '0px', md: '40px' } }} p="20px">
        <Div d="flex">
          <Image src={Logo} w="30px" h="32px"></Image>
          <Text textColor="white" textSize="24px" fontFamily={{ xs: 'primmary', xl: 'secondary' }}>
            Finik
          </Text>
        </Div>
        <Div>
          <Text textColor="grey" m={{ b: { xs: '20px', md: '20px' }, t: { xs: '20px', md: '20px' } }} textSize={{ xs: '17px', md: '' }}>
            Удобное и надежное отечественное <br />
            приложение для оплаты в Кыргызстане
          </Text>
          <Text textColor="grey"  w={{ xs: '90%', md: '100%' }}>
            ©2022 Averspay <br />
            Лицензия НБКР № 3006010615, № 2006010615 от 06.02.2015
          </Text>
        </Div>
      </Div>
      <Div d="flex" flexDir={{ xs: 'row' }} >
      <Div textColor="white" m={{ t: { xs:'20px', md: '60px' }, l: { xs: '20px', md: '150px' } }}>
        <Text textColor="grey">
          <strong>Продукты</strong>
        </Text>
        <Text m={{ t: '20px', b: '20px' }}>
          {' '}
          <strong>Кошелек</strong>
        </Text>
        <Text m={{ b: '20px' }}>
          <strong>Терминалы</strong>
        </Text>
        <Text>
          <strong>Эквайринг</strong>
        </Text>
      </Div>
      <Div textColor="white" m={{ t: { xs:'20px', md: '60px' }, l: { xs: '80px', md: '150px' } }}>
        <Text textColor="grey">
          <strong>О нас</strong>
        </Text>
        <Text m={{ t: '20px', b: '20px' }}>
          {' '}
          <strong>Компания</strong>
        </Text>
        <Text>
          <strong>Документы</strong>
        </Text>
      </Div>
      </Div>
      <Div d="flex" m={{ t: { xs:'40px', md: '60px' }, l: { xs: '20px', md: '120px' } }}>
          <Image src={Facebook} w="24px" h="24px"  m={{ r: '16px' }}></Image>
          <Image src={Twitter} w="24px" h="24px" m={{ r: '16px' }}></Image>
          <Image src={Inst} w="24px" h="24px" m={{ r: '16px' }}></Image>
          <Image src={Linkedin} w="24px" h="24px" m={{ r: '16px' }}></Image>
          <Image src={Youtube} w="24px" h="24px" m={{ r: '16px' }}></Image>
          <Image src={Telegram} w="24px" h="24px" m={{ r: '16px' }}></Image>
      </Div>
    </Div>
  );
}
