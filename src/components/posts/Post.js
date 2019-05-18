import React, { Component } from "react";
import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
import moment from "moment";

export default class Post extends Component {
  constructor() {
    super();
    this.state = { visible: false, pub: [] };
  }

  componentWillMount = () => {
    fetch(
      "https://us-central1-carpoolingproject-b98da.cloudfunctions.net/postsAPI"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let posts = data.map(post => {
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
                    <div>
                      {" "}
                      <Tag color="magenta">nombre de siége{post.nbSiege}</Tag>
                      <Tag color="magenta">Autoroute:{post.autoroute}</Tag>
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
        });
        this.setState({ pub: posts });
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

  render() {
    return <div>{this.state.pub}</div>;
  }
}
