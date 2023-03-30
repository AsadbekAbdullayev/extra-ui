import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericUploader from './GenereicUploader';
const Uploader = () => {
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>
          <Card
            component={<GenericUploader />}
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />
          <Card
            component={<GenericUploader />}
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Uploader;
