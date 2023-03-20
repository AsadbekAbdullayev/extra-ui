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
  padding: 0 20px;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 4px;
`;

Image.Wrap = styled.div`
  border: 1px solid #d9d9d9;
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 4px;
`;
Image.Input = styled.input`
  display: none;
`;

Image.Text = styled.div`
  color: #bae0ff;
`;
