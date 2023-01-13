import React, { useState, useRef, useEffect } from 'react';
import { Container, Icon, Selection } from './style';
const Dropdown = ({ onClick, width, margin, icon, disabled }) => {
  let options = [
    {
      id: 1,
      name: 'Value 1',
      value: 'value1',
    },
    {
      id: 2,
      name: 'Value 2',
      value: 'value2',
    },
    {
      id: 3,
      name: 'Value 3',
      value: 'value3',
    },
  ];

  const selectRef = useRef('');
  const [open, setOpen] = useState(false);
  useEffect(() => selectRef.current.focus(), []);
  const onClick2 = (e) => {
    onClick && onClick();
    setOpen(!open);
  };

  const onBlur = () => {
    console.log('hey');
  };

  const onClickSelection = (e) => {
    e.stopPropagation();
  };

  return (
    <Container
      onClick={(e) => onClick2(e)}
      width={width}
      margin={margin}
      disabled={disabled}
    >
      Dropdown
      <Selection
        open={open}
        onClick={(e) => onClickSelection(e)}
        tabIndex={0}
        onBlur={onBlur}
        ref={selectRef}
      >
        <Selection.Item>Item 1</Selection.Item>
        <Selection.Item>Item 2</Selection.Item>
        <Selection.Item>Item 3</Selection.Item>
      </Selection>
      <Container.Icon className='IconCon' icon={icon}>
        {icon ? (
          icon
        ) : open ? (
          <Icon.Down open={open} />
        ) : (
          <Icon.Down open={open} />
        )}
      </Container.Icon>
    </Container>
  );
};

export default Dropdown;
