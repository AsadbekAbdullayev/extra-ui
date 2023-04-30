import React, { useState } from 'react';
import { Container } from './style';
import { NexrIcon } from '../../Generics/GenericIcons';
const GenericCollapse = ({ height, panelContent, headerContent, disabled }) => {
  const [active, setActive] = useState(false);
  const clickHeader = () => {
    !disabled && setActive(!active);
  };
  return (
    <Container height={height}>
      <Container.Header
        onClick={clickHeader}
        active={active}
        height={height}
        disabled={disabled}
      >
        <Container.Icon active={active}>
          <NexrIcon
            style={{ margin: '0 5px 0 0' }}
            width='25px'
            height='25px'
            color='#202020'
          />
        </Container.Icon>
        {headerContent}
      </Container.Header>

      <Container.Panel active={active} height={height}>
        <div>{panelContent}</div>
      </Container.Panel>
    </Container>
  );
};

export default GenericCollapse;
