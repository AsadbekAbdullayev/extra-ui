import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericForm from './GenericForm';

const Steps = () => {
 
  return (
    <Container>
      <h1>Form</h1>
      <br />
      <p>
        Steps is a navigation bar that guides users through the steps of a task.
      </p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Card
          component={<GenericForm />}
          title={'Basic Form'}
          desc={
            'Cooperate with the content and buttons, to represent the progress of a process.'
          }
        />
      </Container.Flex>
    </Container>
  );
};

export default Steps;
