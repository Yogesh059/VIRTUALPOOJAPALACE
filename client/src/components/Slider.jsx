import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 100vw;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => (props.direction === 'left' ? '10px' : 'auto')};
  right: ${props => (props.direction === 'right' ? '10px' : 'auto')};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
  @media screen and (max-width: 768px) {
    transform: translateX(${props => props.slideIndex * -100}%);
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    background-color: white;
  }
`;

const ImgContainer = styled.div`
  height: 100%;

  flex: 1;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Image = styled.img`
  height: 80%;
  @media screen and (max-width: 768px) {
    height: 80%;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media screen and (max-width: 768px) {
    flex: 1;
    padding: 25px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  @media screen and (max-width: 425px) {
    font-weight: 250;
    letter-spacing: 1px;
    margin: 25px 0;
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const autoSlide = () => {
    setSlideIndex(prevIndex => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
