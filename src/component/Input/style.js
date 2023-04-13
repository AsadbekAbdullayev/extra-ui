import styled, { keyframes } from 'styled-components';
import { ReactComponent as Search } from '../../assets/icon/Search.svg';
import { ReactComponent as Download } from '../../assets/icon/download.svg';
import { ReactComponent as Click } from '../../assets/icon/click.svg';
import { ReactComponent as Loading } from '../../assets/icon/loading.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.div``;

Container.Prefix1 = styled.div`
  background-color: #1677ff;
  color: #fff;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 0 4px 4px 0;
  border-top: 1px solid #1893ff;
  border-bottom: 1px solid #1893ff;
  border-left: 1px solid #1893ff;
  cursor: pointer;
`;

Icon.Search = styled(Search)`
  width: 17px;
  height: 17px;
  path {
    fill: #fff;
  }
`;

Icon.Search1 = styled(Search)`
  width: 17px;
  height: 17px;
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
  width: 19px;
  height: 19px;
  path {
    fill: #fff;
  }
`;

Container.Flex = styled.div`
  display: flex;
  gap: 45px;
  padding: 0 20px;
`;

Container.Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const flash = keyframes`
  from {
      transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);

      }
`;

Container.Loading = styled.div`
  width: 17px;
  height: 17px;
  background-color: inherit;
  position: relative;
  animation: ${flash} infinite 1.5s linear;
`;

Icon.Loading = styled(Loading)`
  width: 17px;
  height: 17px;
  margin: 0 8px 0 0;
  path {
    fill: #fff;
  }
`;
