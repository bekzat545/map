import React from 'react';
import { Div, Image, Text } from 'atomize';
import Phone from '../img/12pro.svg';

export default function TextPhone() {
  return (
    <Div className="container" w="84rem" m="0 auto">
      <Div
        m={{ l: { xs: '20px', md: '100px' }, t: { xs: '50px', md: '500px' } }}
        zIndex="1"
        pos={{ xs: '', md: 'relative' }}
        d="flex"
        flexDir={{ xs: 'column', sm: 'column', md: 'column' }}
      >
        <Div m={{ b: { xs: '', md: '120px' } }}>
          <Text textWeight="700" textSize={{ xs: '46px', md: '57px' }} textColor="white" m={{b:{ xs:'30px'} }}>
            Исследуйте
          </Text>
          <Text textWeight="500" textSize={{ xs: '26px', md: '20px' }} textColor="#FFFFFF99" w={{ xs: '350px', md: '450px' }}>
          Карта терминалов от Finik,исследуйте, отмечайте и зарабатывайте баллы
          </Text>
        </Div>
        <Div  m={{ t: {xs:'60px'},b:{ xs:'60px',md:'120px'} }}>
          <Text textSize={{ xs: '46px', md: '57px' }} textWeight="700" textColor="white" m={{b:{ xs:'30px'}, t:{xs:'' , md:"-100px"} }}>
            Отмечайте
          </Text>
          <Text textWeight="500" textSize={{ xs: '26px', md: '20px' }} textColor="#FFFFFF99" w={{ xs: '350px', md: '450px' }}>
            Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте баллы
          </Text>
        </Div>
        <Div >
          <Text textWeight="700" textSize={{ xs: '46px', md: '57px' }} textColor="white" w="400px" m={{b:{ xs:'30px'}, t:{xs:'' , md:"-60px"} }}>
            Зарабатывай баллы
          </Text>
          <Text textWeight="500" textSize={{ xs: '26px', md: '20px' }} textColor="#FFFFFF99" w={{ xs: '350px', md: '450px' }}>
            Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте баллы
          </Text>
        </Div>
        <Div>
          <Image src={Phone}  pos={{ xs: '', md: 'relative' }} w={{ xs: '550px', md: '1200px' }} zIndex="2" m={{ t:{ xs:'0px',md:'-900px'}, l: { xs:'-199px' ,md:'100px'} }} />
        </Div>
      </Div>
    </Div>
  );
}
