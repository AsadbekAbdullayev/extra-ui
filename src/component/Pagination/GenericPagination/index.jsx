import React, { useState, useRef, } from 'react';
import { Container, Icon } from './style';
const Pagination = ({ onClick, margin, disabled, counter, current, total, pageSizeOptions }) => {

  let pageSizeOptionsList = pageSizeOptions || ['5', '10', '20', '50', '100'];

  const [size, setSize] = useState(5);
  const [current2, setCurrent2] = useState(current || 0);
  let SizeAll = Math.ceil(total / size);

  const onClick2 = () => {
    onClick && onClick();
  };

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
  }

const [open,setOpen] = useState(false);
const clikOption = (v)=>{
  setSize(v);
  setOpen(false);
};
  return (
    <Container
      margin={margin}
    >

      <Container.Item onClick={() => clikCounter('left')} disabled={current2 === 0}>
        <Icon.Left />
      </Container.Item>
      {
        Array(SizeAll)
          .fill(0).map((v, i) =>
            <Container.Item active={current2 === i} onClick={() => setCurrent2(i)}>
              {i + 1}
            </Container.Item>
          )
      }


      <Container.Item onClick={() => clikCounter('right')} disabled={current2 === SizeAll - 1}>
        <Icon.Right />
      </Container.Item>

      {
      counter && <Container.Select onClick={()=>setOpen(!open)} onMouseLeave={()=>setOpen(false)}>
        {`${size} / page`}

       <Container.OptionCon open={open}>
          {
            pageSizeOptionsList.map(v=>
              <Container.Option onClick={()=>clikOption(v)}>
                {v} / page
              </Container.Option>
            )
          }
           </Container.OptionCon>
      </Container.Select>
     }

      

    </Container>
  );
};

export default Pagination;
