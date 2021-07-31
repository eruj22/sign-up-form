import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalPrivacy = ({ closeModalPrivacy, isModalPrivacyOpen }) => {
  return (
    <div className={`${isModalPrivacyOpen ? "modal-open modal" : "modal"}`}>
      <div className="modal-container">
        <h2>Modal Privacy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          consequuntur, fuga placeat blanditiis ipsum sint. Quaerat culpa
          repellendus quia dicta laboriosam? Unde placeat reprehenderit
          architecto accusantium, perspiciatis labore aspernatur consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam
          totam, dolorem quos porro reprehenderit?
        </p>
        <b className="modal-close-btn" onClick={closeModalPrivacy}>
          <FaTimes />
        </b>
      </div>
    </div>
  );
};

export default ModalPrivacy;
