import React, { useEffect, useState } from 'react'
import { Container,Item } from './style'
import {SidebarData} from '../../utils/sidebsrView';
import {
  useNavigate
} from "react-router-dom";
export default function SidebarComponent() {
let navigate = useNavigate();
// const pathname = window.location.pathname
// const [togle,setTogle] = useState(false);
// const [togleChild,setTogleChild] = useState(false);
// const callFunc = (name) =>{
//   setTogle(!togle);
//   setTogleChild(false);
// };

const [clickId,setClickId] = useState(false);
const openSubmenu =(id,name)=>{
  navigate(name)
if(id === clickId){
  setClickId(false);
}else{
  setClickId(id);
}

};
const pathname = window.location.pathname

useEffect(()=>{
  (pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog') && setClickId(null)
},[pathname])
  return (
    <Container viewed={(pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog')} className='style-1'>
     {
      SidebarData?.map((prop)=>
   {  
    const { path, name,child,id,hidden } = prop;
    return (!child?.length && !hidden)&& (<Item onClick={()=>{openSubmenu(id,name)}} view={path === pathname} key={id}>
   <Container.Title className='Title' togle={path === pathname}>{name}</Container.Title>
</Item>) 

}
      )
     }
      
  </Container>
  )
}
