import React, { useState, useRef } from 'react';
import { Container, Icon, StyledCheckbox } from './style';
import Button from '../../Button/GenericButton';
import { useEffect } from 'react';
const GenericCheckbox = ({ width, height, onClick, title,disabled,checked ,bgColor}) => {
  const [active, setActive] = useState(false);
  const [check, setCheck] = useState(checked);
  const [mouse, setMouse] = useState(false);
  const checkboxRef = useRef();
  useEffect(()=>setCheck(checked),[checked])
  const onClick1 = () => {
    if(!disabled){
    onClick && onClick();
      setCheck(!check);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 500);}
  };
  return (
    <Container
      onClick={onClick1}
      onMouseOver={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      disabled={disabled}
    >
      <StyledCheckbox active={active} 
      hover={mouse} checked={check} 
      width={width} height={height} 
      disabled={disabled}
      bgcolor={bgColor}
      >
        {check && (
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        )}
        <Container.Checkbox ref={checkboxRef} checked={check} />
      </StyledCheckbox>
      {title && title}
    </Container>
  );
};

export default GenericCheckbox;
