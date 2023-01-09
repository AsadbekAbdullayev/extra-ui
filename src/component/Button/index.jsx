import React,{useState} from 'react'
// import { useState } from 'react';
import {Container,Icon} from './style';
import Card from '../cardDetails';
import GenericBotton from './GenericButton';
const Button = () => {

  const [load,setLoad]= useState(false);


  const Click = ()=>{
    setLoad(true);
  
    setTimeout(() => {
      setLoad(false);
    }, 2200);
  };

  return (
<Container  >
<Container.Flex>
  <Card component={
  <div style={{display:'flex',flexWrap: 'wrap'}}>
 <GenericBotton type='Primary' title={'Primary Button'}/>
 <GenericBotton type='Default' title={'Default Button'}/>
 <GenericBotton type='Dashed' title={'Dashed Button'}/>
 <GenericBotton type='Text' title={'Text Button'}/>
 <GenericBotton type='Link' title={'Link Button'}/>
  <GenericBotton type='Primary' icon={<Icon.Search/>}/>
  <GenericBotton  type='Primary' icon={<Icon.Download/>} title='All Button' />
  <GenericBotton type='Primary' icon={<Icon.Download/>} title='Primary' loading={load} onClick={Click}/>
  </div>}
  
  title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>

{/* round */}
  <Card component={
     <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Primary' icon={<Icon.Search/>} shape='circle'/>
     <GenericBotton type='Primary' title={'A'} shape='circle'/>
     <GenericBotton type='Dashed' title={'Dashed Button'}/>
     <GenericBotton type='Text' title={'Text Button'}/>
     <GenericBotton type='Link' title={'Link Button'}/>
      <GenericBotton type='Primary' icon={<Icon.Search/>}/>
      <GenericBotton  type='Primary' icon={<Icon.Download/>} title='All Button' />
      <GenericBotton type='Primary' icon={<Icon.Download/>} title='Primary' loading={load} onClick={Click}/>
      </div>}
   title={'Icon'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>
  </Container.Flex> 


  



</Container>
    
  )
}

export default Button