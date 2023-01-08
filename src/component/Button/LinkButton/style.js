import styled from "styled-components";

export const Container = styled.div`
min-width:85px;
width: fit-content;
height:40px;
color: #1677FF;
display:flex;
align-items:center;
padding:${({padding})=>padding ? padding : '2px 15px'};

margin:5px 10px 5px 0;
cursor:pointer;


:hover{
  opacity: 0.7;
}

:active{
  opacity: 1;
}
transition:all 0.3s;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;








