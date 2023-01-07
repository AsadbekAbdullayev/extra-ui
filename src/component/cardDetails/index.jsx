import React from 'react'
import {Container} from './style.js';
const Card = ({
  title,
  component,
  margin,
}) => {
  return (
    <Container>
      {component}

    </Container>
  )
}

export default Card