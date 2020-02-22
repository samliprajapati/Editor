import React, { Component } from "react";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "antd";
import draftToHtml from "draftjs-to-html";

class Editorcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: "",
      id: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.props);
    const { editContent } = this.props;
    const x = nextProps.editContent.id;
    console.log(x);
    if (editContent.description !== nextProps.editContent.description) {
      this.setState({
        id: x,
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(nextProps.editContent.description)
          )
        )
      });
    }
  }
  onEditorStateChange = editorState => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    this.setState({
      editorState: editorState
    });
  };
  handleSubmit = editorState => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    const editText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.handleUpdate(editText, this.state.id);
  };
  render() {
    const { editorState } = this.state;
    console.log(this.props.editContent);
    return (
      <div>
        {this.props.editContent.description && (
          <div>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <Button onClick={() => this.handleSubmit(editorState)}>
              update
            </Button>
          </div>
        )}
      </div>
    );
  }
}
export default Editorcomponent;
