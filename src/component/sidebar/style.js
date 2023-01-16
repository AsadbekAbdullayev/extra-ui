
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icon/arrowUp.svg';


export const Container = styled.div`
 width: ${({viewed})=>viewed ? '0px' : '333px'};
 transition: width 0.2s;
 height:86vh;
 
/* border-radius: 0px 30px 0px 0px; */
/* padding:50px 0px 50px 30px; */
display: flex;
flex-direction: column;
align-items: flex-end;
overflow-y: auto;

&::-webkit-scrollbar {
	background-color: #F5F5F5;
  display: none;
    }

  &::-webkit-scrollbar
{
	width: 4px;
  display: none;
	background-color: #F5F5F5;
}  

&::-webkit-scrollbar-thumb
{
  display: none;
	background-color: #555;
}
border-right:1px solid #f0f0f0;
`;

export const Icon = styled.div``;

Icon.Arrow = styled(Arrow)`
display: ${({icon})=>icon && 'none'};
width: 22px;
 height:22px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }

  position: absolute;
  right: 20px;
  top:15px;
  transform: ${({togle})=>togle ? 'rotateX(180deg)' : 'rotateX(0deg)'};
  transition: transform 0.3s;
`;










Container.Title = styled.div`
cursor: pointer;
/* visibility:${({togle})=>togle && 'hidden'}; */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.3px;
color: ${({ color }) => color ? color  : '#61dafb'};
margin:${({togle})=>togle && '0 0 0 20px'};
 -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all 0.2s;
 `;

Container.Item = styled.div`
width: 263px;
 height:50px;
 background-color: ${({ color }) => color ? '#fff'  : '#3D639D'};
 border-radius:25px 0 0 25px;
 display: flex;
 align-items: center;
margin:10px 0;
cursor:pointer;
`;

export const Item = styled.div`
padding:0 0 0 30px;
width: 85%;
min-height: 40px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
border-radius: 7px;
margin: 5px;
transition: all 0.3s;

.Title{
color: #000;
    
  }

:hover{

${({view})=>!view && 'background-color: #f0f0f0;'}
}

.iconSidebar{
  position: absolute;
}
background-color: ${({view})=>view && '#bae0ff'};

`;

Item.Child = styled.div`

width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
:hover{
background-color: #1677ff;

.Title{
    color:#ccc;
  }
}

.iconSidebar{
  position: absolute;
}

height: ${({view})=>view ? '100%':'50px'};

transition: all 0.3s;
`;

Item.ChildContainer = styled.div`
/* border:${({view})=>view ? '1px solid #fff':'' }; */
width: 100%;
display:${({view})=>view ? 'flex':'block' };
align-items: center;
height: ${({view})=>view ? '40px':'0px' };

-webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;

:hover{
  background-color: #fff;
}
`;