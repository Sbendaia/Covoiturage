import React from "react";
import { Button } from "antd";
const SignedOutLinks = () => {
  return (
    <div>
      <Button className="btn2" href="/signin">
        Login In
      </Button>
      <Button className="btn1" href="/signup">
        Sign Up
      </Button>
    </div>
  );
};

export default SignedOutLinks;
