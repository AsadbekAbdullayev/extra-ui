import React, { useState, useRef } from 'react';
import { Container, Icon, StyledCheckbox } from './style';
import Button from '../../Button/GenericButton';
const GenericCheckbox = ({ width, height, onClick, title }) => {
  const [active, setActive] = useState(false);
  const [check, setCheck] = useState(false);
  const [mouse, setMouse] = useState(false);
  const checkboxRef = useRef();
  const onClick1 = () => {
    onClick && onClick();
    setCheck(!check);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 500);
  };

  return (
    <Container
      onClick={onClick1}
      onMouseOver={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      <StyledCheckbox active={active} hover={mouse}>
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
