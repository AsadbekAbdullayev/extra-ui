import React,{useState} from 'react'
import {Wrap,Icon} from './style';
import {
  useNavigate
} from "react-router-dom";
// https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg
const Navbar = () => {
let navigate = useNavigate();

let items = [
  {
    id:1,
    name:'Components',
    path:'/Components',
  },
  {
    id:2,
    name:'Docs',
    path:'/Docs',
  },
  {
    id:3,
    name:'Resources',
    path:'/Resources',
  },
  {
    id:4,
    name:'Blog',
    path:'/Blog',
  },
]
const [clickId,setClickId] = useState(false);
const openSubmenu =(id,name)=>{
  navigate(name)
  setClickId(name);
};
  return (
    <div>
      <Wrap>
      <Wrap.LogoContainer>
        <Wrap.Logo src={'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'}/>
        <Wrap.LogoText>
          extra-ui
        </Wrap.LogoText>
      </Wrap.LogoContainer>

<Icon.Container>
       <div style={{display:'flex',height:'40px',alignItems:'center'}}>
        {
          items?.map(({id,name},i)=><Wrap.Text key={i} onClick={()=>{openSubmenu(id,name)}} active={name === clickId}>
          {name}
         </Wrap.Text>)
        }
       </div>




<a href="https://www.linkedin.com/in/asadbek-abdullayev-691827235/" style={{margin:'0 5px'}}>

        <Icon.Linkedin/>
</a>
<a href="https://t.me/Asadbek_2778" style={{margin:'0 5px'}}>
       <Icon.Telegram/>
</a>
<a href="https://github.com/AsadbekAbdullayev" style={{margin:'0 30px 0 5px'}}>
        <Icon.Git/>
</a>
</Icon.Container>



    </Wrap>
    <div style={{height:'15px'}}></div>
    </div>
  )
}

export default Navbar