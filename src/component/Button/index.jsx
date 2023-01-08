import React from 'react'
// import { useState } from 'react';
import {Container,Icon} from './style';
import Card from '../cardDetails';
import PrimaryButton from './PrimaryBottom';
import DefaultButton from './DefaultButton';
import DashedButton from './DashedButton';
import LinkButton from './LinkButton';
import IconButton from './IconButton';
import TextButton from './TextButton';
const Button = ({
  padding,
}) => {
  return (
<Container  >

  <Card component={<div style={{display:'flex',flexWrap: 'wrap'}}><PrimaryButton/> <DefaultButton/>
  <DashedButton/>
  <LinkButton/>
  <TextButton/>
  <IconButton icon={<Icon.Search/>}/>
  <IconButton icon={<Icon.Download/>} title='Loading Button' />
  </div>} title={'PrimaryBottom'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>
  <Card component={<DefaultButton/>} title={'PrimaryBottom'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>
</Container>
    
  )
}

export default Button