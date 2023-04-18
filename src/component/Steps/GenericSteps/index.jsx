import React, { useState } from 'react';
import { Container } from './style';
// import { NexrIcon } from '../../Generics/GenericIcons';
import Button from '../../Button/GenericButton';
const GenericSteps = ({ width, height, steps }) => {
  const [newSteps, setNewSteps] = useState(
    steps?.map((v) => ({ ...v, line: 'wait' }))
  );
  const [count, setCount] = useState(0);
  const [content, setContent] = useState(newSteps[0]?.content);

  const clickStep = (name) => {
    if (name) {
      let newData = newSteps.map((v, i) => {
        if (count + 1 === i) {
          return { ...v, status: 'done' };
        } else if (count === i) {
          return { ...v, line: 'done' };
        } else {
          return v;
        }
      });
      setContent(newSteps[count + 1]?.content);
      setNewSteps(newData);
      setCount(count + 1);
    } else {
      let newData = newSteps?.map((v, i) => {
        if (count === i) {
          return { ...v, status: 'wait' };
        } else if (count - 1 === i) {
          return { ...v, line: 'wait' };
        } else {
          return v;
        }
      });
      setContent(newSteps[count - 1]?.content);

      setNewSteps(newData);
      setCount(count - 1);
    }
  };
  return (
    <Container width={width} height={height}>
      <Container.Flex style={{ width: '100%' }}>
        {newSteps.map(({ title, icon, status, line }, i) => (
          <Container.Start status={status} key={i}>
            <Container.Steps status={status === 'done'}>
              {icon ? icon : i + 1}
            </Container.Steps>
            {'  '}
            {title}
            <Container.Line
              status={line === 'done'}
              none={i === newSteps?.length - 1}
            />
          </Container.Start>
        ))}
      </Container.Flex>

      <Container.Content>{content}</Container.Content>

      <Container.Start style={{ margin: '20px 0 0 0' }}>
        {count !== newSteps?.length - 1 && (
          <Button
            type='Primary'
            title={count === newSteps?.length - 1 ? 'Done' : 'Next'}
            onClick={() => count !== newSteps?.length - 1 && clickStep('Next')}
          />
        )}
        {count !== 0 && (
          <Button type='Default' title='Previous' onClick={() => clickStep()} />
        )}
      </Container.Start>
    </Container>
  );
};

export default GenericSteps;
