import React from 'react'
import {Container,Icon} from './style'

const GenericBottom = ({
  padding,
  title,
  icon,
  loading,
  margin,
  type,
  size,
  shape,
  Danger,
  disabled,
  onClick,
}) => {

  return (
    <Container onClick={onClick} padding={padding}
    shape={shape}
     margin={margin} 
     type={type} 
     size={size} 
     Danger={Danger} 
     disabled={disabled}
     loading={loading}
     icon={icon}
     >{loading ? <Container.Loading > <Icon.Loading/></Container.Loading> :  icon} {title && <Container.Title> {title}</Container.Title>}</Container>

  )
}

export default GenericBottom