import styled, { keyframes } from 'styled-components';

import { ReactComponent as Loading } from '../../../assets/icon/loading.svg';

const getBorder = ({ type, Danger, Ghost, loading, disabled }) => {
  if (type === 'Dashed') {
    if (Danger) {
      return '1px dashed #ff4d4f';
    } else if (Ghost) {
      return '1px dashed #fff';
    } else {
      return '1px dashed #d9d9d9';
    }
  } else if (type === 'Default') {
    if (Danger) {
      return '1px solid #ff4d4f';
    } else if (Ghost) {
      return '1px solid #fff';
    } else {
      return '1px solid #d9d9d9';
    }
  } else if (type === 'Primary') {
    if (disabled) {
      return '1px solid #b8b8b8';
    }
    if (loading) {
      return '1px solid #74ade1';
    } else if (Danger) {
      return '1px solid #ff4d4f';
    } else if (Ghost) {
      return '1px solid #1890ff';
    } else {
      return '1px solid #1890ff';
    }
  } else if (Ghost) {
    return '1px solid #fff';
  } else {
    return 'none';
  }
};

const getColor = ({ type, Danger, Ghost, disabled }) => {
  if (type === 'Text' && disabled) {
    return '#b8b8b8';
  }
  if (type === 'Link' && disabled) {
    return '#b8b8b8';
  }

  if (type === 'Link') {
    if (disabled) {
      return '#b8b8b8';
    }
    if (Danger) {
    } else if (Ghost) {
      return '#fff';
    } else {
      return '#1890ff';
    }
  } else if (type === 'Primary') {
    if (disabled) {
      return '#b8b8b8';
    }
    if (Danger) {
      return '#fff';
    } else if (Ghost) {
      return '#1890ff';
    } else {
      return '#fff';
    }
  } else if (type === 'Dashed' && disabled) {
    return '#b8b8b8';
  } else if (Danger) {
    return '#ff4d4f';
  } else if (type === 'Default') {
    if (disabled) {
      return '#b8b8b8';
    }
    if (Danger) {
      return '#ff7875';
    } else if (Ghost) {
      return '#fff';
    } else {
      return 'rgba(0,0,0,.85)';
    }
  } else if (Ghost) {
    return '#fff';
  } else {
    return 'rgba(0,0,0,.85)';
  }
};

