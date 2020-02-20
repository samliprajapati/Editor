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

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

class Editorcomponent extends Component {
  constructor(props) {
    super(props);
    // const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
    // const contentBlock = htmlToDraft(html);
    // if (contentBlock) {
    //   const contentState = ContentState.createFromBlockArray(
    //     contentBlock.contentBlocks
    //   );
    // const editorState = EditorState.createWithContent(contentState);
    this.state = {
      editorState: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.props);
    const { editContent } = this.props;
    if (editContent.Description !== nextProps.editContent.Description) {
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(nextProps.editContent.Description)
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

  render() {
    const { editorState } = this.state;
    // const htmlBody = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    return (
      <div>
        {this.props.editContent.Description && (
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        )}
        <Button onClick={() => this.props.handleUpdate(editorState)}>
          update
        </Button>
      </div>
    );
  }
}
export default Editorcomponent;
