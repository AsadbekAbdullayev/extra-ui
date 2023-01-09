import React,{useState} from 'react'
import {Container} from './style.js';
const Card = ({
  title,
  component,
  margin,
  desc,
}) => {
  const [togle,setTogle] = useState(false);
  return (
    <Container>
      <Container.Flex1>
      {component}
      </Container.Flex1>

      <Container.Flex>
<Container.Line1/>
<Container.Flex3><Container.Title>{title}</Container.Title></Container.Flex3>
<Container.Line2/>

      </Container.Flex>


      <Container.Flex1>
        <Container.Desc>{desc}</Container.Desc>
      </Container.Flex1>

<Container.Footer >

<Container.Desc onClick={()=>setTogle(!togle)} style={{cursor:'pointer'}}>{'ICON'} </Container.Desc>
<Container.Desc>{togle && 'Import Code YourComponent'}</Container.Desc>

</Container.Footer>

    </Container>
  )
}

export default Card