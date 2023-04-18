import React, { useState, useRef } from 'react';
import { Container, Icon, Selection } from './style';
const Dropdown = ({
  onClick,
  width,
  margin,
  icon,
  disabled,
  options,
  title,
}) => {
  const selectRef = useRef('');
  const [open, setOpen] = useState(false);
  const onClick2 = () => {
    onClick && onClick();
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
      tabIndex={0}
      onBlur={onBlur}
    >
      {val ? val : title ? title : 'Select'}
      <Selection
        open={open}
        onClick={(e) => onClickSelection(e)}
        ref={selectRef}
      >
        {options?.length > 0 ? (
          options.map(({ name, id }) => {
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
          })
        ) : (
          <Selection.Item1 onClick={() => setOpen(false)}>
            No data
          </Selection.Item1>
        )}
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
