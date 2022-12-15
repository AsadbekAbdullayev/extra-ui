import React, { useState } from 'react'
import { Container,Icon,Item } from './style'
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import { ReactComponent as Zak } from '../../assets/icon/zakaz.svg';
import { ReactComponent as Tov } from '../../assets/icon/tovar.svg';
import { ReactComponent as Star } from '../../assets/icon/Star.svg';
import { ReactComponent as Kor } from '../../assets/icon/kor.svg';

import {
  useNavigate
} from "react-router-dom";
export default function SidebarComponent(props) {
const SidebarData = [
  {
    id:1,
    path:'/Главная',
    name:'Главная',
    Icons:Home,
    child:[],
  },
  {
    id:2,
    path:'/Заказы',
    name:'Заказы',
    Icons:Zak,
    child:[],
  },
  {
    id:3,
    path:'/Товары',
    name:'Товары',
    Icons:Tov,
    child:[],
  },
  {
    id:5,
    path:'/Оформить',
    name:'Оформить заказ',
    Icons:Kor,
    child:[
      {
        id:15,
        path:'/Оформить child',
        name:'child 1',
        // Icons:Kor,
        child:[
        ],
      },
      {
        id:15,
        path:'/Оформить child',
        name:'child 2',
        // Icons:Kor,
        child:[
        ],
      },
      {
        id:15,
        path:'/Оформить child',
        name:'child 3',
        // Icons:Kor,
        child:[
        ],
      },
    ],
  },
  {
    id:4,
    path:'/Отзывы',
    name:'Отзывы',
    Icons:Star,
    child:[],
  },
  
];

let navigate = useNavigate();
const pathname = window.location.pathname
const [togle,setTogle] = useState(false);
const [togleChild,setTogleChild] = useState(false);
const [togleIcon,setTogleIcon] = useState(false);
const callFunc = () =>{
  setTogle(!togle);
  setTogleChild(false);
  setTogleIcon(!togleIcon);
};
  return (
    <Container  width={togle ? '100px' : '263px'}>
     {
      SidebarData?.map((prop)=>
   {  
    const { Icons, name,child } = prop;
    return !child?.length ? (<Item onClick={()=>{name == 'Главная' && callFunc()}}>
  <Icons style={{margin:'0  37px'}} className='iconSidebar'/> <Container.Title className='Title' togle={togle}>{name}</Container.Title>
</Item>) : (<Item.Child  onClick={()=>setTogleChild(!togleChild)} view={togleChild}>
  <Icons style={{margin:'0  37px'}} className='iconSidebar'/> <Container.Title className='Title'  togle={togle}>{name}</Container.Title>  <Icon.Arrow togle={togleChild} icon={togleIcon}/>
  { 
    <Item.ChildContainer view={togleChild}> {
    child?.map(({name})=>{
      return togleChild && (
 <Container.Title className='Title' togle={togle} style={{margin:'10px 80px'}}>{name}</Container.Title> 

      )

    })}
    </Item.ChildContainer>
  }
</Item.Child>);

}
      )
     }

      

  </Container>
  )
}
