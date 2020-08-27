import React from "react";

import "./sign-in-and-sign-up.scss";
import SignIn from "../signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
