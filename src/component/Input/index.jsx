import React from 'react';
import { Container, Icon } from './style';
import Card from '../cardDetails';
import GenericInput from './GenericInput';
import { User1Icon } from '../Generics/GenericIcons';
import { EyeIcon, SearchIcon } from '../Generics/GenericIcons';
const Button = () => {
  return (
    <Container>
      <Container.Flex>
        <Container.Column>
          {/* 1 */}
          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput placeholder={'Basic usage'} />
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
                  placeholder={'input search text'}
                  padding='0 0 0 1px'
                  margin='0'
                  height={'40px'}
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
                  placeholder={'large size'}
                  suffix={<User1Icon color='#000' />}
                />
                <GenericInput
                  height={'32px'}
                  placeholder={'default size'}
                  suffix={<User1Icon color='#000' />}
                />
                <GenericInput
                  height={'24px'}
                  placeholder={'small size'}
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

          <Card
            component={
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <GenericInput
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
