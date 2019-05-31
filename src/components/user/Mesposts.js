import React, { Component } from "react";
import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
import moment from "moment";
import { connect } from "react-redux";
class Mesposts extends Component {
  constructor() {
    super();
    this.state = { visible: false, pub: [] };
  }

  componentWillMount = () => {
    const { auth } = this.props;
    fetch(
      "https://us-central1-carpoolingproject-b98da.cloudfunctions.net/postsAPI"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let posts = data.map(post => {
          return (
            <div
              style={{ border: "inset", borderColor: "white" }}
              key={post.createdAt}
            >
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
                    <Button
                      type="primary"
                      onClick={() => {
                        console.log("hey");
                        this.setState({
                          visible: true
                        });
                        console.log(this.state.visible);
                      }}
                    >
                      Contact Me
                    </Button>
                    <Modal
                      title="My Phone Number is "
                      visible={this.state.visible}
                      onOk={() => {
                        this.setState({
                          visible: false
                        });
                      }}
                      onCancel={() => {
                        this.setState({
                          visible: false
                        });
                      }}
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

  render() {
    return <div>{this.state.pub}</div>;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Mesposts);
