import styled from "styled-components";
import { ReactComponent as Search } from '../../assets/icon/Search.svg';
import { ReactComponent as Download } from '../../assets/icon/download.svg';
import { ReactComponent as Loading } from '../../assets/icon/loading.svg';

export const Container = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
`;
export const Icon = styled.div``;

Icon.Search = styled(Search)`
width:19px;
height:19px;
path {
    fill: #fff;
  }
`;

Icon.Search1 = styled(Search)`
width:19px;
height:19px;
path {
    fill: #000;
  }
`;


Icon.Download = styled(Download)`
width:19px;
height:19px;
path {
    fill: #fff;
  }
`;

Icon.Loading = styled(Loading)`
width:19px;
height:19px;
path {
    fill: #fff;
  }
`;

Container.Flex = styled.div`
display: flex;
gap:25px;

`;