import styled from "styled-components";
export const Container = styled.div`
width:${({togle})=>togle ? '96%' :'86%'};
height: 100%;
transition: all 0.3s;
`;