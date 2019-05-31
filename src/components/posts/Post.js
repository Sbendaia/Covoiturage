import React, { Component } from "react";
import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
import moment from "moment";

export default class Post extends Component {
  state = {
    visible: false
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

  render() {
    return (
      <div style={{ display: "block" }}>
        <Comment
          author={<a>Siham Ben Daia</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <div>
              <br />
              <Timeline>
                <Timeline.Item>Agadir</Timeline.Item>
                <Timeline.Item>Tiznit</Timeline.Item>
              </Timeline>
              <div>
                {" "}
                <Tag color="magenta">nombre de siége 1</Tag>
                <Tag color="magenta">Autoroute:Oui</Tag>
              </div>
              <br />
              <Button type="primary" onClick={this.showModal}>
                Contact Me
              </Button>
              <Modal
                title="My Phone Number is "
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <span>+212...</span>
              </Modal>
            </div>
          }
          datetime={
            <div>
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            </div>
          }
        />
      </div>
    );
  }
}
