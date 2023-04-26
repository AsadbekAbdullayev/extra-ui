import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  padding: 0 30px;
`;

Wrap.Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

Wrap.Input = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

Wrap.Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Wrap.Text = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: 56px;
  left: 0px;
`;
