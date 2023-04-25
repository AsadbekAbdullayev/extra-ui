import React, { useState } from 'react';
import { Container, Icon } from './style';
import { ThreeDots } from '@styled-icons/bootstrap/ThreeDots';
import { ArrowheadRight } from '@styled-icons/evaicons-solid/ArrowheadRight';
import { ArrowheadLeft } from '@styled-icons/evaicons-solid/ArrowheadLeft';
const Pagination = ({
  onClick,
  margin,
  disabled,
  counter,
  current,
  total,
  pageSizeOptions,
}) => {
  let pageSizeOptionsList = pageSizeOptions || ['5', '10', '20', '50', '100'];

  const [size, setSize] = useState(5);
  const [current2, setCurrent2] = useState(current || 0);
  let SizeAll = Math.ceil(total / size);
  // const onClick2 = () => {
  //   onClick && onClick();
  // };

  const clikCounter = (e) => {
    if (e === 'left') {
      if (current2 > 0) {
        setCurrent2(current2 - 1);
      }
    } else {
      if (current2 < SizeAll - 1) {
        setCurrent2(current2 + 1);
      }
    }
  };

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const clikOption = (v) => {
    setSize(v);
    setOpen(false);
  };
  const Last = 
  <Container.Flex>
      <Container.Item1
      onMouseLeave={()=>setHover(false)}
      onMouseOver={()=>setHover(true)}
  onClick={() => setCurrent2(current2+3)}
>
  {
    hover ? <ArrowheadRight width={'20px'}/> :<ThreeDots width={'20px'}/>
  }
</Container.Item1>

  <Container.Item
  active={current2 === SizeAll-1}
  onClick={() => setCurrent2(SizeAll-1)}
  title={SizeAll}
  key={SizeAll-1}
>
  {SizeAll}
</Container.Item>
</Container.Flex>

const First = 
<Container.Flex>

<Container.Item
active={current2 === 0}
onClick={() => setCurrent2(0)}
title={0}
key={0}
>
{1}
</Container.Item>

<Container.Item1
onMouseLeave={()=>setHover1(false)}
onMouseOver={()=>setHover1(true)}
onClick={() => setCurrent2(current2-3)}
>
{
hover1 ? <ArrowheadLeft width={'20px'}/> :<ThreeDots width={'20px'} color={'#000'}/>
}
</Container.Item1>

</Container.Flex>

  return (
    <Container margin={margin}>
      <Container.Item
        onClick={() => clikCounter('left')}
        disabled={current2 === 0}
        title={'Previous Page'}
      >
        <Icon.Left />
      </Container.Item>


{
  //  1 - condition
  SizeAll < 12 ?
  Array(SizeAll)
    .fill(0)
    .map((v, i) => {
      return (
        <>
          <Container.Item
            active={current2 === i}
            onClick={() => setCurrent2(i)}
            title={i + 1}
            key={i}
          >
            {i + 1}
          </Container.Item>
        </>
      );
    }) 

  //  2 - condition

  :current2 <6 ?
  <Container.Flex>
{
  Array(8)
    .fill(0)
    .map((v, i) => {
      return (
        <>
          <Container.Item
            active={current2 === i}
            onClick={() => setCurrent2(i)}
            title={i + 1}
            key={i}
          >
            {i + 1}
          </Container.Item>
        </>
      );
    }) }
{Last}
</Container.Flex>
  //  3 - condition



:  current2 > SizeAll-6 ?
  <Container.Flex>
{First}

{
  Array(SizeAll)
    .fill(0)
    .map((v, i) => {
      return (
        i>SizeAll-8 && <>
          <Container.Item
            active={current2 === i}
            onClick={() => setCurrent2(i)}
            title={i + 1}
            key={i}
          >
            {i + 1}
          </Container.Item>
        </>
      );
    }) }
  {/* //  4 - condition */}

</Container.Flex> :  <Container.Flex>
{First}
{
  Array(SizeAll)
    .fill(0)
    .map((v, i) => {
      return (
        (i>current2-3 && i<current2+3) &&<>
          <Container.Item
            active={current2 === i}
            onClick={() => setCurrent2(i)}
            title={i + 1}
            key={i}
          >
            {i + 1}
          </Container.Item>
        </>
      );
    }) }
{Last}
</Container.Flex>
}








      <Container.Item
        onClick={() => clikCounter('right')}
        disabled={current2 === SizeAll - 1}
        title={'Next Page'}
      >
        <Icon.Right />
      </Container.Item>

      {/* Counter */}
      {counter && (
        <Container.Select
          onClick={() => setOpen(!open)}
          onMouseLeave={() => setOpen(false)}
          title={size + ' / page'}
        >
          {`${size} / page`}

          <Container.OptionCon open={open}>
            {pageSizeOptionsList.map((v) => (
              <Container.Option onClick={() => clikOption(v)}>
                {v} / page
              </Container.Option>
            ))}
          </Container.OptionCon>
        </Container.Select>
      )}
    </Container>
  );
};

export default Pagination;
