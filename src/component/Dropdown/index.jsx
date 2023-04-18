import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericDropdown from './GenericDropdown';
import { User1Icon, CallIcon } from '../Generics/GenericIcons';
const Dropdown = () => {
  let options = [
    {
      id: 1,
      name: 'Option 1',
      value: 'value 1',
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'value 2',
    },
  ];
  let options3 = [
    {
      id: 1,
      name: 'Option 1',
      value: 'value 1',
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'value 2',
    },
    {
      id: 3,
      name: 'Option 3',
      value: 'value 3',
    },
  ];
  let options1 = [
    {
      id: 1,
      name: 'Option 1',
      value: 'value 1',
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'value 2',
    },
    {
      id: 3,
      name: 'Option 3',
      value: 'value 3',
    },
    {
      id: 4,
      name: 'Option 4',
      value: 'value 4',
    },
    {
      id: 5,
      name: 'Option 5',
      value: 'value 5',
    },
    {
      id: 6,
      name: 'Option 6',
      value: 'value 6',
    },
    {
      id: 7,
      name: 'Option 7',
      value: 'value 7',
    },
    {
      id: 8,
      name: 'Option 8',
      value: 'value 8',
    },
    {
      id: 9,
      name: 'Option 9',
      value: 'value 9',
    },
    {
      id: 10,
      name: 'Option 10',
      value: 'value 10',
    },
  ];

  let options2 = [
    {
      id: 1,
      name: 'Option 1',
      value: 'value 1',
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'value 2',
    },
    {
      id: 3,
      name: 'Option 3',
      value: 'value 3',
    },
    {
      id: 4,
      name: 'Option 4',
      value: 'value 4',
    },
    {
      id: 5,
      name: 'Option 5',
      value: 'value 5 ',
    },
  ];
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>
          <Card
            component={
              <div style={{ width: '100%' }}>
                <GenericDropdown
                  options={options}
                  title='Select with two options'
                />
                <GenericDropdown
                  options={options2}
                  title='Select with five options'
                />
                <GenericDropdown
                  options={options1}
                  title='Select with ten options'
                />
                <GenericDropdown title='Select with no options' />
                {/* <GenericDropdown /> */}
                {/* <GenericDropdown disabled={'true'}/> */}
              </div>
            }
            title={'Basic Usage.'}
            desc={'Basic Usage'}
          />

          <Card
            component={
              <div style={{ width: '100%' }}>
                <GenericDropdown disabled={'true'} options={options} />
              </div>
            }
            title={'Disabled selection'}
            desc={'Disabled selection, selecting from existing items.'}
          />
        </Container.Column>

        {/* 2*/}
        <Container.Column>
          <Card
            component={
              <div style={{ width: '100%' }}>
                <GenericDropdown icon={<Container.Pen />} options={options3} />
                <GenericDropdown
                  icon={<User1Icon height='18px' width='18px' />}
                  options={options3}
                />
                <GenericDropdown
                  icon={<CallIcon height='18px' width='18px' color='#010101' />}
                  options={options3}
                />
              </div>
            }
            title={'Button with dropdown menu aligned to bottom'}
            desc={
              'A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.'
            }
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Dropdown;
