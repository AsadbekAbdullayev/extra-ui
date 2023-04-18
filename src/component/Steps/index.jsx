import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericSteps from './GenericSteps';
import { CheckIcon } from '../Generics/GenericIcons';

const Steps = () => {
  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',

      content: 'Last-content',
      icon: <CheckIcon />,
    },
  ];
  return (
    <Container>
      <Container.Flex>
        <Card
          component={<GenericSteps steps={steps} />}
          title={'Basic'}
          desc={'Basic usage.'}
        />
      </Container.Flex>
    </Container>
  );
};

export default Steps;
