import styled from "styled-components";

export const Container = styled.div`
width:100%;
height: 100%;
`;

Container.Flex = styled.div`
display:flex;
`;

Container.Outlet = styled.div`
padding:0 64px 32px 64px;
width:100%;
border:${({view})=>view && 'red'};
margin:${({view})=>view && '0 0 0 50px'};
`;