import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  cursor: pointer;
  z-index: 99;
  :hover {
    .tooltip {
      scale: ${({ hover }) => hover && 1};
    }
  }
`;

Container.TooltipContainer = styled.span`
  width: max-content;
  position: absolute;
  top: ${({ position }) =>
    position === 'left'
      ? '-5px'
      : position === 'right'
      ? '-5px'
      : position === 'bottom'
      ? '45px'
      : '-50px'};
  background-color: ${({ bg }) => (bg ? bg : '#000')};
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  /* transition: all 0.2s; */
  scale: 0;
  left: ${({ position }) =>
    position === 'left' ? '-64px' : position === 'right' ? 'none' : '50%'};
  right: ${({ position }) => position === 'right' && ' -164px'};

  transform: translate(-50%, 0);
  z-index: 99;
`;

Container.TooltipArrow = styled.div`
  border: 10px solid transparent;
  border-top-color: ${({ bg }) => (bg ? bg : '#000')};
  position: absolute;
  top: ${({ position }) =>
    position === 'left'
      ? '6px'
      : position === 'right'
      ? '6px'
      : position === 'bottom'
      ? '27px'
      : '-13px'};
  left: ${({ position }) =>
    position === 'left'
      ? '-15px'
      : position === 'right'
      ? 'none'
      : position === 'bottom'
      ? '40%'
      : '50%'};
  right: ${({ position }) => position === 'right' && ' -15px'};
  transform: translate(-50%, 0);
  scale: 0;
  z-index: 99;
  transform: ${({ position }) =>
    position === 'left'
      ? 'rotate(-90deg)'
      : position === 'right'
      ? 'rotate(90deg)'
      : position === 'bottom'
      ? 'rotate(180deg)'
      : null};
`;

Container.Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

Container.Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
