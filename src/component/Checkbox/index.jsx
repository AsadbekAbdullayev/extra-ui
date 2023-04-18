import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericCheckbox from './GenericCheckbox';

const Steps = () => {
  return (
    <Container>
      <h1>Checkbox</h1>
      <br />
      <p>
        If you use only one checkbox, it is the same as using Switch to toggle
        between two states. The difference is that Switch will trigger the state
        change directly, but Checkbox just marks the state as changed and this
        needs to be submitted.
      </p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Card
          component={<GenericCheckbox title='Checkbox' />}
          title={'Basic'}
          desc={'Basic usage of checkbox.'}
        />
      </Container.Flex>
    </Container>
  );
};

export default Steps;
