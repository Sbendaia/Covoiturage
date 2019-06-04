import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <div>
      <Link className="navButton" to="/signin">
        <Icon type="edit" /> S'identifier
      </Link>

      <Link className="navButton" to="/signup">
        <Icon type="user" /> S'inscrire
      </Link>
    </div>
  );
};

export default SignedOutLinks;
