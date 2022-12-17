import React, { useState } from 'react'
import { Container,Icon,Item } from './style'
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import { ReactComponent as Zak } from '../../assets/icon/zakaz.svg';
import { ReactComponent as Tov } from '../../assets/icon/tovar.svg';
import { ReactComponent as Star } from '../../assets/icon/Star.svg';
import { ReactComponent as Kor } from '../../assets/icon/kor.svg';

// import {
//   useNavigate
// } from "react-router-dom";
export default function SidebarComponent(props) {
const SidebarData = [
  {
    id:1,
    path:'/Button',
    name:'Button',
    child:[],
  },
  {
    id:2,
    path:'/Dropdown',
    name:'Dropdown',
    child:[
      {
        id:15,
        path:'/Оформить child',
        name:'menu 1',
        menu:[
        ],
      },
      {
        id:15,
        path:'/Оформить menu',
        name:'menu 2',
        menu:[
        ],
      },
      {
        id:15,
        path:'/Оформить menu',
        name:'menu 3',
        child:[
        ],
      },
      {
        id:15,
        path:'/Оформить child',
        name:'menu 1',
        menu:[
        ],
      },
      {
        id:15,
        path:'/Оформить menu',
        name:'menu 2',
        menu:[
        ],
      },
      {
        id:15,
        path:'/Оформить menu',
        name:'menu 3',
        child:[
        ],
      },
    ],
  },
  {
    id:3,
    path:'/Menu',
    name:'Menu',
    child:[{
      id:15,
      path:'/Оформить menu',
      name:'menu 3',
      child:[
      ],
    },],
  },
  {
    id:5,
    path:'/Pagination',
    name:'Pagination',
    child:[
      {
        id:15,
        path:'/Оформить child',
        name:'child 1',
        child:[
        ],
      },
      {
        id:15,
        path:'/Оформить child',
        name:'child 2',
        child:[
        ],
      },
      {
        id:15,
        path:'/Оформить child',
        name:'child 3',
        child:[
        ],
      },
    ],
  },
  {
    id:4,
    path:'/Steps',
    name:'Steps',
    child:[],
  },
  {
    id:5,
    path:'/AutoComplete',
    name:'AutoComplete',
    child:[],
  },
  {
    id:6,
    path:'/Checkbox',
    name:'Checkbox',
    child:[],
  },
  {
    id:7,
    path:'/DatePicker',
    name:'DatePicker',
    child:[],
  },
  {
    id:8,
    path:'/Form',
    name:'Form',
    child:[],
  },
  {
    id:9,
    path:'/Input',
    name:'Input',
    child:[],
  },
  {
    id:10,
    path:'/Radio',
    name:'Radio',
    child:[],
  },
  {
    id:11,
    path:'/Rate',
    name:'Rate',
    child:[],
  },
  {
    id:12,
    path:'/Select',
    name:'Select',
    child:[],
  },
  {
    id:13,
    path:'/Switch',
    name:'Switch',
    child:[],
  },
  {
    id:14,
    path:'/Transfer',
    name:'Transfer',
    child:[],
  },
  {
    id:15,
    path:'/Upload',
    name:'Upload',
    child:[],
  },
  {
    id:16,
    path:'/Badge',
    name:'Badge',
    child:[],
  },
  {
    id:17,
    path:'/Card',
    name:'Card',
    child:[],
  },
  {
    id:18,
    path:'/Collapse',
    name:'Collapse',
    child:[],
  },
  {
    id:19,
    path:'/Popover',
    name:'Popover',
    child:[],
  },
  {
    id:20,
    path:'/Segmented',
    name:'Segmented',
    child:[],
  },
  {
    id:21,
    path:'/Table',
    name:'Table',
    child:[],
  },
  {
    id:22,
    path:'/Tooltip',
    name:'Tooltip',
    child:[],
  },
  {
    id:23,
    path:'/Alert',
    name:'Alert',
    child:[],
  },
  {
    id:24,
    path:'/Message',
    name:'Message',
    child:[],
  },
  {
    id:25,
    path:'/Notification',
    name:'Notification',
    child:[],
  },
  {
    id:26,
    path:'/Progress',
    name:'Progress',
    child:[],
  },
  {
    id:27,
    path:'/Modal',
    name:'Modal',
    child:[],
  },
];

// let navigate = useNavigate();
// const pathname = window.location.pathname
const [togle,setTogle] = useState(false);
const [togleChild,setTogleChild] = useState(false);
const callFunc = () =>{
  setTogle(!togle);
  setTogleChild(false);
};

const [clickId,setClickId] = useState(false);
const openSubmenu =(id)=>{
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
    const { Icons, name,child,id } = prop;
    return !child?.length ? (<Item onClick={()=>{name === 'Главная' && callFunc()}}>
   <Container.Title className='Title' togle={togle}>{name}</Container.Title>
</Item>) 


: (<Item.Child  onClick={()=>openSubmenu(id)} view={clickId === id} style={{border:'1px solid #fff'}}>
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
