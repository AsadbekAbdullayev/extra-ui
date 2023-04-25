import React, { useState } from 'react';
import { Container, Icon } from './style';
import Card from '../cardDetails';
import GenericInput from './GenericInput';
import { User1Icon } from '../Generics/GenericIcons';
import { EyeIcon, SearchIcon, EyeSlashIcon } from '../Generics/GenericIcons';
const Button = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <Container>
      <Container.Flex>
        <Container.Column>
          {/* 1 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput placeholder={'Basic usage'}
                  width='400px'
                
                />
              </div>
            }
            title={'Basic usage '}
            desc={'Basic usage example.'}
          />

          {/* 2 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  height={'40px'}
                  placeholder={'large size'}  
                  width='400px'

                  danger='true'
                  placeholderColor={'rgba(255, 36, 37, 0.4)'}
                  color={'#ff2425'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 danger='true'>
                      <User1Icon color='#ff2425' />
                    </Container.Suffix1>
                  }
                />
                <GenericInput
                  height={'32px'}
                  placeholder={'default size'}
                  width='400px'

                  danger='true'
                  placeholderColor={'rgba(255, 36, 37, 0.4)'}
                  color={'#ff2425'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 danger='true'>
                      <User1Icon color='#ff2425' />
                    </Container.Suffix1>
                  }
                />
                <GenericInput
                  height={'24px'}
                  width='400px'

                  placeholder={'small size'}
                  danger='true'
                  placeholderColor={'rgba(255, 36, 37, 0.4)'}
                  color={'#ff2425'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 danger='true'>
                      <User1Icon color='#ff2425' />
                    </Container.Suffix1>
                  }
                />
              </div>
            }
            title={'Danger Inputs '}
            desc={
              'There are three sizes of an Danger Inputs box: large (40px), default (32px) and small (24px).'
            }
          />

          {/* 3 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  height={'40px'}
                  width='400px'

                  placeholder={'large size'}
                  type={show ? 'string' : 'password'}
                  prefix={
                    <Container.PrefixEye>
                      {show ? (
                        <EyeIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow(!show)}
                        />
                      ) : (
                        <EyeSlashIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow(!show)}
                        />
                      )}
                    </Container.PrefixEye>
                  }
                />
                <GenericInput
                  height={'32px'}
                  width='400px'

                  placeholder={'default size'}
                  type={show1 ? 'string' : 'password'}
                  prefix={
                    <Container.PrefixEye>
                      {show1 ? (
                        <EyeIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow1(!show1)}
                        />
                      ) : (
                        <EyeSlashIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow1(!show1)}
                        />
                      )}
                    </Container.PrefixEye>
                  }
                />
                <GenericInput
                  height={'24px'}
                  width='400px'

                  placeholder={'small size'}
                  type={show2 ? 'string' : 'password'}
                  prefix={
                    <Container.PrefixEye>
                      {show2 ? (
                        <EyeIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow2(!show2)}
                        />
                      ) : (
                        <EyeSlashIcon
                          color='#ccc'
                          height='20px'
                          width='20px'
                          onClick={() => setShow2(!show2)}
                        />
                      )}
                    </Container.PrefixEye>
                  }
                />
              </div>
            }
            title={'Password box '}
            desc={'Input type of password.'}
          />

          {/* 4 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  placeholder={'input search text'}
                  padding='0 0 0 1px'
                  margin='0'
                  height={'40px'}
                  width='400px'

                  prefix={
                    <Container.Prefix1 style={{ width: '70px' }}>
                      Search
                    </Container.Prefix1>
                  }
                />
                <GenericInput
                  placeholder={'input search text'}
                  padding='0 0 0 1px'
                  margin='0'
                  height={'32px'}
                  width='400px'

                  prefix={
                    <Container.Prefix1>
                      <SearchIcon height={'20px'} width={'20px'} />
                    </Container.Prefix1>
                  }
                />
                <GenericInput
                  placeholder={'input search text'}
                  padding='0 0 0 1px'
                  margin='0'
                  width='400px'

                  height={'24px'}
                  prefix={
                    <Container.Prefix1>
                      <SearchIcon height={'20px'} width={'20px'} />
                    </Container.Prefix1>
                  }
                />
              </div>
            }
            title={'Search box'}
            desc={
              'Example of creating a search box by grouping a standard input with a search button.'
            }
          />
        </Container.Column>
        <Container.Column>
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  height={'40px'}
                  width='400px'
                  placeholder={'large size'}
                  suffix={<User1Icon color='#000' />}
                />
                <GenericInput
                  height={'32px'}
                  width='400px'

                  placeholder={'default size'}
                  suffix={<User1Icon color='#000' />}
                />
                <GenericInput
                  height={'24px'}
                  placeholder={'small size'}
                  width='400px'

                  suffix={<User1Icon color='#000' />}
                />
              </div>
            }
            title={'Three sizes of Input '}
            desc={
              'There are three sizes of an Input box: large (40px), default (32px) and small (24px).'
            }
          />

          {/* 2 */}

          {/* 2 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  height={'40px'}
                  width='400px'

                  placeholder={'large size'}
                  success='true'
                  placeholderColor={'rgba(168, 240, 200, 0.54)'}
                  color={'#40a142'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 success='true'>
                      <User1Icon color='#40a142' />
                    </Container.Suffix1>
                  }
                />
                <GenericInput
                  height={'32px'}
                  width='400px'

                  placeholder={'default size'}
                  success='true'
                  placeholderColor={'rgba(168, 240, 200, 0.54)'}
                  color={'#40a142'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 success='true'>
                      <User1Icon color='#40a142' />
                    </Container.Suffix1>
                  }
                />
                <GenericInput
                  height={'24px'}
                  width='400px'

                  placeholder={'small size'}
                  success='true'
                  placeholderColor={'rgba(168, 240, 200, 0.54)'}
                  color={'#40a142'}
                  padding='0'
                  margin='0'
                  suffix={
                    <Container.Suffix1 success='true'>
                      <User1Icon color='#40a142' />
                    </Container.Suffix1>
                  }
                />
              </div>
            }
            title={'Success Inputs '}
            desc={
              'There are three sizes of an Success Inputs box: large (40px), default (32px) and small (24px).'
            }
          />
          {/* 3 */}

          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
                  width='400px'

                  placeholder={'input search text'}
                  padding='0 0 0 1px'
                  margin='0'
                  height={'40px'}
                  prefix={
                    <Container.Prefix1
                      style={{
                        display: 'flex',
                        width: '100px',
                        backgroundColor: '#66A5FD',
                        borderColor: '#66A5FD',
                      }}
                    >
                      <Container.Loading style={{ margin: '0 5px 0 0' }}>
                        {' '}
                        <Icon.Loading />
                      </Container.Loading>{' '}
                      Search
                    </Container.Prefix1>
                  }
                />
                <GenericInput
                  placeholder={'input search text'}
                  width='400px'

                  padding='0 0 0 1px'
                  margin='0'
                  height={'32px'}
                  prefix={
                    <Container.Prefix1
                      style={{
                        backgroundColor: '#66A5FD',
                        borderColor: '#66A5FD',
                      }}
                    >
                      <Container.Loading>
                        {' '}
                        <Icon.Loading />
                      </Container.Loading>
                    </Container.Prefix1>
                  }
                />
                <GenericInput
                  placeholder={'input search text'}
                  width='400px'

                  padding='0 0 0 1px'
                  margin='0'
                  height={'24px'}
                  prefix={
                    <Container.Prefix1
                      style={{
                        backgroundColor: '#66A5FD',
                        borderColor: '#66A5FD',
                      }}
                    >
                      <Container.Loading>
                        {' '}
                        <Icon.Loading />
                      </Container.Loading>
                    </Container.Prefix1>
                  }
                />
              </div>
            }
            title={'Search box with loading'}
            desc={'Search loading when onSearch.'}
          />
        </Container.Column>
      </Container.Flex>
    </Container>
  );
};

export default Button;