export const Container = styled.div`
  color: ${getColor};
  border-radius: ${({ shape }) => {
    if (shape === 'circle') {
      return '50%';
    } else if (shape === 'round ') {
      return '17px';
    } else {
      return '6px';
    }
  }};
  border: ${getBorder};
  @keyframes pulse {
    0% {
      box-shadow: ${({ Danger }) => (Danger ? '0 0 0' : '0 0 0')};
    }
    70% {
      box-shadow: 0 0 0 5px rgba(204, 169, 44, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }

  animation: ${({ type, activeButton }) =>
    type !== 'Link' && type !== 'Text' && activeButton && 'pulse .7s infinite'};

  background: ${({ type, loading, Danger, disabled }) => {
    if (type === 'Primary' && Danger) {
      return '#ff4d4f';
    } else if (type === 'Primary' && disabled) {
      return '#f5f5f5';
    } else if (type === 'Dashed' && disabled) {
      return '#f5f5f5';
    } else if (type === 'Default' && disabled) {
      return '#f5f5f5';
    } else if (type === 'Primary' && loading) {
      return '#74ade1';
    } else if (type === 'Primary') {
      return '#1677FF';
    } else {
      return null;
    }
  }};

  & svg {
    transition: fill 0.3s;
    /* d9363e */
  }
  :hover {
    background-color: ${({ type, Danger, disabled }) => {
      if (type === 'Primary' && Danger) {
        return '#ff7875';
      } else if (type === 'Primary' && !disabled) {
        return '#74ade1';
      } else if (type === 'Text' && !disabled) {
        if (Danger) {
          return '#fcd5d4';
        } else {
          return '#e6ebea';
        }
      } else {
        return null;
      }
    }};

    & svg {
      path {
        fill: ${({ type }) => {
          if (type === 'Default') {
            return '#1677FF';
          } else {
            return null;
          }
        }};
      }
    }

    opacity: ${({ type, Danger, disabled }) => {
      if ((type === 'Link' || Danger) && !disabled) {
        return '0.7';
      }
    }};
    color: ${({ type, Danger, disabled }) => {
      if (Danger && type === 'Dashed') {
        return '#ff7875';
      }
      if (Danger && type === 'Default') {
        return '#ff7875';
      }
      if (type === 'Default' && !disabled) {
        return '#74ade1';
      } else if (type === 'Dashed' && !disabled) {
        return '#74ade1';
      } else {
        return null;
      }
    }};

    border-color: ${({ type, Danger, disabled }) => {
      if (Danger && type === 'Dashed') {
        return '#ff7875';
      }
      if (Danger && type === 'Default') {
        return '#ff7875';
      }
      if (type === 'Default' && !disabled) {
        return '#1677FF';
      } else if (type === 'Dashed' && !disabled) {
        return '#1677FF';
      } else if (type === 'Primary' && !disabled) {
        if (Danger) {
          return '#ff7875';
        } else {
          return '#74ade1';
        }
      } else {
        return null;
      }
    }};
  }

  :active {
    background-color: ${({ type, Danger, disabled }) => {
      if (type === 'Primary' && !disabled) {
        if (Danger) {
          return '#d9363e';
        } else {
          return '#1677FF';
        }
      } else {
        return null;
      }
    }};

    color: ${({ type, Danger, disabled }) => {
      if (Danger && type === 'Dashed') {
        return '#ff7875';
      }
      if (Danger && type === 'Default') {
        return '#ff7875';
      }

      if (type === 'Default' && !disabled) {
        return '#1677FF';
      } else if (type === 'Dashed' && !disabled) {
        return '#1677FF';
      } else {
        return null;
      }
    }};

    border-color: ${({ type, Danger, disabled }) => {
      if (Danger && type === 'Dashed') {
        return '#ff7875';
      }
      if (Danger && type === 'Default') {
        return '#ff7875';
      }

      if (type === 'Default' && !disabled) {
        return '#1677FF';
      } else if (type === 'Dashed' && !disabled) {
        return '#1677FF';
      } else {
        return null;
      }
    }};

    opacity: ${({ type, Danger, disabled }) => {
      if ((type === 'Link' || Danger) && !disabled) {
        return '1';
      }
    }};
  }

  /* height:${({ height }) => (height ? height : '32px')}; */

  height: ${({ size }) => {
    if (size === 'Small') {
      return '24px';
    } else if (size === 'Large') {
      return '40px';
    } else {
      return '32px';
    }
  }};

  padding: ${({ size }) => {
    if (size === 'Small') {
      return '0 7px 0 7px';
    } else if (size === 'Large') {
      return '7px ';
    } else {
      return '7px ';
    }
  }};

  width: ${({ width }) => (width ? width : 'fit-content')};
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : '5px 10px 5px 0')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s;
  user-select: none;
`;

Container.Title = styled.div`
  font-weight: 500;
  margin: ${({ icon, loading }) => (icon || loading) && '0 0 0 8px'};

  font-size: ${({ size }) => {
    if (size === 'Small') {
      return '14px';
    } else if (size === 'Large') {
      return '16px';
    }
  }};

  line-height: ${({ size }) => {
    if (size === 'Small') {
      return '22px';
    } else if (size === 'Large') {
      return '25px';
    } else if (size === 'Large') {
      return '22px';
    }
  }};
`;

export const Icon = styled.div``;

const flash = keyframes`
  from {
      transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);

      }
`;

Container.Loading = styled.div`
  width: 17px;
  height: 17px;
  background-color: inherit;
  position: relative;
  animation: ${flash} infinite 1.5s linear;
`;

Icon.Loading = styled(Loading)`
  width: 17px;
  height: 17px;
  margin: 0 8px 0 0;
  path {
    fill: #fff;
  }
`;
