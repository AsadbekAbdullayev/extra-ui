import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: ${({ width }) => (width ? width : '600px')};
  height: ${({ height }) => (height ? height : '200px')};
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
Container.Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ index }) => `translate(-${index * 600}px)`};
  transition: 0.5s transform;
`;
Container.Wrap = styled.div`
  min-width: ${({ width }) => (width ? width : '600px')};
  height: ${({ height }) => (height ? height : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(54, 77, 121);
  color: #fff;
  font-weight: 650;
  /* transform: ${({ index }) => `translate(-${index * 100}%)`};
  transition: 0.5s transform; */
`;

Container.Action = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
