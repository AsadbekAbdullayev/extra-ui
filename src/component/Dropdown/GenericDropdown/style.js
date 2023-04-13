import styled from 'styled-components';
import { ReactComponent as Up } from '../../../assets/icon/arrowUp.svg';
import { ReactComponent as Down } from '../../../assets/icon/arrowDown.svg';

export const Container = styled.div`
  width: ${({ width }) => width && width};
  height: ${({ height }) => (height ? height : '40px')};
  position: relative;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  padding: 0 10px;
  transition: all 0.3s;
  margin: ${({ margin }) => (margin ? margin : '0 0 15px 0')};
  user-select: none;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  color: ${({ disabled }) => disabled && '#d9d9d9'};
  path {
    fill: ${({ disabled }) => disabled && '#d9d9d9'};
  }
  :hover {
    border-color: ${({ disabled }) => !disabled && '#74ade1'};
    & .IconCon {
      border-color: ${({ disabled }) => !disabled && '#74ade1'};
    }
    & svg {
      transition: all 0.3s;
      path {
        fill: ${({ disabled }) => !disabled && '#74ade1'};
      }
    }
  }

  :active {
    border-color: ${({ disabled }) => !disabled && '#d9d9d9'};
    border-color: ${({ disabled }) => !disabled && '#74ade1'};
    .IconCon {
      border-color: ${({ disabled }) => !disabled && '#74ade1'};
    }
  }
`;

export const Icon = styled.div``;

Icon.Up = styled(Up)``;
Icon.Down = styled(Down)`
  transition: all 0.3s;
  transform: ${({ open }) => open && 'rotate(180deg)'};
`;

Container.Icon = styled.div`
  width: 40px;
  height: 100%;
  border: ${({ icon }) => icon && '1px solid #d9d9d9'};
  /* border-radius: ${({ icon }) => icon && '0 6px 6px 0'}; */
  position: absolute;
  right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

export const Selection = styled.div`
  transition: all 0.3s;
  max-height: ${({ open }) => (open ? '150px' : '0px')};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: all 3s;
  background-color: #fff;
  position: absolute;
  user-select: none;
  flex-direction: column;
  width: 100%;
  z-index: 99;
  top: 45px;
  left: -1px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow-y: auto;
`;

Selection.Item = styled.div`
  height: ${({ open }) => (open ? '40px' : '0px')};
  transition: height 0.3s;
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 99;

  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  background-color: ${({ active }) => active && '#f0f0f0'};
  font-weight: ${({ active }) => active && '650'};

  :hover {
    background-color: #f0f0f0;
    font-weight: 650;
  }
`;
Selection.Item1 = styled.input`
  height: 40px;
  user-select: none;
`;
