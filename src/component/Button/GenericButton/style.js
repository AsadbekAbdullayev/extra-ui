import styled, {keyframes} from "styled-components";

import { ReactComponent as Loading } from '../../../assets/icon/loading.svg';


const getBorder = ({type, Danger, Ghost }) => {
  if (type === 'Dashed') {
      if (Danger) {
          return "1px dashed #ff4d4f";
      } else if (Ghost) {
          return "1px dashed #fff";
      } else {
          return "1px dashed #d9d9d9";
      }
  } else if (type === 'Default') {
      if (Danger) {
          return "1px solid #ff4d4f";
      } else if (Ghost) {
          return "1px solid #fff";
      } else {
          return "1px solid #d9d9d9";
      }
  } else if (type === 'Primary') {
      if (Danger) {
          return "1px solid #ff4d4f";
      } else if (Ghost) {
          return "1px solid #1890ff";
      } else {
          return "1px solid #1890ff";
      }
  } else if (Ghost) {
      return "1px solid #fff";
  } else {
      return "none";
  }
};


 const getColor = ({type,  Danger,  Ghost }) => {
  if (type === 'Link') {
      if (Danger) {
          return "#ff4d4f";
      } else if (Ghost) {
          return "#fff";
      } else {
          return "#1890ff";
      }
  } else if (type === 'Primary' ) {
      if (Danger) {
          return "#ff7875";
      } else if (Ghost) {
          return "#1890ff";
      } else {
          return "#fff";
      }
  } else if (Danger) {
      return "#ff4d4f";
  } else if ( type === 'Default' ) {
      if (Danger) {
          return "#ff7875";
      } else if (Ghost) {
          return "#fff";
      } else {
          return "rgba(0,0,0,.85)";
      }
  } else if (Ghost) {
      return "#fff";
  } else {
      return "rgba(0,0,0,.85)";
  }
};







export const Container = styled.div`
color:${getColor};
border-radius:${({shape})=>{
  if(shape === 'circle'){
    return '50%'
  }else if(shape === 'round '){
return '17px'
  }
  else{
    return '6px';
  }
}};
border: ${getBorder};




background: ${({ type, loading }) => {
        if (type === 'Primary' && loading) {
            return "#74ade1";
        } else if (type === 'Primary') {
            return "#1677FF";
        } else {
            return null;
        }
    }};



:hover{
  background-color: ${({ type,Danger }) => {
        if (type === 'Primary') {
            return "#74ade1";
        } else if (type === 'Text') {
          if (Danger) {
            return "#ff7875";
        }else{
          return "#e6ebea";
        }
        } else {
            return null;
        }
    }};

opacity: ${({ type,Danger }) => {
        if (type === 'Link' || Danger) {
            return "0.7";
        } 
    }};

  color:${({ type }) => {
        if (type === 'Default') {
            return "#74ade1";
        } else if (type === 'Dashed') {
          return "#74ade1";
        } else {
            return null;
        }
    }};  

border-color:${({ type }) => {
        if (type === 'Default') {
            return "#1677FF";
        } else if (type === 'Dashed') {
          return "#1677FF";
        } else if (type === 'Primary') {
          return "#74ade1";
        } 
        else {
            return null;
        }
    }}; 

}

:active{
  background-color:${({ type,Danger }) => {
        if (type === 'Primary') {
            return "#1677FF";
        } else if (type === 'Text') {
          if (Danger) {
            return "#d9363e";
        }else{
          return "#c9d1d0";
        }
        } else {
            return null;
        }
    }};

color:${({ type }) => {
        if (type === 'Default') {
            return "#1677FF";
        } else if (type === 'Dashed') {
          return "#1677FF";
        } else {
            return null;
        }
    }};  

border-color:${({ type }) => {
        if (type === 'Default') {
            return "#1677FF";
        } else if (type === 'Dashed') {
          return "#1677FF";
        } else {
            return null;
        }
    }}; 

  opacity: ${({ type,Danger }) => {
        if (type === 'Link' || Danger) {
            return "1";
        } 
    }};
}


height:${({height})=>height ? height : '32px'};
width: fit-content;
display:flex;
align-items:center;
padding:${({padding})=>padding ? padding : '2px 15px'};
margin:${({margin})=>margin ? margin : '5px 10px 5px 0'};
cursor:${({disabled})=>disabled ? 'not-allowed' : 'pointer'};
transition:all 0.3s;
user-select: none; 
`;

Container.Title = styled.div`
line-height: 25px;
font-size: 16px;
font-weight: 500;
margin:${({icon})=>icon && '0 0 0 8px'};

`;


export const Icon = styled.div``;

const flash = keyframes`
  from {
      transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);

      }
`;

Container.Loading = styled.div`
width:17px;
height:17px;
  background-color: inherit;
  position: relative;
margin:0 8px 0 0;
animation:${flash} infinite 1.5s linear;
`;




Icon.Loading = styled(Loading)`
width:17px;
height:17px;
margin:0 8px 0 0;
path {
    fill: #fff;
  }
`;




