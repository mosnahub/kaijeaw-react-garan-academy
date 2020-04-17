import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/order">Order</Link></Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
  </div>
)

export default NavBar;