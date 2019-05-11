import React, { Component } from "react";
import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
import moment from "moment";

export default class Post extends Component {
  state = { visible: false };

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
    const { post } = this.props;
    return (
      <div>
        <Comment
          author={<a>{post.authorFirstName}</a>}
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
                <Timeline.Item>{post.villeD}</Timeline.Item>
                <Timeline.Item>{post.villeA}</Timeline.Item>
              </Timeline>
              <p>
                {" "}
                <Tag color="magenta">{post.nbSiege}</Tag>
                <Tag color="magenta">Autoroute:{post.autoroute}</Tag>
              </p>
              <Button type="primary" onClick={this.showModal}>
                Contact Me
              </Button>
              <Modal
                title="My Phone Number is "
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>+212...</p>
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
