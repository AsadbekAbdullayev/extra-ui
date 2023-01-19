import styled from "styled-components";
import { ReactComponent as Pen } from '../../assets/icon/Search.svg';

export const Container = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
`;

Container.Pen = styled(Pen)`
height:20px;
width:20px;
.path{
    fill: #000;

}
`;


Container.Flex = styled.div`
display: flex;
gap:45px;
padding:0 20px;
`;

Container.Column = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;