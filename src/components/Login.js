import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "./firebase";

import firebase from "firebase/app";

const Login = () => {
  return (
    <div className="login">
      <div class="card">
        <div class="card-body">
          <h2>Welcome to the Chat App!!</h2>
          <div
            className="login-button google"
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }}
          >
            <GoogleOutlined />
            Sign in using Google
          </div>
          <br></br>
          {/* auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); */}
          <div
            className="login-button facebook"
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
            }}
          >
            <FacebookOutlined />
            Sign in using Facebook
          </div>
        </div>
      </div>
      {/* <a href="https://mythrillfiction.com/" target="_blank"></a> */}
    </div>
  );
};

export default Login;
