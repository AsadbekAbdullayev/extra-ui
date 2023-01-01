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

let n = 1000;
// let count =[];
//  for (let i = 0; i < n; i++) {

//   let nn =0;
//     for (let j = 2; j <= i; j++) {
//         if(i%j ==0){
//           nn++

//         }
//      }
//      if(nn  == 1){
//       count.push(i)
//     }
//   nn = 0;

  


//  }


let count = 0;
const isPrime = Array(n).fill(true);

for (let i = 2; i < n; i++) {
  if (isPrime[i]) {

    count++;
    for (let j = i; j < n; j += i) {

      isPrime[j] = false
    }; // sieve out multiples
  }
}
console.log(count,'count');




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
