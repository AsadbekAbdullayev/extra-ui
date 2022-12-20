import styled from 'styled-components';
import { ReactComponent as Link } from '../../assets/icon/linkedin.svg';
import { ReactComponent as Telegram } from '../../assets/icon/telegram.svg';
import { ReactComponent as Git } from '../../assets/icon/github.svg';

export const Wrap = styled.div`
width:100%;
height: 70px;
display: flex;
align-items: center;
/* background-color: #bae0ff; */
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%);
justify-content:space-between;
`;


export const Icon = styled.div``;

Icon.Container =styled.div`
width:fit-content;
height:100%;
display:flex;
align-items:center;
`;

Icon.Linkedin = styled(Link)`
width:35px;
/* margin: 0 10px 0 20px; */
cursor:pointer
`;
Icon.Telegram = styled(Telegram)`
width:30px;
/* margin:0 10px 0 0; */
cursor:pointer
`;
Icon.Git = styled(Git)`
width:32px;
/* margin:0 30px 0 0; */
cursor:pointer
`;


Wrap.LogoContainer = styled.image`
width:263px;
display: flex;
align-items: center;
height: 50%;
border-right: 1px solid #f0f0f0;
`;



Wrap.Logo  = styled.img`
width:50px;
margin:0 10px 0 30px;
`;

Wrap.LogoText  = styled.div`
font-size: ${({mini})=>mini ? '13px' : '27px'};
color:#61dafb;
`;