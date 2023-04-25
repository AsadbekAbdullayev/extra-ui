import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Icon } from './style';

const GenericInput = ({
  suffix,
  prefix,
  placeholder,
  danger,
  disabled,
  success,
  height,
  width,
  value,
  padding,
  margin,
  color,
  placeholderColor,
  header,
  type,
  onChange,name,onBlur,
}) => {
  const [mouse, setMouse] = useState(false);
  const [blur, setBlur] = useState(false);
  const [val, setVal] = useState(value);
  useEffect(()=>{setVal(value)},[value]);
  
  const onChangeFunction = (e)=>{
    onChange && onChange(e);
    setVal(e?.target?.value);

  };
  const onBlurFunction = (e)=>{
    onBlur && onBlur(e);
    setBlur(false)
  };
  return (  
    <Container.Wrap>
{
  header && header
}
    <Container
      width={width}
      height={height}
      onMouseOver={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      onFocus={() => setBlur(true)}
      onBlur={onBlurFunction}
      active={mouse ? mouse : blur}
      focus={blur}
      padding={padding}
      danger={danger}
      success={success}
    >
      {suffix && (
        <Icon height={height} margin={margin}>
          {suffix}
        </Icon>
      )}
      <Container.Input
        value={val}
        onChange={onChangeFunction}
        placeholder={placeholder}
        height={height}
        onFocus={() => setBlur(true)}
        onBlur={() => setBlur(false)}
        active={mouse ? mouse : blur}
        danger={danger}
        success={success}
        color={color}
        placeholderColor={placeholderColor}
        type={type}
        name={name}
      />
      {prefix && (
        <Icon height={height} margin={margin}>
          {prefix}
        </Icon>
      )}
    </Container>
    </Container.Wrap>

  );
};

export default GenericInput;
