import styled, {keyframes} from "styled-components";

import { ReactComponent as Loading } from '../../../assets/icon/loading.svg';

export const Container = styled.div`
min-width:85px;
width: fit-content;
height:40px;
background-color: #1677FF;
border-radius:6px;
color:#fff;
display:flex;
align-items:center;
padding:${({padding})=>padding ? padding : '2px 15px'};

margin:5px 10px 5px 0;
cursor:pointer;



:hover{
  background-color: #74ade1;
}

:active{
  background-color: #1677FF;
}
transition:all 0.3s;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const Icon = styled.div``;

const flash = keyframes`
  from {
      transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);

      }
`;

Container.Loading = styled.div`
width:17px;
height:17px;
  background-color: inherit;
  position: relative;
margin:0 8px 0 0;
animation:${flash} infinite 1.5s linear;
`;




Icon.Loading = styled(Loading)`
width:17px;
height:17px;
margin:0 8px 0 0;
path {
    fill: #fff;
  }
`;




