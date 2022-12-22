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
console.log(active,'active');
console.log(pathname,'pathname');
  useEffect(() => {
    pathname === '/Components' || pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog' ? setActive(true) : setActive(false);
  }, [pathname])
  
  return (
    <Container>
      <Navbar/>
      <Container.Flex > 

        <Sidebar />

        <Container.Outlet view={active}>
            <Outlet />
        </Container.Outlet>

      </Container.Flex>
    </Container>
  )
}
