import styled from "styled-components";

export const Container = styled.div`

`;

Container.Flex = styled.div`
display:flex;
`;

Container.Outlet = styled.div`
padding:0 64px 32px 64px;
width:100%;
border:${({view})=>view && '1px solid red'};
/* margin:${({view})=>view && '0 0 0 calc(var(--sidebar-width) + 35px)'}; */
`;