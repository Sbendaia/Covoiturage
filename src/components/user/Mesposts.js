import React, { Component } from "react";
import {
  Comment,
  Tooltip,
  Avatar,
  Timeline,
  Tag,
  Button,
  notification
} from "antd";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions.js";
import firebase from "../../config/config";
class Mesposts extends Component {
  constructor() {
    super();
    this.state = { posts: [], id: [], fetchData: false };
  }

  // componentDidMount = () => {
  //   const { auth } = this.props;
  //   const userId = auth.uid;
  //   const db = firebase.firestore();

  //   if (this.state.fetchData) {
  //     db.collection("posts")
  //       .where("authorId", "==", userId)
  //       .get()
  //       .then(snapshot => {
  //         var result = snapshot.docs.map(doc => {
  //           var data = doc.data();
  //           var id = doc.id;
  //           return [id, data];
  //         });

  //         this.setState({ posts: result });
  //       })
  //       .catch(function(error) {
  //         console.log("Error getting documents: ", error);
  //       });
  //   }
  // };
  render() {
    const { posts } = this.state;
    const { auth } = this.props;
    const userId = auth.uid;
    if (userId && !this.state.fetchData) {
      const { auth } = this.props;
    const userId = auth.uid;
    const db = firebase.firestore();

  
      db.collection("posts")
        .where("authorId", "==", userId)
        .get()
        .then(snapshot => {
          var result = snapshot.docs.map(doc => {
            var data = doc.data();
            var id = doc.id;
            return [id, data];
          });

            const { auth } = this.props;
    const userId = auth.uid;
    const db = firebase.firestore();

    if (this.state.fetchData) {
      db.collection("posts")
        .where("authorId", "==", userId)
        .get()
        .then(snapshot => {
          var result = snapshot.docs.map(doc => {
            var data = doc.data();
            var id = doc.id;
            return [id, data];
          });

          this.setState({ posts: result });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
        this.setState({ fetchData: true });
    }
    console.log(posts);
    return (
      <div>
        <h1>Gérer votre annonces</h1>
        {posts.map(post => (
          <div
            key={post.createdAt}
            style={{
              borderStyle: "solid",
              borderColor: "#C6C6C6",
              borderCollapse: "collapse",

              paddingLeft: "50px",
              width: "600px",
              marginLeft: "25%"
            }}
          >
            <Button
              type="default"
              icon="delete"
              style={{
                fontSize: "20px",
                marginLeft: "90%",
                marginTop: "20px"
              }}
              onClick={() => {
                console.log("ghjkl");
                const db = firebase.firestore();
                db.collection("posts")
                  .doc(post[0])
                  .delete()
                  .then(function() {
                    const openNotificationWithIcon = type => {
                      notification[type]({
                        message: "Supprimé avec succès.",
                        description:
                          "Merci de nous avoir  contacter !  nous vous répondons dans les plus brefs délais."
                      });
                    };
                    openNotificationWithIcon("success");
                  })
                  .catch(function(error) {
                    console.error("Error removing document: ", error);
                  });
              }}
            />
            <Comment
              author={<a>{post[1].authorFirstName}</a>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <div>
                  <br />
                  <Timeline style={{ height: "60px" }}>
                    <Timeline.Item>{post[1].villeD}</Timeline.Item>
                    <Timeline.Item>{post[1].villeA}</Timeline.Item>
                  </Timeline>
                  <div>
                    {" "}
                    <Tag color="magenta">
                      Nombre de siége : {post[1].nbSiege}
                    </Tag>
                    <Tag color="magenta">Autoroute : {post[1].autoroute}</Tag>
                    <Tag color="magenta">Prix : {post[1].prix} DH</Tag>
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
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mesposts);
