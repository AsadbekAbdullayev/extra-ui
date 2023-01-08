import React from 'react'
import {Container} from './style'

const DashedBottom = ({
  padding,
  title
}) => {
  return (
    <Container padding={padding}>{title || 'Dashed Bottom'}</Container>

  )
}

export default DashedBottom