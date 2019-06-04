import React, { Component } from "react";
import {
  Comment,
  Tooltip,
  Avatar,
  Timeline,
  Tag,
  Button,
  Input,
  DatePicker
} from "antd";
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
            <div
              style={{
                border: "inset",
                borderColor: "white",
                paddingLeft: "50px"
              }}
              key={post.id}
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
  onChange = (date, dateString) => {
    const newDate = date.toDate();
    this.setState({
      date: newDate
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            marginBottom: "10px",
            marginRight: "20px"
          }}
        >
          <h1 style={{ color: "grey", textAlign: "center" }}>
            Trouver une destination
          </h1>
          <Input
            name="villeD"
            style={inputStyle}
            placeHolder="ville de départ"
          />
          <Input
            name="villeA"
            style={inputStyle}
            placeHolder="ville d'arrivée"
          />
          <DatePicker onChange={this.onChange} style={inputStyle} />
          <Button type="primary" icon="search">
            Search
          </Button>
        </div>
        {this.state.pub}
      </div>
    );
  }
}
const inputStyle = {
  width: "300px",
  margin: "5px"
};
