import { Menu, message, Modal } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CarFilled,
  EnvironmentFilled,
  SkinFilled,
  ExclamationCircleOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { Admin } from "../services/api";

function Sidebar() {
  const history = useHistory();
  const location = useLocation();
  const { confirm } = Modal;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function showConfirm() {
    confirm({
      title: "Are you sure ?",
      icon: <ExclamationCircleOutlined />,

      okText: "Log out",
      content: "You will be redirected to Login Page",
      onOk() {
        try {
          Admin.logOut();
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          message.warning("Logged out!");
          setIsLoggedIn(false);
        } catch (error) {
          console.log(error);
        }
      },
      onCancel() {
        history.push(`${location.pathname}`);
      },
    });
  }

  if (isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  return (
    <>
     
      <Menu
        style={{ height: "100vh"}}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={location.pathname}
        selectedKeys={[location.pathname]}
      >
        <h1 style={{textAlign:"center",color:'white',padding:"0px 0px"}}>
          
          <img src='./logo.png' height='150px' width='auto'/>
        </h1>
        <Menu.Item key="/app" icon={ <BarChartOutlined /> } >
          <Link to="/app">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/app/supports" icon={<TeamOutlined />}>
          <Link to="/app/supports">Shop</Link>
        </Menu.Item>
        <Menu.Item key="/app/departments" icon={<AppstoreOutlined />}>
          <Link to="/app/departments">Stock</Link>
        </Menu.Item>

        <Menu.Item key="/app/drivers" icon={<SkinFilled />}>
          <Link to="/app/drivers">Items</Link>
        </Menu.Item>
        <Menu.Item key="/app/students" icon={<TeamOutlined />}>
          <Link to="/app/students">Users</Link>
        </Menu.Item>
       

        <Menu.Item
       
          danger
          onClick={() => showConfirm()}
          defaultActiveFirst
          className
          style={{
            marginTop: '"15px"',

            fontSize: "1.2rem",
          }}
          icon={<LogoutOutlined />}
        >
          <Link >LogOut</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebar;
