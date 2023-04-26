import React, { useState } from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericSwitch from './GenericSwitch';
import Button from '../Button/GenericButton';

const Switch = () => {
  const [dis, setDis] = useState(true);

  return (
    <Container>
      <h1>Switch</h1>
      <br />
      <p>
        If you need to represent the switching between two states or on-off
        state.
      </p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Container.Column>
          {/* 1 */}
          <Card
            component={<GenericSwitch />}
            title={'Basic'}
            desc={'The most basic usage.'}
          />

          {/* 2 */}
          <Card
            component={
              <GenericSwitch checkedChildren='on' unCheckedChildren='off' />
            }
            title={'Text & icon'}
            desc={'With text and icon.'}
          />
        </Container.Column>

        <Container.Column>
          <Card
            component={
              <Container.Column>
                <GenericSwitch disabled={dis} />
                <Button
                  title='Toggle disabled'
                  type='Primary'
                  onClick={() => setDis(!dis)}
                />
              </Container.Column>
            }
            title={'Disabled'}
            desc={'Disabled state of Switch.'}
          />

          <Card
            component={
              <Container.Column>
                <GenericSwitch />
                <GenericSwitch size={'small'} />
              </Container.Column>
            }
            title={'Two sizes'}
            desc={'size="small" represents a small sized switch.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Switch;
