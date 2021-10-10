import React from "react";
import { Avatar } from 'antd';
import './Header.css'
function AppHeader() {

  return (
    <>
      <nav class="navbar bg-gradient-primary  px-4" style={{
        borderBottom:'2px solid rgb(255,255,255,0.4) '}}>
        <h3 class="navbar-brand " style={{fontWeight:'bolder',color:'#001529'}}>
          <div class="twelve">
            <h1>Inventory Management System </h1>
          </div>
          </h3>
        <div class="form-inline">

           <Avatar size={45} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>
        </div>
      </nav>
      </>
  );
}

export default AppHeader;
