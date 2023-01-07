import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:fit-content;
border:1px solid #f0f0f0;
margin:${({margin})=>margin && margin};
padding:18px 12px;
border-radius: 6px;
:hover{
    box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
-webkit-box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
-moz-box-shadow: 3px 3px 4px -4px rgba(142,149,156,0.75);
}
transition:all 0.1s;
`;