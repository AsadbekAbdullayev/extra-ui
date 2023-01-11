import React,{useState} from 'react'
// import { useState } from 'react';
import {Container,Icon} from './style';
import Card from '../cardDetails';
import GenericBotton from './GenericButton';
const Button = () => {

  const [load1,setLoad1]= useState(false);
  const [load2,setLoad2]= useState(false);
  const [load3,setLoad3]= useState(false);


  const Click2 = ()=>{
    setLoad2(true);
  
    setTimeout(() => {
      setLoad2(false);
    }, 2200);
  };

  const Click1 = ()=>{
    setLoad1(true);
  
    setTimeout(() => {
      setLoad1(false);
    }, 2200);
  };
  const Click3= ()=>{
    setLoad3(true);
  
    setTimeout(() => {
      setLoad3(false);
    }, 2200);
  };

  return (
<Container  >
<Container.Flex>

<Container.Column>
  <Card component={
  <div style={{display:'flex',flexWrap: 'wrap'}}>
 <GenericBotton type='Primary' title={'Primary Button'} size={'Default'}/>
 <GenericBotton type='Default' title={'Default Button'} size={'Default'}/>
 <GenericBotton type='Dashed' title={'Dashed Button'} size={'Default'}/>
 <GenericBotton type='Text' title={'Text Button'} size={'Default'}/>
 <GenericBotton type='Link' title={'Link Button'} size={'Default'}/>
  </div>}
  
  title={'Type'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>

{/* 2 */}
  <Card component={<div>

     <div style={{display:'flex',flexWrap: 'wrap',alignItems:'center'}}>
     <GenericBotton type='Default' title='Large Button' size={'Large'}/>
     <GenericBotton type='Default' title='Default Button'  size={'Default'}/>
     <GenericBotton type='Default' title='Small Button' size={'Small'}/>
      </div>
      <div style={{display:'flex',flexWrap: 'wrap',alignItems:'center'}}>
      <GenericBotton type='Primary' title='Large Button' size={'Large'}/>
      <GenericBotton type='Primary' title='Default Button'  size={'Default'}/>
      <GenericBotton type='Primary' title='Small Button' size={'Small'}/>
       </div>
  </div>

      }
   title={'Size'} desc={'Ant Design supports a default button size as well as a large and small size.If a large or small button is desired, set the size property to either large or small respectively.    Omit the size property for a button with the default size.'}/>


{/* 3 */}
<Card component={
  <div>
<div style={{display:'flex',flexWrap: 'wrap',alignItems:'center'}}>
<GenericBotton type='Primary' loading={true} title='Loading' size={'Large'}/>
<GenericBotton type='Primary' loading={true} title='Loading'  size={'Default'}/>
<GenericBotton type='Primary'  loading={true} />
 </div>

<div style={{display:'flex',flexWrap: 'wrap',alignItems:'center'}}>
<GenericBotton type='Primary' onClick={Click3} loading={load3} title='Click me!' size={'Large'} icon={<Icon.Click/>}/>
<GenericBotton type='Primary' onClick={Click1} loading={load1} title='Click me!'  size={'Default'} icon={<Icon.Click/>}/>
<GenericBotton type='Primary' onClick={Click2}  loading={load2}  icon={<Icon.Click/>}/>
 </div>
 </div>

 }
title={'Loading'} desc={'Ant Design supports a default button size as well as a large and small size.If a large or small button is desired, set the size property to either large or small respectively.    Omit the size property for a button with the default size.'}/>


  </Container.Column> 

{/* 2 column */}

  <Container.Column>

{/* 1 */}
  <Card component={
     <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Primary' icon={<Icon.Search/>} shape='circle' size={'Default'}/>
     <GenericBotton type='Default' icon={<Icon.Search1/>} shape='circle' size={'Default'}/>
     <GenericBotton type='Primary' icon={<Icon.Search/>} title='Search'size={'Default'}/>
     <GenericBotton type='Default' icon={<Icon.Search1/>} title='Search'size={'Default'}/>
     <GenericBotton type='Dashed' icon={<Icon.Search1/>} shape='circle'size={'Default'}/>
     <GenericBotton type='Dashed' icon={<Icon.Search1/>} title='Search'size={'Default'}/>
     <GenericBotton type='Default' icon={<Icon.Search1/>} />

      </div>}
   title={'Icon'} desc={'There are primary button, default button, dashed button, text button and link button in antd.'}/>

{/*2 */}

<Card component={
     <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Primary' Danger title={'Primary'} size={'Default'} />
 <GenericBotton type='Default' Danger title={'Default'} size={'Default'} />
 <GenericBotton type='Dashed' Danger title={'Dashed'} size={'Default'}/>
 <GenericBotton type='Text' Danger title={'Text'} size={'Default'}/>
 <GenericBotton type='Link' Danger title={'Link'} size={'Default'}/>

      </div>}
   title={'Danger'} desc={'danger is a property of button'}/>


{/* 3 */}



<Card component={
  <div>

     <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Primary'  title={'Primary'} size={'Default'} />
     <GenericBotton type='Primary' disabled  title={'Primary'} size={'Default'} />
      </div>

      <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Default'  title={'Default'} size={'Default'} />
     <GenericBotton type='Default' disabled  title={'Default'} size={'Default'} />
      </div>

      <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Dashed'  title={'Dashed'} size={'Default'} />
     <GenericBotton type='Dashed' disabled title={'Dashed'} size={'Default'} />
      </div>

      <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Text'  title={'Text'} size={'Default'} />
     <GenericBotton type='Text' disabled title={'Text'} size={'Default'} />
      </div>

      <div style={{display:'flex',flexWrap: 'wrap'}}>
     <GenericBotton type='Link' Danger title={'Link'} size={'Default'} />
     <GenericBotton type='Link' disabled Danger title={'Link'} size={'Default'} />
      </div>
  </div>
      
      }
   title={'Disabled'} desc={'danger is a property of button'}/>

  </Container.Column> 

  
</Container.Flex>

</Container>
    
  )
}

export default Button