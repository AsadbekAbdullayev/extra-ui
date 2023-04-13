import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericCarousel from './GenericCarousel';
const Carousel = () => {
  return (
    <Container>
      <Container.Flex>
        <Card
          component={<GenericCarousel />}
          title={'Basic'}
          desc={'Basic usage.'}
        />
      </Container.Flex>
      <Container.Flex>
        <Card
          component={<GenericCarousel auto={'true'} />}
          title={'Scroll automatically'}
          desc={'Timing of scrolling to the next card/picture'}
        />
      </Container.Flex>
    </Container>
  );
};

export default Carousel;
