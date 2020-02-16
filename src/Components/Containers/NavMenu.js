import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Input,
  Avatar,
  Badge,
  Dropdown,
  Button
} from "antd";
import "antd/dist/antd.css";
import { MenuItem } from "rc-menu/lib/MenuItem";
import "./Navmenu.css";
import ProfileDropdown from "./ProfileDropdown";
import SubMenu from "./Submenu";
import Sidemenu from "./Sidemenu";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
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
