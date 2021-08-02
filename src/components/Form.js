import React, { useState } from "react";
import ModalPrivacy from "./ModalPrivacy";
import ModalTerms from "./ModalTerms";
import useForm from "./useForm";
import validate from "./validateInfo";

const Form = () => {
  const { handleChange, values, handleSubmit, handleCheckbox, errors } =
    useForm(validate);
  const [isModalTermsOpen, setIsModalTermsOpen] = useState(false);
  const [isModalPrivacyOpen, setIsModalPrivacyOpen] = useState(false);

  const openModalTerms = () => {
    setIsModalTermsOpen(true);
  };
  const closeModalTerms = () => {
    setIsModalTermsOpen(false);
  };

  const openModalPrivacy = () => {
    setIsModalPrivacyOpen(true);
  };
  const closeModalPrivacy = () => {
    setIsModalPrivacyOpen(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <small>{errors.name}</small>}
      <input
        type="email"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <small>{errors.email}</small>}
      <input
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <small>{errors.password}</small>}
      <div className="checkbox-container">
        <input type="checkbox" name="checkbox" onChange={handleCheckbox} />
        <label htmlFor="agree">
          I agree to the{" "}
          <b type="button" onClick={openModalTerms}>
            Terms
          </b>{" "}
          and{" "}
          <b type="button" onClick={openModalPrivacy}>
            Privacy Policy
          </b>
        </label>
      </div>
      <br />
      <div className="form-buttons">
        <button
          className="btn btn-full"
          type="submit"
          onClick={() => console.log("Signing up!")}
        >
          Sign Up
        </button>
        <button
          className="btn btn-empty"
          onClick={() => console.log("Signing in!")}
        >
          Sign In
        </button>
      </div>
      <ModalPrivacy
        isModalPrivacyOpen={isModalPrivacyOpen}
        closeModalPrivacy={closeModalPrivacy}
      />
      <ModalTerms
        isModalTermsOpen={isModalTermsOpen}
        closeModalTerms={closeModalTerms}
      />
    </form>
  );
};

export default Form;
