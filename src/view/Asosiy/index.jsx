import React,{useEffect,useState} from 'react'
import {
  Outlet,
} from "react-router-dom";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/sidebar'
import {Container} from './style.js';
export default function Asosiy() {
const pathname = window.location.pathname
const [active, setActive] = useState(true);
  useEffect(() => {
    (pathname === '/Components' || pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog') ? setActive(true) : setActive(false);
  }, [pathname])


// // program to count down numbers to 1
// function countDown(number) {

//   // display the number
//   console.log(number);

//   // decrease the number value
//   const newNumber = number - 1;

//   // base case
//   if (newNumber > 0) {
//       countDown(newNumber);
//   }
// }

// countDown(4);

let nastedArray = [[1], [[2, 3]], [[[4]]]];
let a = [];
let aa = (arr)=>{
  for (let i = 0; i < arr.length; i++) {
if(Array.isArray(arr[i])){
  aa(arr[i])
}else{
  a.push(arr[i])
}    
  }
}

aa(nastedArray);
console.log(a,'aaa');
// console.log(nastedArray.toString().split(',').map(v=>+v),'aasas')
// console.log(+[2]);==>2
  return (
    <Container>
      <Navbar/>
      <Container.Flex > 

        <Sidebar view={(pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog') ? pathname : false}/>

        <Container.Outlet >
            <Outlet />
        </Container.Outlet>

      </Container.Flex>
    </Container>
  )
}
