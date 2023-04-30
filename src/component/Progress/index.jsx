import React, { useState } from 'react';
import { Container } from './style';
import Card from '../cardDetails';
import GenericProgress from './GenericProgress';
import Button from '../Button/GenericButton'
const Progress = () => {
const [foiz,setFoiz] = useState(0)  
const clikcUp =(qushish)=>{
if(qushish){
  if(foiz<100){
    setFoiz(foiz+10)
  }
}else{
  if(foiz>0){
    setFoiz(foiz-10)
  }
}
}
  return (
    <Container>
      <h1>Progress</h1>
      <br />
      <p>
        Progress is a navigation bar that guides users through the Progress of a task.
      </p>
      <Container.Flex style={{ margin: '20px 0 0 0' }}>
        {/* 1 column */}
        <Container.Column>
        <Card
          component={
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',justifyContent:'center'}}>

            <GenericProgress  foiz={20} hiddenPresent={true}/>
            <GenericProgress  foiz={20} width={'400px'}/>
            <GenericProgress  foiz={20} width={'450px'}/>
          </div>
        }
          title={'Basic with sizes'}
          desc={
            'small medium and large sizes.'
          }
        />

<Card
          component={
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',justifyContent:'center'}}>

            <GenericProgress  foiz={30} width={'300px'} hiddenPresent={true} prog={true}/>
            <GenericProgress  foiz={40} width={'400px'} bg={'#52c41a'}/>
            <GenericProgress  foiz={40} width={'450px'} bg={'#ff4d4f'}/>
          </div>
        }
          title={'Basic with status'}
          desc={
            'active, success and exception statuses.'
          }
        />
        </Container.Column>
        {/* 2 column */}

        <Container.Column>
        <Card
          component={
          <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'20px'}}>

            <GenericProgress  foiz={foiz} hiddenPresent={true} width={'400px'}/>

            <div style={{display:'flex',gap:'10px',marginRight:'auto'}}>
              <Button title='+' type='Default'  width={'30px'} onClick={()=>clikcUp(true)}/>
              <Button title='-' type='Default' width={'30px'} onClick={()=>clikcUp(false)}/>
            </div>
          </div>
        }
          title={'Dynamic'}
          desc={
            'dynamically increasing or decreasing the value'
          }
        />
        </Container.Column>
       
      </Container.Flex>
    </Container>
  );
};

export default Progress;
