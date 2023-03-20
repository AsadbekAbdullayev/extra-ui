import React, { useState, useRef } from 'react';
import { Container, Image } from './style';
import Card from '../cardDetails';
const Uploader = () => {
  const inputRef = useRef(null);

  const reader = new FileReader();
  const [src, setSrc] = useState('');
  const handleEvent = (e) => {
    console.log(e);
  };

  const onChange = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setSrc(reader.result);
      console.log(reader.result, 'reader.result');
    };
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
  };

  const Click = () => {
    inputRef.current.click();
  };
  return (
    <Container>
      <Container.Flex>
        {/* 1 */}
        <Container.Column>
          <Card
            component={
              <Image.Wrap onClick={Click}>
                <Image.Input
                  type='file'
                  multiple
                  ref={inputRef}
                  onChange={(e) => onChange(e)}
                />
                {src ? (
                  <Image src={src} alt='Rasm' />
                ) : (
                  <Image.Text>Upload</Image.Text>
                )}
              </Image.Wrap>
            }
            title={'Basic'}
            desc={'The most basic dropdown menu.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Uploader;
