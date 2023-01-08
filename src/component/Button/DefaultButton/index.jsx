import React from 'react'
import {Container} from './style'

const PrimaryBottom = ({
  padding,
  title,
}) => {
  return (
    <Container padding={padding}>{title || 'Default Bottom'}</Container>

  )
}

export default PrimaryBottom