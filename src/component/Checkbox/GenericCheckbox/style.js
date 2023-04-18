import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  cursor: pointer;
  gap: 6px;
`;
Container.Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Icon = styled.svg`
  fill: none;
  stroke: #1893ff;
  stroke-width: 3px;
`;
export const StyledCheckbox = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ hover }) => (hover ? ' #1893ff' : '#d9d9d9')};
  transition: all 0.2s;
  border-radius: 2px;

  :hover {
    border-color: #1893ff;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 0px 1px rgba(24, 147, 255, 0.3);
    }
    100% {
      box-shadow: 0px 0px 0px 3px rgba(24, 147, 255, 0.2);
    }
  }

  animation: ${({ active }) => active && 'pulse 0.3s '};
`;
