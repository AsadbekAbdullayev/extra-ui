import React from 'react'
import {Container} from './style'
import Card from '../cardDetails';
const Dropdown = () => {
  return (
    <Container>
        <Container.Flex>
            {/* 1 */}
            <Container.Column>

<Card 
  title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>


            </Container.Column>

            {/* 2*/}
            <Container.Column>
            <Card
  title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>


            </Container.Column>
        </Container.Flex>
    </Container>
  )
}

export default Dropdown