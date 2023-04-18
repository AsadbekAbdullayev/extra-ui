import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericSteps from './GenericSteps';

const Steps = () => {
  const steps = [
    { title: 'First', content: 'First-content', status: 'done' },
    { title: 'Second', content: 'Second-content', status: 'wait' },
    { title: 'Three', content: 'Three-content', status: 'wait' },
    { title: 'Four', content: 'Four-content', status: 'wait' },
    { title: 'Five', content: 'Five-content', status: 'wait' },
  ];
  return (
    <Container>
      <h1>Steps</h1>
      <br />
      <p>
        Steps is a navigation bar that guides users through the steps of a task.
      </p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Card
          component={<GenericSteps steps={steps} />}
          title={'Switch Step'}
          desc={
            'Cooperate with the content and buttons, to represent the progress of a process.'
          }
        />
      </Container.Flex>
    </Container>
  );
};

export default Steps;
