import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericRate from './GenericRate';
const tooltips1 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Steps = () => {
  return (
    <Container>
      <h1>Rate</h1>
      <br />
      <p>A quick rating operation on something.</p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Container.Column>
          <Card
            component={<GenericRate />}
            title={'Basic'}
            desc={'The simplest usage.'}
          />
          <Card
            component={<GenericRate tooltips={tooltips1} />}
            title={'Show copywriting'}
            desc={'Add copywriting in rate components.'}
          />
        </Container.Column>
        <Container.Column>
          <Card
            component={<GenericRate defaultValue={3} />}
            title={'Selected'}
            desc={'Support select star.'}
          />
          <Card
            component={<GenericRate disabled={true} defaultValue={2} />}
            title={'Read only'}
            desc={'Read only, can`t use mouse to interact.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Steps;
