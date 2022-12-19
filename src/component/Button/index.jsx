import React from 'react'
import { useState } from 'react';
import {Container} from './style';
const Button = () => {
  const [togle,setTogle] =useState(false);
  return (
<Container onClick={()=>setTogle(!togle)} togle={togle}>Button</Container>
    
  )
}

export default Button