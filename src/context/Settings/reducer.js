export const initialState = {
  fontSize:'16px',
  fontWeight:500,
  backgroundColor:'rgb(38, 46, 46)',
//   color:
  };

  export const reducer = (state, action) => {
    switch (action.type) {
      case 'setKor':
        return { ...state, korzina: action.payload };
      default:
        return state;
    }
  };