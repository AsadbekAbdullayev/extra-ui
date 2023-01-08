import styled from "styled-components";

export const Container = styled.div`
min-width:85px;
width: fit-content;
height:40px;
background-color: inherit;
border-radius:6px;
color:#000;
display:flex;
align-items:center;
padding:${({padding})=>padding ? padding : '2px 15px'};

margin:5px 10px 5px 0;
cursor:pointer;



:hover{
  background-color: #e6ebea;
}

:active{
  background-color: #c9d1d0;
}
transition:all 0.3s;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;








