import React from 'react'
import {Wrap,Icon} from './style';
// https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg
const Navbar = () => {
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
         <Wrap.LogoText mini>
         Asadbek Abdullayev
        </Wrap.LogoText>
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
    <div style={{height:'25px'}}></div>
    </div>
  )
}

export default Navbar