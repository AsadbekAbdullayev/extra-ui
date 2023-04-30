import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import CustomTable from '../CustomTable';
import { column } from './header';
import Button from '../Button/GenericButton';
const Steps = () => {
  const Data = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      status: 'nice',
      email: 'John@email.com',
      number: '+998909222332',
    },
    {
      id: 1,
      name: 'Jim Green',
      age: 41,
      status: 'loser',
      email: 'Jim@email.com',
      number: '+998909222341',
    },
    {
      id: 1,
      name: 'Joe Black',
      age: 25,
      status: 'teacher',
      email: 'Joe@email.com',
      number: '+998909222325',
    },
  ];
  return (
    <Container>
      <Container.Flex style={{ gap: '10px' }}>
        <h1>AG Grid Table clone</h1>
        <Container.Link href='https://www.ag-grid.com/'>link</Container.Link>
      </Container.Flex>
      <br />
      <p>To display a collection of structured data.</p>
      <Container.Column style={{ margin: '20px 0 0 0' }}>
        <Card
          component={<CustomTable rowData={Data} columnDefs={column} />}
          title={'Basic '}
          desc={'Simple table with actions.'}
        />
        <Card
          component={<CustomTable rowData={Data} columnDefs={column} />}
          title={'Resizable '}
          desc={'Resizable table with actions.'}
        />
        {/* <Card
          component={
            <Container.Column style={{ gap: '10px' }}>
              <Button title='Open Filter' type='Primary' />
              <CustomTable
                rowData={Data}
                columnDefs={column}
                openFilter={true}
              />
            </Container.Column>
          }
          title={'With Filter'}
          desc={
            'You can use filterMode to change default filter interface, options: menu(default) and tree'
          }
        /> */}
      </Container.Column>
    </Container>
  );
};

export default Steps;
