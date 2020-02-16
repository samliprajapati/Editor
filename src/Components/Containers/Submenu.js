import React, { Component } from "react";
import { Icon, Menu } from "antd";
import { MenuItem } from "rc-menu/lib/MenuItem";
import "./Navmenu.css";
export default class Submenu extends Component {
  render() {
    return (
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "20px" }}
        >
          <MenuItem>All</MenuItem>
          <MenuItem>Board</MenuItem>
          <MenuItem>Graph</MenuItem>
          <MenuItem>Recent</MenuItem>
          <MenuItem>
            <Icon type="more" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
