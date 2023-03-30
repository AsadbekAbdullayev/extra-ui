import styled from 'styled-components';
import { ReactComponent as Upload } from '../../../assets/icon/upload.svg';
import { ReactComponent as Eye } from '../../../assets/icon/eye.svg';
import { ReactComponent as Delete } from '../../../assets/icon/delete.svg';

export const DeleteIcon = styled(Delete)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
  &:hover {
    path {
      fill: ${({ hovercolor }) => hovercolor || 'var(--appIconHoverColor)'};
    }
  }
`;

export const EyeIcon = styled(Eye)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
  &:hover {
    path {
      fill: ${({ hovercolor }) => hovercolor || 'var(--appIconHoverColor)'};
    }
  }
`;
export const UploadIcon = styled(Upload)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
  &:hover {
    path {
      fill: ${({ hovercolor }) => hovercolor || 'var(--appIconHoverColor)'};
    }
  }
`;
