import React from "react";
import "./css/animate.css";
import { Fade } from "@mui/material";
export default function Animate() {
  return (
    <Fade in={true}>
      <div className="container">
        <div className="mainDiv">
          <div className="icoHolder bOne">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/bash_gqtpxs.png"
              alt=""
            />
          </div>
          <div className="icoHolder bTwo">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232217/mui_zduuih.png"
              alt=""
            />
          </div>
          <div className="icoHolder bThree">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232218/node_wk3mjt.jpg"
              alt=""
            />
          </div>
          <div className="icoHolder bFour">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/html_ffrtpl.png"
              alt=""
            />
          </div>
        </div>
        <div className="mainDiv2">
          <div className="icoHolder2 bbOne">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/graphql_et0ixo.png"
              alt=""
            />
          </div>
          <div className="icoHolder2 bbTwo">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/typescript_ah0pw4.png"
              alt=""
            />
          </div>
          <div className="icoHolder2 bbThree">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/pyhton_sytdh5.png"
              alt=""
            />
          </div>
          <div className="icoHolder2 bbFour">
            <img
              src="https://res.cloudinary.com/dxir7knlo/image/upload/v1639232216/github_h9s2zg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
