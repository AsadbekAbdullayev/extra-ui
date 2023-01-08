import React from 'react'
import {Container} from './style'

const TextBottom = ({
  padding,
  title
}) => {
  return (
    <Container padding={padding}>{title || 'Text Bottom'}</Container>

  )
}

export default TextBottom