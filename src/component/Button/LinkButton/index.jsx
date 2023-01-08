import React from 'react'
import {Container} from './style'

const LinkBottom = ({
  padding,
  title
}) => {
  return (
    <Container padding={padding}>{title || 'Link Bottom'}</Container>

  )
}

export default LinkBottom