import React from 'react'
import { useState } from 'react';
import {Container} from './style';
import Card from '../cardDetails';
import DefaultBottom from './defaultBottom';

const Button = ({
  padding,
}) => {
  return (
<Container  >
  <Card component={<DefaultBottom/>}/>
  <Card component={<DefaultBottom/>}/>
</Container>
    
  )
}

export default Button