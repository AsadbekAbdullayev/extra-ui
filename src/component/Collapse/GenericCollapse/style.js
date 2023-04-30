import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  border: 1px solid #d3d8dd;
`;

Container.Header = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : '45px')};
  background-color: #fafafa;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-bottom: ${({ active }) => active && '1px solid #d3d8dd'};
  opacity: ${({ disabled }) => disabled && '0.2'};
`;

Container.Panel = styled.div`
  width: 100%;
  height: ${({ active, height }) => (active ? height || '50px' : '0px')};
  display: flex;
  transition: height 0.3s;
  align-items: center;
  padding: 0 10px;
  overflow: hidden;
`;

Container.Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
Container.Icon = styled.div`
  width: 25px;
  height: 25px;
  transition: all 0.3s;

  transform: ${({ active }) => active && 'rotate(90deg)'};
`;
