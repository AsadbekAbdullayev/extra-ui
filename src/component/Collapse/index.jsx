import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericCollapse from './GenericCollapse';

const Collapse = () => {
  return (
    <Container>
      <h1>Collapse</h1>
      <br />
      <p>A content area which can be collapsed and expanded.</p>
      <Container.Column style={{ margin: '20px 0 0 0' }}>
        <Card
          component={
            <GenericCollapse
              panelContent={'A dog is a type of domesticated animal.'}
              headerContent={'This is panel header '}
            />
          }
          title={'Collapse'}
          desc={
            'By default, any number of panels can be expanded at a time. The first panel is expanded in this example.'
          }
        />
        <Card
          component={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
              }}
            >
              <p style={{ margin: '0 0 0 100px', textDecoration: 'underline' }}>
                Default Size
              </p>
              <GenericCollapse
                panelContent={'A dog is a type of domesticated animal.'}
                headerContent={'This is default size panel header'}
              />{' '}
              <p style={{ margin: '0 0 0 100px', textDecoration: 'underline' }}>
                Small Size
              </p>
              <GenericCollapse
                panelContent={'A dog is a type of domesticated animal.'}
                headerContent={'This is small size panel header'}
                height='30px'
              />{' '}
              <p style={{ margin: '0 0 0 100px', textDecoration: 'underline' }}>
                Large Size
              </p>
              <GenericCollapse
                panelContent={'A dog is a type of domesticated animal.'}
                headerContent={'This is large size panel header'}
                height='60px'
              />
            </div>
          }
          title={'Collapse'}
          desc={
            'By default, any number of panels can be expanded at a time. The first panel is expanded in this example.'
          }
        />
        <Card
          component={
            <GenericCollapse
              panelContent={'A dog is a type of domesticated animal.'}
              headerContent={'This is panel header '}
              disabled={true}
            />
          }
          title={'Disabled'}
          desc={'Specify the trigger area of collapsible by collapsible.'}
        />
      </Container.Column>
    </Container>
  );
};

export default Collapse;
