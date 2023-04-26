import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericRate from './GenericRate';

const Steps = () => {
  return (
    <Container>
      <h1>Rate</h1>
      <br />
      <p>A quick rating operation on something.</p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Card
          component={<GenericRate />}
          title={'Basic'}
          desc={'The simplest usage.'}
        />
      </Container.Flex>
    </Container>
  );
};

export default Steps;
