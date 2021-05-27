import React, { useState } from "react";
import Header from "../components/ui/Header";
import axios from "axios";
import Cookies, { set } from "js-cookie";
const Builder = (props) => {
  const [err, setErr] = useState("");

  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/googlelogin",
      data: {
        tokenId: response.tokenId,
      },
    }).then((response) => {
      console.log(response);
      const { accessToken, refreshToken } = response.data;
      Cookies.set("access", accessToken);
      Cookies.set("refresh", refreshToken);
    });
  };
  const responseErrorGoogle = (response) => {};

  const protect = async (e) => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);
    if (!accessToken) {
    } else {
      await requestLogin(accessToken, refreshToken);
    }
  };
  const hasAccess = async (accessToken, refreshToken) => {
    if (!refreshToken) {
      return null;
    }
    if (accessToken == undefined) {
      accessToken = await refresh(refreshToken);
      return accessToken;
    }
    return accessToken;
  };
  const requestLogin = async (accessToken, refreshToken) => {
    console.log(accessToken, refreshToken);
    return new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:8000/api/protected",
          {},
          { headers: { authorization: `Bearer ${accessToken}` } }
        )
        .then(async (data) => {
          if (data.data.success == false) {
            if (data.data.message == "User not authenticated") {
              //Set errr message to login again
              setErr("Login Again");
            } else if (data.data.message == "Access token expired") {
              const accessToken = await refresh(refreshToken);
              return await requestLogin(accessToken, refreshToken);
            }
            resolve(false);
          } else {
            //protected route has been accessed response can be used
            setErr("Protected route accessed");
            resolve(true);
          }
        });
    });
  };
  const refresh = (refreshToken) => {
    console.log("Refreshing Token");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5000/api/renewAccessToken", {
          token: refreshToken,
        })
        .then((data) => {
          if (data.data.success === false) {
            setErr("Login Again");
            resolve(false);
          } else {
            const { accessToken } = data.data;
            Cookies.set("access", accessToken);
            resolve(accessToken);
          }
        });
    });
  };

  return (
    <Header
      responseSuccessGoogle={responseSuccessGoogle}
      responseErrorGoogle={responseErrorGoogle}
    />
  );
};
export default Builder;
