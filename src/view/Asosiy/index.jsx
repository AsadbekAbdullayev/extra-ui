import React from 'react'
import {
  Outlet,
} from "react-router-dom";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/sidebar'
import {Container} from './style.js';
export default function Asosiy() {
// const [active, setActive] = useState(true);
//   useEffect(() => {
//     (pathname === '/Components' || pathname === '/Docs' || pathname === '/Resources' || pathname === '/Blog') ? setActive(true) : setActive(false);
//   }, [pathname])

  return (
    <Container>
      <Navbar/>
      <Container.Flex > 

        <Sidebar />

        <Container.Outlet >
            <Outlet />
        </Container.Outlet>

      </Container.Flex>
    </Container>
  )
}
