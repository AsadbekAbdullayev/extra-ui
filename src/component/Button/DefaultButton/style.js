import styled from "styled-components";

export const Container = styled.div`
min-width:85px;
width: fit-content;
height:40px;
background-color: #fff;
border-radius:6px;
color:#000;
display:flex;
align-items:center;
padding:${({padding})=>padding ? padding : '2px 15px'};

margin:5px 10px 5px 0;
border:1px solid #d9d9d9;

cursor:pointer;

:hover{
  border:1px solid #74ade1;
color:#74ade1;
}

:active{
  border:1px solid #74ade1;
color:#74ade1;

}
transition:all 0.3s;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;








