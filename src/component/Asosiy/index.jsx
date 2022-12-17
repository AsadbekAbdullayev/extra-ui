import React from 'react'
import Sidebar from '../sidebar'
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import {
  Outlet,
} from "react-router-dom";
export default function Asosiy() {
  return (
    <div style={{display:'flex'}}>
        <Sidebar icon={Home}/>
            <Outlet/>
    </div>
  )
}
