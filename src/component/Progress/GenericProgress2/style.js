import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  width:${({width})=>width ? width : '350px'};  
  height:16px;
  /* height: ${({ height }) => (height ? height : 'fit-content')}; */ 
  border-radius:10px;
  background-color:#e0e0de;
  position:relative;
`;



Container.Proggres = styled.div`
  position:absolute;
  background-color:${({foiz,bg})=>foiz === 100 ? '#52c41a' :bg ? bg : '#0000ff'};
  width: ${({foiz})=>`${foiz}%`};
  height:16px;
  transition:all 0.2s;
  /* height: ${({ height }) => (height ? height : 'fit-content')}; */
  border-radius:10px;
  @keyframes pulse {
    0% {
      background-color:#52c41a;

    }
    50% {
      background-color:#0000ff;

    }100% {
      background-color:#0000cc;

    }
  }

  animation:${({prog})=>prog && 'pulse 3s infinite'};
  
`;
Container.Title = styled.div`
  position:absolute;
color: #000;
right: -50px;
font-size:12px;
`;