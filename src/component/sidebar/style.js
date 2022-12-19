
import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import { ReactComponent as Zak } from '../../assets/icon/zakaz.svg';
import { ReactComponent as Tov } from '../../assets/icon/tovar.svg';
import { ReactComponent as Star } from '../../assets/icon/Star.svg';
import { ReactComponent as Kor } from '../../assets/icon/kor.svg';
import { ReactComponent as Arrow } from '../../assets/icon/arrowUp.svg';


export const Container = styled.div`
 width: ${({width})=>width || '263px'};
 transition: width 0.2s;
 height: 890px;
 
 /* background-color: #001529; */
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
border-right:1px solid #bae0ff;
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



Icon.Home = styled(Home)`
width: 22px;
 height:22px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }

  position: absolute;
`;

Icon.Zakaz = styled(Zak)`
width: 22px;
 height:22px;
 margin:0 20px 0 20px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }
`;
Icon.Tovar = styled(Tov)`
width: 22px;
 height:22px;
 margin:0 20px 0 20px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }
`;

Icon.Star = styled(Star)`
width: 22px;
 height:22px;
 margin:0 20px 0 20px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }
`;

Icon.Korzina = styled(Kor)`
width: 22px;
 height:22px;
 margin:0 20px 0 20px;
 path {
    fill: ${({ color }) => color ? '#3D639D'  : '#fff'};
  }
`;

Container.Title = styled.div`
cursor: pointer;
visibility:${({togle})=>togle && 'hidden'};
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.3px;
color: ${({ color }) => color ? color  : '#fff'};
margin:0 0 0 45px;
 -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
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
width: 100%;
min-height: 40px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
border-radius: 7px;
margin: 5px;
background-color: ${({view})=>view && '#bae0ff'};
transition: all 0.3s;

.Title{
color: ${({view})=>view && '#000'};
    
  }

:hover{
background-color: #ccc;

.Title{
    
    color:#000;
    /* border-bottom:1px solid #fff; */
  }
}

.iconSidebar{
  position: absolute;
}
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
    color:#000;
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