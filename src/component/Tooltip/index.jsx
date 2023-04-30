import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericTooltip from './GenericTooltip';
const Tooltip = () => {
  const style = {
    width: '70px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #9195a1',
    borderRadius: '4px',
  };
  const style1 = {
    width: 'fit-content',
    height: '32px',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #9195a1',
    borderRadius: '4px',
  };
  return (
    <Container>
      <h1>Tooltip</h1>
      <br />
      <p>A simple text popup tip.</p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        <Container.Column>
          <Card
            component={
              <GenericTooltip title={'Some Text'}>Hover me</GenericTooltip>
            }
            title={'Basic Text'}
            desc={'Basic hover tooltip with text'}
          />
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <GenericTooltip title={'Some Text'} bg='pink'>
                  {' '}
                  <div style={style1}>pink</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='red'>
                  {' '}
                  <div style={style1}>red</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='yellow'>
                  {' '}
                  <div style={style1}>yellow</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='orange'>
                  {' '}
                  <div style={style1}>orange</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='cyan'>
                  {' '}
                  <div style={style1}>cyan</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='green'>
                  {' '}
                  <div style={style1}>green</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='blue'>
                  {' '}
                  <div style={style1}>blue</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='purple'>
                  {' '}
                  <div style={style1}>purple</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='#108ee9'>
                  {' '}
                  <div style={style1}>geekblue</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='magenta'>
                  {' '}
                  <div style={style1}>magenta</div>
                </GenericTooltip>

                <GenericTooltip title={'Some Text'} bg='gold'>
                  {' '}
                  <div style={style1}>gold</div>
                </GenericTooltip>
                <GenericTooltip title={'Some Text'} bg='lime'>
                  {' '}
                  <div style={style1}>lime</div>
                </GenericTooltip>
              </div>
            }
            title={'Colorful Tooltip'}
            desc={
              'We preset a series of colorful Tooltip styles for use in different situations.'
            }
          />
        </Container.Column>
        <Container.Column>
          <Card
            component={
              <div>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    margin: '0 0 15px 65px',
                  }}
                >
                  <GenericTooltip title={'Some Text'}>
                    <div style={style}>TL</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'}>
                    <div style={style}>Top</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'}>
                    <div style={style}>TR</div>
                  </GenericTooltip>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <GenericTooltip title={'Some Text'} position={'left'}>
                    <div style={style}>LT</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'left'}>
                    <div style={style}>Left</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'left'}>
                    <div style={style}>LB</div>
                  </GenericTooltip>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    margin: '15px 0 0px 65px',
                  }}
                >
                  <GenericTooltip title={'Some Text'} position={'bottom'}>
                    <div style={style}>BL</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'bottom'}>
                    <div style={style}>Bottom</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'bottom'}>
                    <div style={style}>BR</div>
                  </GenericTooltip>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    margin: '-164px 0 80px 300px',
                  }}
                >
                  <GenericTooltip title={'Some Text'} position={'right'}>
                    <div style={style}>RT</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'right'}>
                    <div style={style}>Right</div>
                  </GenericTooltip>

                  <GenericTooltip title={'Some Text'} position={'right'}>
                    <div style={style}>RB</div>
                  </GenericTooltip>
                </div>
              </div>
            }
            title={'Placement'}
            desc={'There are 12 placement options available.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Tooltip;
