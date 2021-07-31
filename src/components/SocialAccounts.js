import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialAccounts = () => {
  return (
    <div className="social-container">
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <div className="social-circle">
          <FaGoogle />
        </div>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <div className="social-circle">
          <FaFacebookF />
        </div>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
        <div className="social-circle">
          <FaTwitter />
        </div>
      </a>
      <a href="https://www.vk.com/" target="_blank" rel="noreferrer">
        <div className="social-circle">
          <i className="fab fa-vk"></i>
        </div>
      </a>
    </div>
  );
};

export default SocialAccounts;
