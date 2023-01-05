import React from 'react'
import {Container} from './style.js';
const Card = () => {



  // let timePoints =["01:01","02:02"]
  // [670, 1319, 1439, 1440, 1442, 1450]
  // Output: 1 ['23:57','00:00','00:02']
  // ['12:12','00:13']
  // if(diff >= 12 * 60) {
  //   return (24 * 60) - diff;
  // }
// var findMinDifference = function(timePoints) {
//   let arr =[];
//   if(timePoints.length === 2){
//     arr =timePoints.map(v=>v.split(':')).map((v)=>v[0]=== '00' ? (24*60)+(+v[1]) : ((+v[0]*60)+(+v[1]))).sort((a,b)=>a-b);
//     let arr1 =timePoints.map(v=>v.split(':')).map((v)=>v[0]=== '00' ? (0*60)+(+v[1]) : ((24 * 60)-(+v[0]*60)+(+v[1]))).sort((a,b)=>a-b);
     

//     if(arr[1]-arr[0] > arr1[1]-arr1[0]){
//       console.log(arr,'arr');
//       console.log(arr1,'arr1');
// arr = arr1
//     }

//   }else{
//     arr =timePoints.map(v=>v.split(':')).map((v)=>v[0]=== '00' ? (24*60)+(+v[1]) : ((24 * 60)-(+v[0]*60)+(+v[1]))).sort((a,b)=>a-b);

//   }

//   let newArr =[];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[i] -arr[j] > 0) newArr.push(arr[i] -arr[j])
//     }
//     }

//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i+1]){
//       j++
//     }
//   }
//   if(j){
//     return 0
//   }else{
//     return newArr.sort((a,b)=>a-b)[0]
//   }
// };



//  console.log(findMinDifference(timePoints),'findMinDifference');






  return (
    <Container>
      cardMASTER
    </Container>
  )
}

export default Card