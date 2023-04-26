import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  padding: 0 30px;
`;
Container.Flex = styled.div`
  display: flex;
  align-items: center;
`;

Container.Flex1 = styled.div`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
