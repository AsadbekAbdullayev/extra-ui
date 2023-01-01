import React, { useState } from 'react'
import { Container,Icon,Item } from './style'
import {SidebarData} from '../../utils/sidebsrView';
import {
  useNavigate
} from "react-router-dom";
export default function SidebarComponent({view}) {
  console.log(view,'view');

  // Input: l1 = [2,4,3], l2 = [5,6,4]
  // Output: [7,0,8]





let navigate = useNavigate();
// const pathname = window.location.pathname
const [togle,setTogle] = useState(false);
const [togleChild,setTogleChild] = useState(false);
const callFunc = (name) =>{
  setTogle(!togle);
  setTogleChild(false);
};

const [clickId,setClickId] = useState(false);
const openSubmenu =(id,name)=>{
  navigate(name)
if(id === clickId){
  setClickId(false);
}else{
  setClickId(id);
}

};


  return (
    <Container  view={view} className='style-1'>
     {
      SidebarData?.map((prop)=>
   {  
    const {  name,child,id,hidden } = prop;
    return (!child?.length && !hidden)&& (<Item onClick={()=>{openSubmenu(id,name)}} view={clickId === id} key={id}>
   <Container.Title className='Title' togle={clickId === id}>{name}</Container.Title>
</Item>) 



}
      )
     }

      

  </Container>
  )
}
