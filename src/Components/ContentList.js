import React, { Component } from "react";
import { Layout, Menu, Icon, Modal, Input, Button } from "antd";
import { MenuItem } from "rc-menu/lib/MenuItem";
import "./Navmenu.css";
import Editorcomponent from "./Editorcomponent";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
const { Content, Sider } = Layout;

export default class ContentList extends Component {
  state = {
    collapsed: false,
    collection: JSON.parse(localStorage.getItem("collection")) || [],
    currentContent: {},
    visible: false,
    name: "",
    editorState: ""
  };
  onEditorStateChange = editorState => {
    this.setState({
      editorState: editorState
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCreate = (name, description, id) => {
    debugger;
    const editText = draftToHtml(convertToRaw(description.getCurrentContent()));
    this.setState(
      {
        collection: [
          ...this.state.collection,
          { name, description: editText, id }
        ],
        visible: !this.state.visible
      },
      () => {
        localStorage.setItem(
          "collection",
          JSON.stringify(this.state.collection)
        );
      }
    );
  };
  handleMenuClick = item => {
    this.setState({
      currentContent: item
    });
    console.log(this.state.currentContent);
  };
  handleUpdate = (data, id) => {
    console.log(data, id);
    this.setState(
      {
        collection: this.state.collection.map(item => {
          return item.id === id ? { ...item, description: data } : item;
        })
      },
      () => {
        localStorage.setItem(
          "collection",
          JSON.stringify(this.state.collection)
        );
      }
    );
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  handlenameChange = e => {
    console.log(e);
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };
  componentDidMount() {
    console.log(this.state.collection);
    console.log(JSON.parse(localStorage.getItem("collection")));
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Modal
          title="Create Content"
          footer={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form>
            name:
            <Input
              name="name"
              placeholder="name"
              onChange={this.handlenameChange}
            ></Input>
            description:
            <Editor
              editorState={editorState}
              wrapperClassname="demo-wrapper"
              editorClassname="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <Button
              onClick={() =>
                this.handleCreate(
                  this.state.name,
                  this.state.editorState,
                  Date.now()
                )
              }
            >
              Create
            </Button>
          </form>
        </Modal>
        <Layout style={{ padding: "15px 0", background: "#fff" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width={200}
            style={{ background: "#fff" }}
          >
            <Menu>
              <Icon
                type="plus"
                onClick={this.showModal}
                style={{ display: "flex", justifyContent: "flex-end" }}
              />
              <MenuItem>WYSIWYG Editor</MenuItem>
              {this.state.collection.map((el, i) => {
                console.log(el.description);
                return (
                  <Menu.Item
                    key={el.id}
                    onClick={() => this.handleMenuClick(el)}
                  >
                    {el.name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <div classname="content-heading">
              {this.state.currentContent.Heading}
            </div>
            {this.state.collection.length ? (
              <Editorcomponent
                editContent={this.state.currentContent}
                handleUpdate={this.handleUpdate}
              />
            ) : (
              <div>
                <p> There is Nodata create a new data &nbsp;</p>
                <Button onClick={this.showModal}> Create</Button>
              </div>
            )}
          </Content>
        </Layout>
      </div>
    );
  }
}
