import React from "react";
import ImageMobile from "../assets/image-mobile.jpg";
import ImageDesktop from "../assets/image-desktop.jpg";
import "../style/style.scss";
import Form from "./Form";
import SocialAccounts from "./SocialAccounts";

function App() {
  return (
    <section className="main">
      <div className="wrapper">
        <div className="wrapper-left">
          <h1>Create Account</h1>
          <SocialAccounts />
          <p>or use your email for registration:</p>
          <Form />
        </div>
        <div className="wrapper-right">
          <img src={ImageMobile} className="image-mobile" alt="" />
          <img src={ImageDesktop} className="image-desktop" alt="" />
        </div>
      </div>
    </section>
  );
}

export default App;
