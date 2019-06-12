import React, { Component } from "react";
import {
  Comment,
  Tooltip,
  Avatar,
  Timeline,
  Tag,
  Button,
  Input,
  DatePicker,
  notification
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
                borderStyle: "solid",
                borderColor: "#C6C6C6",
                borderCollapse: "collapse",

                paddingLeft: "50px",
                width: "600px",
                marginLeft: "25%"
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
                    <Timeline style={{ height: "30px" }}>
                      <Timeline.Item>{post.villeD}</Timeline.Item>
                      <Timeline.Item>{post.villeA}</Timeline.Item>
                    </Timeline>
                    <div>
                      {" "}
                      <Tag color="magenta">
                        Nombre de siége : {post.nbSiege}
                      </Tag>
                      <Tag color="magenta">Autoroute : {post.autoroute}</Tag>
                      <Tag color="magenta">Prix : {post.prix} DH</Tag>
                    </div>
                    <br />
                    <Button
                      type="primary"
                      onClick={() => {
                        notification.open({
                          message: "Notification Title",
                          description:
                            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                          onClick: () => {
                            console.log("Notification Clicked!");
                          }
                        });
                      }}
                    >
                      Contacter
                    </Button>
                    ,
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
            marginBottom: "50px",
            marginLeft: "8%"
          }}
        >
          <h1 style={{ color: "grey", textAlign: "center" }}>
            Trouver une destination
          </h1>
          <Input
            name="villeD"
            style={inputStyle}
            placeHolder="Ville de départ"
          />
          <Input
            name="villeA"
            style={inputStyle}
            placeHolder="Ville d'arrivée"
          />
          <DatePicker
            onChange={this.onChange}
            style={inputStyle}
            placeHolder="Choisir une date "
          />
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
