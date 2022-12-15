export const initialState = {
    selected: [],
    cards:[
        {
          id:1,
          name:'Apple iPhone 8 64GB, состояние хорошее серый космос',
          prise:'6 400 000 сум ',
          prise24:'от 1 235 000 сум',
          img:require('../../assets/img/rasm.png'
      )  },
        {
          id:2,
          name:'Xiaomi Redmi Note 10S 6/128GB, состояние хорошее синий океан',
          prise:'2 233 000 сум ',
          prise24:'от 490 000 сум',
          img:require('../../assets/img/rasm2.png'),
        },
        {
          id:3,
          name:'Apple iPhone SE 2020 64GB, состояние отличное красный',
          prise:'7 300 000 сум ',
          prise24:'от 2 435 000 сум',
          img:require('../../assets/img/rasm.png'
      )
        },
        {
          id:4,
          name:'Samsung Galaxy A41 4/64GB, состояние хорошее черный',
          prise:'11 300 000 сум ',
          prise24:'от 2 422 000 сум',
          img:require('../../assets/img/rasm2.png')
      
        },
        {
          id:5,
          name:'HONOR 50 6/128GB, состояние отличное полночный черный',
          prise:'3 300 000 сум ',
          prise24:'от 1 431 000 сум',
          img:require('../../assets/img/rasm.png'
      )
        },
        {
          id:6,
          name:'HUAWEI nova 5T 6/128GB, состояние отличное фиолетовый',
          prise:'6 608 000 сум ',
          prise24:'от 2 432 000 сум',
          img:require('../../assets/img/rasm2.png')
      
        },
        {
          id:7,
          name:'Samsung Galaxy A50 4/64GB, состояние хорошее белый',
          prise:'7 300 000 сум ',
          prise24:'от 2 435 000 сум',
          img:require('../../assets/img/rasm.png'
      )
        },
        {
          id:8,
          name:'HUAWEI P40 Lite 6/128GB, состояние хорошее полночный черный',
          prise:'5 300 000 сум ',
          prise24:'от 2 435 000 сум',
          img:require('../../assets/img/rasm2.png')
      
        },
        {
          id:9,
          name:'Samsung Galaxy A20s 32GB, состояние хорошее красный (SM-A207FZRDSER)',
          prise:'8 300 000 сум ',
          prise24:'от 4 422 000 сум',
          img:require('../../assets/img/rasm.png'
      )
        },
        {
          id:10,
          name:'Xiaomi Redmi Note 9 Pro 6/128GB, состояние отличное зеленый',
          prise:'6 322 000 сум ',
          prise24:'от 2 435 000 сум',
          img:require('../../assets/img/rasm2.png')
      
        },
      ],

      korzina:[],

  };
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'setKor':
        return { ...state, korzina: action.payload };
      default:
        return state;
    }
  };