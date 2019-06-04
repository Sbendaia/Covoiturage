import React, { Component } from "react";
import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import firebase from "../../config/config";
class Mesposts extends Component {
  constructor() {
    super();
    this.state = { visible: false, pub: [] };
  }

  componentWillMount = () => {
    const { auth } = this.props;
    const db = firebase.firestore();
    console.log(auth.uid);
    db.collection("posts")
      .where("authorFirstName", "==", "siham")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc);
          // return (
          //   <div
          //     style={{
          //       border: "inset",
          //       borderColor: "white",
          //       paddingLeft: "50px"
          //     }}
          //   >
          //     <Comment
          //       author={<a>{doc.authorFirstName}</a>}
          //       avatar={
          //         <Avatar
          //           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          //           alt="Han Solo"
          //         />
          //       }
          //       content={
          //         <div>
          //           <br />
          //           <Timeline>
          //             <Timeline.Item>{doc.villeD}</Timeline.Item>
          //             <Timeline.Item>{doc.villeA}</Timeline.Item>
          //           </Timeline>
          //           <div>
          //             {" "}
          //             <Tag color="magenta">nombre de siége{doc.nbSiege}</Tag>
          //             <Tag color="magenta">Autoroute:{doc.autoroute}</Tag>
          //           </div>
          //           <br />
          //         </div>
          //       }
          //       datetime={
          //         <div>
          //           <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          //             <span>{moment().fromNow()}</span>
          //           </Tooltip>
          //         </div>
          //       }
          //     />
          //   </div>
          // );
        });
      });
  };
  render() {
    return <div>{this.state.pub}</div>;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Mesposts);
