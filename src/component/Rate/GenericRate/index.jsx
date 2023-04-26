import React, { useState } from 'react';
import { Container } from './style';
import { StarIcon } from '../../Generics/GenericIcons';
// import Button from '../../Button/GenericButton';
const GenericRate = () => {
  // hover
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [size, setSize] = useState(false);
// click
const [click1, setClick1] = useState(false);
const [click2, setClick2] = useState(false);
const [click3, setClick3] = useState(false);
const [click4, setClick4] = useState(false);

const onClick = (number) => {
  if (number === 1) {
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(false)
  } else if(number ===2){
    setClick1(true)

    setClick2(false)
    setClick3(false)
    setClick4(false)
  }
  else if(number ===3){
    setClick2(true)
    setClick3(false)
    setClick4(false)
  }else if(number ===4){
    setClick2(true)
    setClick3(true)
    setClick4(false)
  }else if(number ===5){
    setClick1(true)
    setClick2(true)
    setClick3(true)
    setClick4(true)
  }
 
};
 

  const onHover = (number, leave) => {
    if (number === 2) {
      if (leave) {
        setHover2(false);
        setSize(false);
      } else {
        setHover2(true);
        setSize('icon1');
      }
    } else if (number === 3) {
      if (leave) {
        setHover2(false);
        setSize(false);
        setHover3(false);
      } else {
        setHover2(true);
        setSize('icon2');
        setHover3(true);
      }
    } else if (number === 4) {
      if (leave) {
        setHover2(false);
        setHover3(false);
        setSize(false);
        setHover4(false);
      } else {
        setHover2(true);
        setHover3(true);
        setHover4(true);
        setSize('icon3');
      }
    } else if (number === 5) {
      if (leave) {
        setHover2(false);
        setHover3(false);
        setSize(false);
        setHover4(false);
        setHover5(false);
      } else {
        setHover2(true);
        setHover3(true);
        setHover4(true);
        setHover5(true);
        setSize('icon4');
      }
    }
  };

  return (
    <Container>
      <Container.Flex>
        <Container.Flex1>
          <StarIcon
            onMouseLeave={() => setSize(false)}
            onMouseOver={() => setSize('icon')}
            onClick={()=>onClick(1)}
            color={'#fadb14'}
            width={size === 'icon' && '27px'}
            height={size === 'icon' && '27px'}
          />
        </Container.Flex1>
        <Container.Flex1
            onClick={()=>onClick(2)}

          onMouseLeave={() => onHover(2, true)}
          onMouseOver={() => onHover(2, false)}
        >
          <StarIcon
            color={click1 ? '#fadb14' :hover2 ? '#fadb14' : '#f0f0f0'}
            width={size === 'icon1' && '27px'}
            height={size === 'icon1' && '27px'}
          />
        </Container.Flex1>

        <Container.Flex1
            onClick={()=>onClick(3)}

          onMouseLeave={() => onHover(3, true)}
          onMouseOver={() => onHover(3, false)}
        >
          <StarIcon
            color={click2 ? '#fadb14' : hover3 ? '#fadb14' : '#f0f0f0'}
            width={size === 'icon2' && '27px'}
            height={size === 'icon2' && '27px'}
          />
        </Container.Flex1>
        <Container.Flex1
            onClick={()=>onClick(4)}

          onMouseLeave={() => onHover(4, true)}
          onMouseOver={() => onHover(4, false)}
        >
          <StarIcon
            color={click3 ? '#fadb14' : hover4 ? '#fadb14' : '#f0f0f0'}
            width={size === 'icon3' && '27px'}
            height={size === 'icon3' && '27px'}
          />
        </Container.Flex1>

        <Container.Flex1
          onMouseLeave={() => onHover(5, true)}
          onMouseOver={() => onHover(5, false)}
          onClick={()=>onClick(5)}

        >
          <StarIcon
            color={click4 ? '#fadb14' : hover5 ? '#fadb14' : '#f0f0f0'}
            width={size === 'icon4' && '27px'}
            height={size === 'icon4' && '27px'}
          />
        </Container.Flex1>
      </Container.Flex>
    </Container>
  );
};

export default GenericRate;
