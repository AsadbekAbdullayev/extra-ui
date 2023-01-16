import React from 'react'
import { Container } from './style'
import Card from '../cardDetails';
import GenericDropdown from './GenericDropdown';
const Dropdown = () => {
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>

          <Card

            component={<div style={{ width: '100%' }}>
              <GenericDropdown />
              <GenericDropdown />
              <GenericDropdown disabled={'true'}/>
              <GenericDropdown icon={<Container.Pen/>}/>
            </div>}

            title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'} />


        </Container.Column>

        {/* 2*/}
        <Container.Column>
          <Card
            title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'} />


        </Container.Column>
      </Container.Flex>
    </Container>
  )
}

export default Dropdown