import React,{useState} from 'react'
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
  width,
}) => {

const [activeButton,setActiveButton] =useState(false);
const onClick1=()=>{
  onClick && onClick();
  setActiveButton(true);
  setTimeout(() => {
    setActiveButton(false);
  },700);
}
  return (
    <Container onClick={!disabled && onClick1}
     padding={padding} 
    activeButton={activeButton}
    shape={shape}
     margin={margin} 
     type={type} 
     size={size} 
     Danger={Danger} 
     disabled={disabled}
     loading={loading}
     icon={icon}
     width={width}
     >{loading ? <Container.Loading > <Icon.Loading/></Container.Loading> :  icon} {title && <Container.Title icon={icon} loading={loading} size={size}> {title} {disabled && '(disabled)'}</Container.Title>}</Container>

  )
}

export default GenericBottom