import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { MenuItem } from "rc-menu/lib/MenuItem";
import "./Navmenu.css";
import Editorcomponent from "./Editorcomponent";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Sidemenu extends Component {
  state = {
    collapsed: false,
    collection: [
      {
        Name: "Collection1.1",
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Heading: "WYSIWYG EDITOR",
        subHeading: "Topic name",
        id: "1",
        subDescription:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
      },
      {
        Name: "Collection1.1.1",
        Description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        Heading: "WYSIWYG EDITOR",
        subHeading: "Topic name",
        id: "2",
        subDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        Name: "Collection1.2",
        Description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        Heading: "WYSIWYG EDITOR",
        subHeading: "Topic name",
        id: "3",
        subDescription:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
      }
    ],
    currentContent: ""
  };
  handleMenuClick = item => {
    debugger;
    this.setState({
      currentContent: item
    });
    console.log(this.state.currentContent);
  };
  handleUpdate = data => {
    debugger;
    console.log(data);
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Layout style={{ padding: "15px 0", background: "#fff" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width={200}
            style={{ background: "#fff" }}
          >
            <Menu>
              <MenuItem>WYSIWYG Editor</MenuItem>
              {this.state.collection.map((el, i) => {
                console.log(el.Description);
                return (
                  <Menu.Item key={i} onClick={() => this.handleMenuClick(el)}>
                    {el.Name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <div className="content-heading">
              {this.state.currentContent.Heading}
            </div>
            <Editorcomponent
              editContent={this.state.currentContent}
              handleUpdate={this.handleUpdate}
            />
            {/* <div className="content-description">
              {this.state.currentContent.Description}
            </div>
            <div className="content-heading">
              {this.state.currentContent.subHeading}
            </div>
            <div className="content-description">
              {this.state.currentContent.subDescription}
            </div> */}
          </Content>
        </Layout>
      </div>
    );
  }
}
