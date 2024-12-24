import React from 'react';
import { Div, Text, Image } from 'atomize';
import Iphone from '../img/iPhone 14.svg';
import Prize from '../img/prize.svg';
import Laptop from '../img/Laptop.svg';
import Terminal from '../img/Group.svg';
import Map from '../img/map.svg';
import VideoMP from '../img/Video.mp4';

function Features() {
  return (
    <Div bg="#141414" d="flex" flexDir="column" alignItems="center" p="105px">
      <Div w="84rem" m="0 auto">
        <Div
          className="greenContainer"
          w={{ xs: '26%', md: '100%' }}
          maxW="1470px"
          pos={{ xs: '', md: 'relative' }}
          m={{ b: { md: '20px' }, l: { xs: '-90px', md: '30px' } }}
        >
          <Div
            maxW="1199px"
            h={{ xs: '450px', md: '410px' }}
            textColor="white"
            p="20px"
            border="1px solid"
            bg="#CBEA5E"
            rounded="56px"
            d="flex"
            align="center"
            justify="space-between"
          >
            <Image
              src={Iphone}
              w={{ xs: '100%', md: '650px' }}
              h={{ xs: '', md: '525px' }}
              pos={{ xs: '', md: 'relative' }}
              m={{ t: { xs: '-200px', md: '0px' } }}
            />
            <Div m={{ t: { xs: '250px', md: '0px' }, l: { xs: '-320px' } }}>
              <Text textColor="#00000080" textSize="display3" alignItems="center">
                <strong>Играй.</strong>
              </Text>
              <Text w={{ xs: '', md: '541px' }} textColor="#000000" textSize={{ xs: '40px', md: '60px' }}>
                <strong>Увлекательная игра</strong>
              </Text>
            </Div>
          </Div>
        </Div>
        <Div
          className="smallContainer"
          pos={{ xs: '', md: 'relative' }}
          d="flex"
          flexDir={{ xs: 'column', sm: 'row', md: 'row' }}
          m={{ b: { xs: '50px', md: '20px' }, l: { xs: '-90px', md: '30px' }, t: { xs: '50px', md: '0px' } }}
        >
          <Div
            maxW="590px"
            w={{ xs: '24.40%', md: '100%' }}
            h={{ xs: '350px', md: '410px' }}
            textColor="white"
            p="105px"
            border="1px solid"
            bg="white"
            rounded="56px"
          >
            <Div m={{ t: { xs: '-30px', md: '0px' }, l: { xs: '-100px', md: 'px' } }}>
              <Text textColor="#00000080" textSize="display3" alignItems="center">
                <strong>Обменивай.</strong>
              </Text>
              <Text w="541px" h="231px" textColor="#000000" textSize="display3">
                <strong>
                  Получай <br /> подарки
                </strong>
              </Text>
            </Div>
          </Div>
          <Div
            w={{ xs: '279px', md: '279px' }}
            h={{ xs: '0px', md: '0px' }}
            m={{ t: { xs: '50px', md: '0px' }, l: { xs: '30px', md: '200px' } }}
            pos={{ xs: '', md: 'relative' }}
          >
            <Image src={Prize}></Image>
          </Div>
        </Div>
        <Div
          className="blueContainer"
          w={{ xs: '26%', md: '100%' }}
          maxW="1470px"
          pos={{ xs: '', md: 'relative' }}
          m={{ b: { md: '20px' }, l: { xs: '-90px', md: '30px' }, t: { xs: '20px' } }}
        >
          <Div
            maxW="1199px"
            h={{ xs: '450px', md: '410px' }}
            textColor="white"
            p="20px"
            border="1px solid"
            bg="blue"
            rounded="56px"
            d="flex"
            align="center"
            justify="space-between"
          >
            <Image
              src={Laptop}
              w={{ xs: '100%', md: '650px' }}
              h={{ xs: '', md: '525px' }}
              pos={{ xs: '', md: 'relative' }}
              m={{ t: { xs: '-200px', md: '0px' } }}
            />
            <Div m={{ t: { xs: '250px', md: '0px' }, l: { xs: '-320px' } }}>
              <Text textColor="#FFFFFF80" textSize={{ xs: '40px', md: '60px' }} alignItems="center">
                <strong>Везде.</strong>
              </Text>
              <Text w={{ xs: '', md: '541px' }} textColor="white" textSize={{ xs: '40px', md: '60px' }}>
                <strong>На всех платформах</strong>
              </Text>
            </Div>
          </Div>
        </Div>

        <Div
          className="whiteContainer"
          w={{ xs: '26%', md: '100%' }}
          maxW="1470px"
          pos={{ xs: '', md: 'relative' }}
          m={{ b: { xs: '50px', md: '20px' }, l: { xs: '-93px', md: '30px' }, t: { xs: '50px', md: '0px' } }}
        >
          <Div
            maxW="1199px"
            h={{ xs: '450px', md: '410px' }}
            textColor="white"
            p="20px"
            border="1px solid"
            bg="white"
            rounded="56px"
            d="flex"
            align="center"
            justify="space-between"
            overflow="hidden"
          >
            <Image
              src={Terminal}
              w={{ xs: '200px', md: '221px' }}
              h="492px"
              m={{ l: { xs: '50px', md: '160px' }, t: { xs: '120px', md: '' } }}
              pos={{ xs: '', md: 'relative' }}
            />
            <Div m={{ t: { xs: '-120px', md: '' }, l: { xs: '-260px', md: '' } }}>
              <Text textColor="#00000080" textSize={{ xs: '40px', md: 'display3' }}>
                <strong>Оглянись.</strong>
              </Text>
              <Text w="541px" h="231px" textColor="#000000" textSize={{ xs: '40px', md: 'display3' }}>
                <strong>
                  Терминалы <br />
                  везде{' '}
                </strong>
              </Text>
            </Div>
          </Div>
        </Div>
        <Div>
          <Div className="smallContainer2" d="flex" flexDir={{ xs: 'column', sm: 'row', md: 'row' }}>
            <Image
              src={Map}
              w="198px"
              h="307px"
              m={{ t: { xs: '50px', md: '0px' }, l: { xs: '-10px', md: '180px' } }}
            ></Image>
            <Div
              w={{ xs: '26%', md: '100%' }}
              h={{ xs: '440px', md: '410px' }}
              maxW="590px"
              pos={{ xs: '', md: 'relative' }}
              m={{ b: { xs: '50px', md: '' }, l: { xs: '-90px', md: '260px' }, t: { xs: '50px', md: '0px' } }}
            >
              <Div maxW="1199px" h="310px" textColor="white" p="105px" border="1px solid" bg="white" rounded="56px">
                <Div m={{ t: { xs: '-30px', md: '0px' }, l: { xs: '-100px', md: '0px' } }}>
                  <Text textColor="#00000080" textSize={{ xs: '50px', md: 'px' }} alignItems="center">
                    <strong>Отмечай.</strong>
                  </Text>
                  <Text w="541px" h="231px" textColor="#000000" textSize={{ xs: '50px', md: 'px' }}>
                    <strong>
                      Мы поставим <br /> терминал{' '}
                    </strong>
                  </Text>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div
          className="lastContainer"
          pos="relative"
          overflow="hidden"
          w={{ xs: '28%', md: '100%' }}
          h={{ xs: '430px', md: '410px' }}
          m={{ b: { xs: '-70px', md: '20px' }, l: { xs: '-90px', md: '10px' }, t: { xs: '-130px', md: '-130px' } }}
        >
          <video
            src={VideoMP}
            autoPlay
            loop
            muted
            style={{
              borderRadius: '58px',
              width: '92%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              zIndex: 0,
            }}
          ></video>
          <Div zIndex="1" pos={{ xs: 'relative', md: 'relative' }} textColor="White" textAlign="center" textWeiht="700">
            <Text
              textColor="#FFFFFF80"
              m={{ t: { xs: '230px', md: '130px' } }}
              textSize={{ xs: '50px', md: 'display3' }}
            >
              <strong>Изучай.</strong>
            </Text>
            <Text textColor="white" textSize={{ xs: '50px', md: 'display3' }}>
              <strong>Уникальная карта </strong>
            </Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default Features;
