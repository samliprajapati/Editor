import React, { Component } from "react";
import {
  Layout,
  Menu,
  Icon,
  Input,
  Avatar,
  Badge,
  Dropdown,
  Switch
} from "antd";
import "antd/dist/antd.css";
import { MenuItem } from "rc-menu/lib/MenuItem";
import "./Navmenu.css";
import ProfileDropdown from "./ProfileDropdown";
import SubMenu from "./Submenu";
import Sidemenu from "./Sidemenu";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const menu = (
  <Menu>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Menu.Item>Dark mode</Menu.Item>
      <Switch defaultChecked onChange={onChange} />
    </div>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Divider />
    <Menu.Item>What's new</Menu.Item>
    <Menu.Item>Help</Menu.Item>
    <Menu.Item>Send feedback</Menu.Item>
    <Menu.Item>Hints and shortcuts</Menu.Item>
    <Menu.Divider />
    <Menu.Item>Log out</Menu.Item>
  </Menu>
);

export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px", paddingLeft: "30px" }}
            >
              <Icon type="menu" />
              <MenuItem>
                {" "}
                <Search
                  className="searchInput"
                  placeholder="dfin"
                  onSearch={value => console.log(value)}
                  style={{ width: 400 }}
                />
              </MenuItem>
              <MenuItem className="profile">
                <Icon type="user-add" />
                INVITE TEAM MEMBER
              </MenuItem>
              <MenuItem>
                <Icon type="bell" />
              </MenuItem>
              <MenuItem>
                <Badge count={1}>
                  <Dropdown overlay={menu} placement="bottomLeft">
                    <Avatar
                      style={{
                        color: "white",
                        backgroundColor: "purple",
                        size: "20px"
                      }}
                    >
                      Fl
                    </Avatar>
                  </Dropdown>
                </Badge>
              </MenuItem>
            </Menu>
          </Header>

          <SubMenu />
          <Sidemenu />
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
        ,
      </div>
    );
  }
}
