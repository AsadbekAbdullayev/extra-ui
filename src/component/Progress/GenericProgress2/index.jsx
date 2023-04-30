import React from 'react';
import { Container } from './style';
// import { NexrIcon } from '../../Generics/GenericIcons';
const Proggres = ({foiz,hiddenPresent,width,bg,prog }) => {
  
  return (
    <Container width={width}>
      
   <Container.Proggres foiz={foiz} width={width} bg={bg} prog={prog}/>
  {hiddenPresent && <Container.Title>{foiz} %</Container.Title>}
    </Container>
  );
};

export default Proggres;
