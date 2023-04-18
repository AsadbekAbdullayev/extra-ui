import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '400px')};
  height: ${({ height }) => (height ? height : '32px')};
  border: 1px solid
    ${({ active, danger, success }) =>
      danger ? '#ff2425' : success ? '#40a142' : active ? '#1893FF' : '#ccc'};
  border-radius: 4px;
  transition: all 0.3s;
  outline: none;
  margin: 0 5px 15px 5px;
  display: flex;
  padding: ${({ padding }) => (padding ? padding : '0 1px')};

  align-items: center;

  box-shadow: ${({ focus, danger, success }) =>
    focus &&
    (danger
      ? '0px 0px 1px 1px rgba(255, 36, 37, 0.4)'
      : success
      ? '0px 0px 1px 1px rgba(168, 240, 200, 0.54)'
      : '0px 0px 1px 1px rgba(24, 147, 255, 0.54)')};
`;

Container.Input = styled.input`
  width: 100%;
  height: ${({ height }) => (height ? height : '32px')};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  border-top: 1px solid
    ${({ active, danger, success }) =>
      danger ? '#ff2425' : success ? '#40a142' : active ? '#1893FF' : '#ccc'};
  border-bottom: 1px solid
    ${({ active, danger, success }) =>
      danger ? '#ff2425' : success ? '#40a142' : active ? '#1893FF' : '#ccc'};
  transition: all 0.3s;
  padding: 0 4px;
  color: ${({ color }) => color && color};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ placeholderColor }) => placeholderColor && placeholderColor};
  }
`;
export const Icon = styled.div`
  height: ${({ height }) => (height ? height : '32px')};
  margin: ${({ margin }) => (margin ? margin : '0 5px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
