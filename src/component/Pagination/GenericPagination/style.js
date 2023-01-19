import styled from 'styled-components';
import { ReactComponent as Left } from '../../../assets/icon/arrowLeft.svg';

export const Container = styled.div`
  // width:100%;
  height: 40px;
  display: flex;
  gap: 4px;
`;

Container.Item = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ active }) => (active ? '#74ade1' : '#d9d9d9')};
  background-color: #fff;
  color: ${({ active }) => (active ? '#74ade1' : '#000')};
  & svg {
    path {
      fill: #d9d9d9;
    }
  }
  cursor: pointer;
  :hover {
    border-color: ${({ disabled }) => !disabled && '#74ade1'};
    color: ${({ disabled }) => !disabled && '#74ade1'};
    user-select: none;
    & svg {
      path {
        fill: ${({ disabled }) => !disabled && '#74ade1'};
      }
    }
  }
  transition: all 0.2s;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
`;

export const Icon = styled.div``;

Icon.Right = styled(Left)`
  transform: rotate(180deg);
`;

Icon.Left = styled(Left)``;

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
  transition: all 0.2s;
`;

Container.Select = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  position: relative;
  user-select: none;
  :hover {
    border-color: #74ade1;
  }
`;

Container.OptionCon = styled.div`
  position: absolute;
  top: 40px;
  width: 90px;
  height: 120px;
  background-color: #fff;
  overflow-y: auto;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  border: 1px solid #d9d9d9;
  flex-direction: column;
  user-select: none;
  transition: all 0.2s;
  :hover {
    border-color: #74ade1;
  }
  &::-webkit-scrollbar {
    background-color: #f5f5f5;
    display: none;
  }

  &::-webkit-scrollbar {
    width: 4px;
    display: none;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
    background-color: #555;
  }
`;

Container.Option = styled.div`
  width: 90px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: rgb(245, 245, 245);
  }
`;