import React, { useState, useRef } from 'react';
import { Container, Icon, Selection } from './style';
const Dropdown = ({ onClick, width, margin, icon, disabled }) => {
  let options = [
    {
      id: 1,
      name: 'Option 1',
      value: 'value1',
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'value2',
    },
    {
      id: 3,
      name: 'Option 3',
      value: 'value3',
    },
  ];

  const selectRef = useRef('');
  const [open, setOpen] = useState(false);
  const onClick2 = (e) => {
    onClick && onClick();
    selectRef.current.focus();
    setOpen(!open);
  };

  const onBlur = () => {
    setOpen(false);
  };
  const onClickSelection = (e) => {
    e.stopPropagation();
  };
  const [val, setVal] = useState('');
  const [select, setSelect] = useState('');
  const onClickItem = (value, id) => {
    setVal(value);
    setOpen(false);
    setSelect(id);
  };
  return (
    <Container
      onClick={(e) => !disabled && onClick2(e)}
      width={width}
      margin={margin}
      disabled={disabled}
    >
      {val ? val : 'Select'}
      <Selection
        open={open}
        onClick={(e) => onClickSelection(e)}
        tabIndex={0}
        onBlur={onBlur}
        ref={selectRef}
        count={options.length}
        onMouseLeave={() => setOpen(false)}
      >
        {options.map(({ name, id }) => {
          return (
            <Selection.Item
              open={open}
              key={id}
              onClick={() => onClickItem(name, id)}
              active={select === id}
            >
              {name}
            </Selection.Item>
          );
        })}
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

// import { PlusIcon } from '@styledIcons';
// import { EditIcon, DeleteIcon } from '@styledIcons';
