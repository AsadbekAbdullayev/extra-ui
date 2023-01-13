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
  /* border-radius:6px; */
  transition: all 0.3s;
  margin: ${({ margin }) => (margin ? margin : '0 0 15px 0')};
  user-select: none;
  :hover {
    border-color: #74ade1;
    & .IconCon {
      border-color: #74ade1;
    }
    & svg {
      transition: all 0.3s;
      path {
        fill: #74ade1;
      }
    }
  }

  :active {
    border-color: #d9d9d9;
    border-color: #74ade1;
    .IconCon {
      border-color: #74ade1;
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
  height: ${({ open }) => (open ? 'fit-content' : '0px')};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  transition: all 0.3s;
  z-index: 99;
  background-color: #fff;
  padding: 5px;
  position: absolute;
  /* border:1px solid #d9d9d9; */
  user-select: none;
  flex-direction: column;
  width: 99%;
  top: 45px;
  left: -1px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

Selection.Item = styled.div`
  height: 40px;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    background-color: #f0f0f0;
    font-weight: 650;
  }
`;
Selection.Item1 = styled.input`
  /* width:100%; */
  height: 40px;
  user-select: none;
`;
