import React, { useRef, useState } from 'react';
import { Image, Container } from './style';
import { EyeIcon, DeleteIcon } from '../../Generics/GenericIcons';
const GenericUploader = () => {
  const inputRef = useRef(null);

  const reader = new FileReader();
  const [imageData, setImageData] = useState([]);
  const [idImage, setIdImage] = useState(0);
  const [actionView, setActionView] = useState(false);
  console.log(actionView, 'actionView');
  const setUrlFunc = (e, name) => {
    setIdImage(idImage + 1);

    setImageData([
      ...imageData,
      {
        id: idImage,
        url: reader.result,
        name: name.split('.')?.[0],
      },
    ]);
  };

  const onChange = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setUrlFunc(reader.result, e.target.files[0]?.name);
    };
  };

  const Click = () => {
    inputRef.current.click();
  };
  return (
    <Container>
      {imageData?.map(({ id, url }) => (
        <Image.Wrap
          key={id}
          onMouseLeave={() => setActionView(true)}
          onMouseEnter={() => setActionView(id)}
        >
          <Image src={url} alt='Rasm' />
          <Image.Action view={id === actionView}>
            <div
              style={{
                width: '50px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <EyeIcon width={'18px'} height='18px' color='#fff' />
              <DeleteIcon width={'18px'} height='18px' color='#fff' />
            </div>
          </Image.Action>
        </Image.Wrap>
      ))}

      <Image.Wrap onClick={Click}>
        <Image.Input
          type='file'
          multiple
          ref={inputRef}
          onChange={(e) => onChange(e)}
        />
        <Image.Text>Upload</Image.Text>
      </Image.Wrap>
    </Container>
  );
};

export default GenericUploader;
