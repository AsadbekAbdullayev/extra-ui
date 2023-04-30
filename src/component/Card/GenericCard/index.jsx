import React from 'react';
import { Container } from './style';
const GenericSteps = ({ title, children, size, height, width, image }) => {
  return (
    <Container size={size} height={height} width={width}>
      {image && image}

      {title && (
        <Container.TitleContaiener size={size}>
          {title}
        </Container.TitleContaiener>
      )}
      <Container.Content size={size}>{children}</Container.Content>
    </Container>
  );
};

export default GenericSteps;
