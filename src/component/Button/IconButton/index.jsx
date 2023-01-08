import React,{useState} from 'react'
import {Container,Icon} from './style'

const IconBottom = ({
  padding,
  title,
  icon,
  loading
}) => {
  const [load,setLoad]= useState(false);
const Click = ()=>{
  setLoad(true);

  setTimeout(() => {
    setLoad(false);
  }, 2200);
};
  return (
    <Container padding={padding} onClick={()=>Click()}>{load ? <Container.Loading > <Icon.Loading/></Container.Loading> :  icon} {title || 'Icon Bottom'}</Container>

  )
}

export default IconBottom