import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericCard from './GenericCard';
import logo from '../../assets/img/pexels.jpg';
const CardComponent = () => {
  return (
    <Container>
      <h1>Card</h1>
      <br />
      <p>
        A card can be used to display content related to a single subject. The
        content can consist of multiple elements of varying types and sizes.
      </p>
      <Container.Column style={{ margin: '20px 0 0 0' }}>
        <Card
          component={
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <GenericCard title='Default size card'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '10px',
                    fontSize: '14px',
                  }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </div>
              </GenericCard>

              <GenericCard title='Small size card' size='small' height='120px'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    padding: '10px',
                    fontSize: '12px',
                  }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </div>
              </GenericCard>
            </div>
          }
          title={'Basic card'}
          desc={
            'A basic card containing a title, content and an extra corner content. Supports two sizes: default and small.'
          }
        />

        <Card
          component={
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <GenericCard height='120px'>
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '0 20px',
                    fontSize: '14px',
                  }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </div>
              </GenericCard>
            </div>
          }
          title={'Simple card'}
          desc={'A simple card only containing a content area.'}
        />

        <Card
          component={
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <GenericCard
                image={<img alt='Rasm' src={logo} width='100%' height='128' />}
              >
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    // alignItems: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '0 20px',
                    fontSize: '14px',
                    margin: '10px 0',
                  }}
                >
                  <h3>Card content</h3>
                  <p>Card content</p>
                </div>
              </GenericCard>
            </div>
          }
          title={'Customized content'}
          desc={'You can use  to support more flexible content.'}
        />

        <Card
          component={
            <Container.Flex>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  gap: '15px',
                }}
              >
                {/* 1 */}

                <GenericCard title='Card title' width='100%'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '20px 10px',

                      fontSize: '14px',
                    }}
                  >
                    <p>Card content</p>
                  </div>
                </GenericCard>
                {/* 2*/}

                <GenericCard title='Card title' width='100%'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '20px 10px',

                      fontSize: '14px',
                    }}
                  >
                    <p>Card content</p>
                  </div>
                </GenericCard>
                {/* 3 */}
                <GenericCard title='Card title' width='100%'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '20px 10px',

                      fontSize: '14px',
                    }}
                  >
                    <p>Card content</p>
                  </div>
                </GenericCard>
              </div>
            </Container.Flex>
          }
          title={'Card in column'}
          desc={
            'Cards usually cooperate with grid column layout in overview page.'
          }
        />
      </Container.Column>
    </Container>
  );
};

export default CardComponent;
