import styled from "styled-components";

export const Container = styled.div`
`;

Container.Flex = styled.div`
display:flex;
`;

Container.Outlet = styled.div`
padding:0 32px;
width:100%;
height:86vh;
overflow-y: auto;
&::-webkit-scrollbar {
  display: none;
    }

  &::-webkit-scrollbar
{
	width: 4px;
  display: none;
}  

&::-webkit-scrollbar-thumb
{
  display: none;
}

/* margin:${({view})=>view && '0 0 0 calc(var(--sidebar-width) + 35px)'}; */
`;