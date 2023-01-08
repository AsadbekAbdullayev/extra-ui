import styled from "styled-components";
import { ReactComponent as Search } from '../../assets/icon/Search.svg';
import { ReactComponent as Download } from '../../assets/icon/download.svg';
import { ReactComponent as Loading } from '../../assets/icon/loading.svg';

export const Container = styled.div`
width:100%;
height: 100%;
display: flex;
gap:25px;
`;
export const Icon = styled.div``;

Icon.Search = styled(Search)`
width:19px;
height:19px;
margin:0 8px 0 0;
path {
    fill: #fff;
  }
`;

Icon.Download = styled(Download)`
width:19px;
height:19px;
margin:0 8px 0 0;
path {
    fill: #fff;
  }
`;

Icon.Loading = styled(Loading)`
width:19px;
height:19px;
margin:0 8px 0 0;
path {
    fill: #fff;
  }
`;
