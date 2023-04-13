import React, { useState, useEffect } from 'react';
import { Container } from './style';
import { NexrIcon } from '../../Generics/GenericIcons';
const GenericCarousel = ({ width, height, auto }) => {
  const [index, setIndex] = useState(0);
  function currentTime() {
    if (auto) {
      setTimeout(function () {
        if (index > 2) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, 2500);
    }
  }
  useEffect(() => currentTime(), [index]);
  const changer = (name) => {
    if (name === 'next') {
      if (index > 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };
  return (
    <Container width={width} height={height}>
      <Container.Flex index={index}>
        <Container.Wrap>1</Container.Wrap>
        <Container.Wrap>2</Container.Wrap>
        <Container.Wrap>3</Container.Wrap>
        <Container.Wrap>4</Container.Wrap>
      </Container.Flex>
      <Container.Action>
        <NexrIcon
          onClick={() => changer('pre')}
          width='25px'
          height='25px'
          style={{ transform: 'rotate(0.5turn)' }}
          color='#fff'
        />
        <NexrIcon
          onClick={() => changer('next')}
          width='25px'
          height='25px'
          color='#fff'
        />
      </Container.Action>
    </Container>
  );
};

export default GenericCarousel;
