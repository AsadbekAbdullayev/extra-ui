import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : '600px')};
  height: ${({ height }) => (height ? height : '200px')};
`;
