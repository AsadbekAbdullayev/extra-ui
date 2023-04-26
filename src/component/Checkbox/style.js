import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

Container.Flex = styled.div`
  display: flex;
  gap: 45px;
`;

Container.Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

Container.Some = styled.div`
  width: calc(99%);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;