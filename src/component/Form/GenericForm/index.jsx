import React, { useState } from 'react';
import { Wrap } from './style';
// import { NexrIcon } from '../../Generics/GenericIcons';
import Button from '../../Button/GenericButton';
import Input from '../../Input/GenericInput';
import { WarningIcon } from '../../Generics/GenericIcons';
const GenericSteps = ({ width, height }) => {
  const [state, setState] = useState({
    first: '',
    last: '',
    email: '',
    number: '',
  });

  const [danger, setDanger] = useState({
    first: null,
    last: null,
    email: null,
    number: null,
  });
  const [danger1, setDanger1] = useState({
    first: true,
    last: true,
    email: true,
    number: true,
  });

  const onChange = (e) => {
    const { name, value } = e?.target;
    if (value) {
      setState({
        ...state,
        [name]: value,
      });

      setDanger1({
        ...danger1,
        [name]: null,
      });
      setDanger({
        ...danger,
        [name]: null,
      });
    } else {
      setDanger1({
        ...danger1,
        [name]: true,
      });
    }
  };

  const onSave = () => {
    setDanger(danger1);
  };

  const styleInput = { position: 'absolute', top: '28px', right: '8px' };

  return (
    <Wrap>
      <Wrap.Column>
        <Wrap.Flex>
          <Wrap.Input>
            <Input
              header='First Name'
              placeholder='first..'
              name='first'
              value={state?.first}
              danger={danger?.first}
              onChange={onChange}
            />
            {danger?.first && (
              <WarningIcon
                height={'20px'}
                width={'20px'}
                color='red'
                style={styleInput}
              />
            )}
            {danger?.first && <Wrap.Text>First name required !</Wrap.Text>}
          </Wrap.Input>

          <Wrap.Input>
            <Input
              header='Last Name'
              placeholder='last Name..'
              name='last'
              value={state?.last}
              danger={danger?.last}
              onChange={onChange}
            />
            {danger?.last && (
              <WarningIcon
                height={'20px'}
                width={'20px'}
                color='red'
                style={styleInput}
              />
            )}
            {danger?.last && <Wrap.Text>Last name required !</Wrap.Text>}
          </Wrap.Input>

          <Wrap.Input>
            <Input
              header='Email'
              placeholder='email..'
              name='email'
              value={state?.email}
              danger={danger?.email}
              onChange={onChange}
            />
            {danger?.email && <Wrap.Text>Email required !</Wrap.Text>}

            {danger?.email && (
              <WarningIcon
                height={'20px'}
                width={'20px'}
                color='red'
                style={styleInput}
              />
            )}
          </Wrap.Input>

          <Wrap.Input>
            <Input
              header='Phone Number'
              placeholder='number..'
              name='number'
              value={state?.number}
              danger={danger?.number}
              onChange={onChange}
            />
            {danger?.number && <Wrap.Text>Phone Number required !</Wrap.Text>}

            {danger?.number && (
              <WarningIcon
                height={'20px'}
                width={'20px'}
                color='red'
                style={styleInput}
              />
            )}
          </Wrap.Input>
        </Wrap.Flex>
        <Button title='Save' type='Primary' onClick={onSave} />
      </Wrap.Column>
    </Wrap>
  );
};

export default GenericSteps;
