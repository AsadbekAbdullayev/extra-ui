import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '250px')};
  height: ${({ height }) => (height ? height : 'fit-content')};
  border-radius: 4px;
  border: 1px solid #d3d8dd;
`;

Container.Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

Container.Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

Container.TitleContaiener = styled.div`
  width: 100%;
  height: ${({ size }) => (size === 'small' ? '35px' : '50px')};
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  padding: 0 10px;
  border-bottom: 1px solid #d3d8dd;
`;

Container.Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
