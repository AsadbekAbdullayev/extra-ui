import React from 'react'
import Sidebar from '../sidebar'
import {
  Outlet,
} from "react-router-dom";
import Navbar from '../Navbar';

export default function Asosiy() {
  return (
    <div>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Sidebar />
            <Outlet/>
      </div>
    </div>
  )
}
