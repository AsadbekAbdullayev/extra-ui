import React, { useState } from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericCheckbox from './GenericCheckbox';
import Button from '../Button/GenericButton';

const Steps = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [disabled, setDisabled] = useState(false);

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
      <br />

      <Container.Flex>
        <Container.Column>
          <Card
            component={
              <Container.Flex>
                <GenericCheckbox title='Large' width={'30px'} height={'30px'} />
                <GenericCheckbox title='Medium' />
                <GenericCheckbox title='Small' width={'18px'} height={'18px'} />
              </Container.Flex>
            }
            title={'Basic'}
            desc={'Basic usage of checkbox.'}
          />

          <Card
            component={
              <Container.Column>
                <GenericCheckbox
                  title='Check / Uncheck All'
                  width={'18px'}
                  height={'18px'}
                  checked={check1}
                  onClick={() => setCheck1(!check1)}
                />

                <Container.Flex>
                  <GenericCheckbox
                    title='Banana'
                    width={'18px'}
                    height={'18px'}
                    checked={check1}
                  />
                  <GenericCheckbox
                    title='Mango'
                    width={'18px'}
                    height={'18px'}
                    checked={check1}
                  />
                  <GenericCheckbox
                    title='Apple'
                    width={'18px'}
                    height={'18px'}
                    checked={check1}
                  />
                </Container.Flex>
              </Container.Column>
            }
            title={'check all checkbox'}
            desc={'Basic usage of checkbox.'}
          />
        </Container.Column>
        <Container.Column>
          <Card
            component={
              <Container.Column>
                <GenericCheckbox
                  title='Checked - Disabled'
                  width={'18px'}
                  height={'18px'}
                  checked={check}
                  disabled={disabled}
                />

                <Container.Flex style={{ gap: '5px' }}>
                  <Button
                    title={disabled ? 'Enabled' : 'Disaled'}
                    type='Primary'
                    onClick={() => setDisabled(!disabled)}
                  />
                  <Button
                    title={check ? 'Uncheck' : 'Check'}
                    type='Primary'
                    onClick={() => setCheck(!check)}
                  />
                  <Button />
                </Container.Flex>
              </Container.Column>
            }
            title={'Controlled'}
            desc={'Controlled usage of checkbox.'}
          />

          <Card
            component={
              <Container.Column>
                <Container.Grid>
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#ff0000'
                    title='apple'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#008000'
                    title='pear'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#0000ff'
                    title='mango'
                  />
                </Container.Grid>
                <Container.Grid>
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#9acd32'
                    title='banana'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#ffc0cb'
                    title='coconat'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#141414'
                    title='limon'
                  />
                </Container.Grid>
                <Container.Grid>
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#ffa500'
                    title='mango'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#a83232'
                    title='pear'
                  />
                  <GenericCheckbox
                    checked={true}
                    width={'18px'}
                    height={'18px'}
                    bgColor='#1890ff'
                    title='vinograt'
                  />
                </Container.Grid>
              </Container.Column>
            }
            title={'Checkbox Group'}
            desc={'Group of checkboxes'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Steps;
