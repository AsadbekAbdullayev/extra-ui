import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericPagination from './GenericPagination';
const Dropdown = () => {
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>
          <Card
            component={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <GenericPagination total={50} counter />
              </div>
            }
            title={'Page Counter'}
            desc={'The most basic dropdown menu.'}
          />

          <Card
            component={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <GenericPagination total={100} />
              </div>
            }
            title={'Left & Right Simplifier'}
            desc={'The most basic dropdown menu.'}
          />

          <Card
            component={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <GenericPagination total={50} />
              </div>
            }
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />

          <Card
            component={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <GenericPagination total={50} />
              </div>
            }
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Dropdown;
