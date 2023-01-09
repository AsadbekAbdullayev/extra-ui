import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:fit-content;
border:1px solid #e1e1e1;
margin:${({margin})=>margin ? margin :'0 0 20px 0'};
padding:35px 10px 18px 10px;

border-radius: 6px;
:hover{
    box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
-webkit-box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
-moz-box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
}
transition:all 0.1s;
`;

Container.Title = styled.div`
font-size:16px;
font-weight:640;
line-height:28px;
word-spacing:0px;
color:black;
margin:0 10px;
white-space: nowrap;

`;

Container.Desc = styled.div`
font-size:14px;
line-height:28px;
word-spacing:0px;
color:black;
`;

Container.Flex1 = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
width:100%;
padding:0 12px;
`;

Container.Flex = styled.div`
margin:35px 0 0 0;
display:flex;
align-items:center;
width:100%;

`;

Container.Flex3 = styled.div`
  width: fit-content;
  display:flex;
  flex-wrap: nowrap;
align-items:center;
`;

Container.Line1 = styled.div`
background-color:#f0f0f0;
height:1px;
width:50px;
`;

Container.Line2 = styled.div`
background-color:#f0f0f0;
height:1px;
width:100%;
`;

Container.Footer = styled.div`
margin:20px 0 0 0;
display:flex;
flex-direction:column;
// align-items:center;
justify-content:center;
min-height:20px;
border-top:1px dashed #f0f0f0;
padding:0 12px;

`;