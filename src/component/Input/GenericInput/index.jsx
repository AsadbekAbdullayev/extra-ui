import React, { useState } from 'react';
import { Container, Icon } from './style';

const GenericInput = ({
  suffix,
  prefix,
  placeholder,
  danger,
  disabled,
  height,
  width,
  value,
  padding,
  margin,
}) => {
  const [mouse, setMouse] = useState(false);
  const [blur, setBlur] = useState(false);
  const [val, setVal] = useState(value);
  return (
    <Container
      width={width}
      height={height}
      onMouseOver={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      onFocus={() => setBlur(true)}
      onBlur={() => setBlur(false)}
      active={mouse ? mouse : blur}
      focus={blur}
      padding={padding}
    >
      {suffix && (
        <Icon height={height} margin={margin}>
          {suffix}
        </Icon>
      )}
      <Container.Input
        value={val}
        onChange={(e) => setVal(e?.target?.value)}
        placeholder={placeholder}
        height={height}
        onFocus={() => setBlur(true)}
        onBlur={() => setBlur(false)}
        active={mouse ? mouse : blur}
      />
      {prefix && (
        <Icon height={height} margin={margin}>
          {prefix}
        </Icon>
      )}
    </Container>
  );
};

export default GenericInput;
