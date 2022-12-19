import React, { useState } from 'react'
import { Container,Icon,Item } from './style'
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import { ReactComponent as Zak } from '../../assets/icon/zakaz.svg';
import { ReactComponent as Tov } from '../../assets/icon/tovar.svg';
import { ReactComponent as Star } from '../../assets/icon/Star.svg';
import { ReactComponent as Kor } from '../../assets/icon/kor.svg';
import {SidebarData} from '../../utils/sidebsrView';
import {
  useNavigate
} from "react-router-dom";
export default function SidebarComponent() {

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
    <Container  width={togle ? '100px' : '263px'} className='style-1'>
     {
      SidebarData?.map((prop)=>
   {  
    const {  name,child,id } = prop;
    return !child?.length ? (<Item onClick={()=>{openSubmenu(id,name)}} view={clickId === id}>
   <Container.Title className='Title' togle={togle}>{name}</Container.Title>
</Item>) 


: (<Item.Child  onClick={()=>openSubmenu(id,name)} view={clickId === id} style={{border:'1px solid #fff'}}>
<Item.Child>   <Container.Title className='Title'  togle={togle}>{name}</Container.Title>  <Icon.Arrow togle={clickId === id} /></Item.Child>
  { 
    child?.map(({name})=>{
      return(
        <Item.ChildContainer view={clickId === id} >{ clickId === id && <Container.Title className='Title' togle={togle} style={{margin:'0  85px'}}>{name}</Container.Title>} </Item.ChildContainer>
      )
    })
    
  }
</Item.Child>);

}
      )
     }

      

  </Container>
  )
}
