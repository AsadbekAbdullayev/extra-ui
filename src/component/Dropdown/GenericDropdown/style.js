import styled from "styled-components";

export const Container = styled.div`
width:${({width})=>width ? width : '100%'};
height:${({height})=>height ? height : '40px'};
border:1px solid manual;

`;