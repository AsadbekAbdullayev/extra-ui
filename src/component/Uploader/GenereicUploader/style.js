import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

Container.Flex = styled.div`
  display: flex;
  gap: 45px;
  padding: 0 20px;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : '115px')};
  height: ${({ height }) => (height ? height : '115px')};
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 4px;
`;

Image.Action = styled.div`
  position: absolute;
  display: ${({ view }) => (!view ? 'none' : 'flex')};
  width: 115px;
  height: 115px;
  background-color: #000;
  border-radius: 4px;
  opacity: 0.5;
  align-items: center;
  justify-content: center;
`;

Image.Wrap = styled.div`
  position: relative;

  border: 1px dashed #d9d9d9;
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  padding: 1px;
  margin: 10px;
  :hover {
    border-color: var(--appIconHoverColor);
  }
`;
Image.Input = styled.input`
  display: none;
`;

Image.Text = styled.div`
  color: #bae0ff;
`;
