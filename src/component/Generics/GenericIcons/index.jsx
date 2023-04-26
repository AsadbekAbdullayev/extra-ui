import styled from 'styled-components';
import { ReactComponent as Upload } from '../../../assets/icon/upload.svg';
import { ReactComponent as Eye } from '../../../assets/icon/eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/icon/eye-slash.svg';
import { ReactComponent as Delete } from '../../../assets/icon/delete.svg';
import { ReactComponent as Next } from '../../../assets/icon/next.svg';
import { ReactComponent as User1 } from '../../../assets/icon/user-1.svg';
import { ReactComponent as Search } from '../../../assets/icon/Search.svg';
import { ReactComponent as Call } from '../../../assets/icon/call.svg';
import { ReactComponent as Check } from '../../../assets/icon/check.svg';
import { ReactComponent as Warning } from '../../../assets/icon/warning.svg';
import { ReactComponent as Star } from '../../../assets/icon/star.svg';

export const StarIcon = styled(Star)`
  width: ${({ width }) => (width ? width : '25px')};
  height: ${({ height }) => (height ? height : '25px')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) =>
      color || 'var(--appTableCollapseHeaderColor)'} !important;
  }
  cursor: ${({ pointer }) => !pointer && 'pointer'};
  transition: all 0.2s;
`;

export const WarningIcon = styled(Warning)`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
`;

export const CheckIcon = styled(Check)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
`;

export const CallIcon = styled(Call)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
`;

export const EyeSlashIcon = styled(EyeSlash)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: #fff;
  }
`;

export const User1Icon = styled(User1)`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || 'var(--appTableCollapseHeaderColor)'};
  }
`;

export const NexrIcon = styled(Next)`
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
