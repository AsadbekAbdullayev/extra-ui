import styled from "styled-components";
import { ReactComponent as Search } from '../../assets/icon/Search.svg';
import { ReactComponent as Download } from '../../assets/icon/download.svg';
import { ReactComponent as Loading } from '../../assets/icon/loading.svg';
import { ReactComponent as Click } from '../../assets/icon/click.svg';

export const Container = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
`;
export const Icon = styled.div``;

Icon.Search = styled(Search)`
width:17px;
height:17px;
path {
    fill: #fff;
  }
`;

Icon.Search1 = styled(Search)`
width:17px;
height:17px;
path {
    fill: #000;
  }
`;
Icon.Click = styled(Click)`

/* path {
    fill: #fff;
  } */
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
gap:45px;
padding:0 20px;
`;

Container.Column = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;
