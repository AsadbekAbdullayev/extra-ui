import React, { useState } from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericModal from './GenericModal';
import Button from '../Button/GenericButton';
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleOk = () => {};
  const [loading, setLoading] = useState(false);

  const loadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen1(!isModalOpen1);
    }, 1500);
  };
  return (
    <Container>
      <Container.Flex>
        <Container.Column>
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button
                  type='Primary'
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  title='Open Modal'
                />

                <GenericModal
                  title='Basic Modal'
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={() => setIsModalOpen(false)}
                  width='500px'
                  isMaskClosable={true}
                >
                  <div>
                    <h3>Title</h3>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '15px',
                      }}
                    >
                      <Button
                        type='Default'
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        title='Cancel'
                      />
                      <Button
                        type='Primary'
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        title='Ok'
                      />
                    </div>
                  </div>
                </GenericModal>
              </div>
            }
            title={'Basic'}
            desc={'Basic modal.'}
          />

          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button
                  type='Primary'
                  onClick={() => setIsModalOpen1(!isModalOpen1)}
                  title='Open Modal with asyns logic'
                />

                <GenericModal
                  title='Basic Modal'
                  open={isModalOpen1}
                  onOk={handleOk}
                  onCancel={() => setIsModalOpen1(false)}
                  width='450px'
                >
                  <div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '15px',
                      }}
                    >
                      <Button
                        type='Default'
                        onClick={() => setIsModalOpen1(!isModalOpen1)}
                        title='Cancel'
                      />
                      <Button
                        type='Primary'
                        loading={loading}
                        onClick={loadingClick}
                        title='Ok'
                      />
                    </div>
                  </div>
                </GenericModal>
              </div>
            }
            title={'Asynchronously close'}
            desc={
              'Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form'
            }
          />
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button
                  type='Primary'
                  onClick={() => setIsModalOpen2(!isModalOpen2)}
                  title='Open Modal of 1000px width'
                />

                <GenericModal
                  title='Basic Modal'
                  open={isModalOpen2}
                  onOk={handleOk}
                  onCancel={() => setIsModalOpen2(false)}
                  width='1000px'
                >
                  <h3>Modal 1000px width</h3>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </GenericModal>
              </div>
            }
            title={'To customize the width of modal'}
            desc={
              'There are primary button, default button, dashed button, text button and link button in antd.'
            }
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Modal;
