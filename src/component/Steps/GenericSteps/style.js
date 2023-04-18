import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  padding: 0 30px;
`;

Container.Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

Container.Content = styled.div`
  margin: 20px 0 0 0;
  min-width: 600px;
  min-height: 200px;
  display: flex;
  transition: all 0.2s;
  border: 2px dashed #cacaca;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
`;
Container.Start = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: ${({ status }) => (status ? '#000' : '#acacac')};
  padding: 0 5px;
`;
Container.Line = styled.div`
  display: ${({ none }) => none && 'none'};
  width: 100%;
  height: 1px;
  background-color: ${({ status }) => (status ? '#1677ff' : '#acacac')};
`;
Container.Steps = styled.div`
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #1677ff;
  background-color: ${({ status }) => (status ? '#1677ff' : '#fff')};
  color: ${({ status }) => (status ? '#fff' : '#1677ff')};
  transition: all 0.2s;
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
