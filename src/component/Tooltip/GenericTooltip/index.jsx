import React, { useState } from 'react';
import { Container } from './style';
const GenericTooltip = ({ position, children, title, bg }) => {
  const [hover, setHover] = useState(false);
  const onMouseOver = () => {
    setTimeout(() => {
      setHover(true);
    }, 500);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <Container
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      hover={hover}
      position={position}
      bg={bg}
    >
      <Container.TooltipContainer
        className='tooltip'
        hover={hover}
        position={position}
        bg={bg}
      >
        {title}
      </Container.TooltipContainer>
      <Container.TooltipArrow
        className='tooltip'
        hover={hover}
        position={position}
        bg={bg}
      />
      {children}
    </Container>
  );
};

export default GenericTooltip;
