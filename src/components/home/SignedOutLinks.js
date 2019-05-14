import React from "react";
import { Button } from "antd";
const SignedOutLinks = () => {
  return (
    <div>
      <Button className="login" href="/signin">
        Login In
      </Button>
      <Button className="signup" href="/signup">
        Sign Up
      </Button>
    </div>
  );
};

export default SignedOutLinks;
