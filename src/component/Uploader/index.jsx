import React from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericUploader from './GenereicUploader';
const Uploader = () => {
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>
          <Card
            component={<GenericUploader />}
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />
          <Card
            component={<GenericUploader />}
            title={'Upload by clicking'}
            desc={
              'Classic mode. File selection dialog pops up when upload button is clicked.'
            }
          />
          <Card
            component={<GenericUploader />}
            title={'Pictures Wall'}
            desc={
              'After users upload picture, the thumbnail will be shown in list. The upload button will disappear'
            }
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Uploader;
