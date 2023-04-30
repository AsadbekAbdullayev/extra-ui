import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.div``;

Container.Link = styled.a`
  margin: 17px 0 0 0;
  color: #1677ff;
  text-decoration: none;
  font-size: 14px;
  :hover {
    text-decoration: underline;
  }
`;

Container.Flex = styled.div`
  display: flex;
  gap: 45px;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Container.Status = styled.div`
  width: fit-content;
  height: 22px;
  border-radius: 4px;
  padding: 5px;
  background-color: ${({ status }) =>
    status === 'nice' ? '#f6ffed' : status === 'loser' ? '#fff2e8' : '#f0f5ff'};
  color: ${({ status }) =>
    status === 'nice' ? '#79bf59' : status === 'loser' ? '#db552f' : '#3750cb'};
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ status }) =>
      status === 'nice'
        ? '#79bf59'
        : status === 'loser'
        ? '#db552f'
        : '#3750cb'};
`;
