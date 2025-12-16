import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        alert(JSON.stringify(credentialResponse))
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default google;
