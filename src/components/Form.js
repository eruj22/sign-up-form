import React, { useState } from "react";
import ModalPrivacy from "./ModalPrivacy";
import ModalTerms from "./ModalTerms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(4).max(50),
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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

  const handleSignIn = () => {
    console.log("Signing in!");
  };

  const handleSignUp = () => {
    console.log("Signing up!");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      <small>{errors.name?.message}</small>
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
      />
      <small>{errors.email?.message}</small>
      <input
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />
      <small>{errors.password?.message}</small>
      <div className="checkbox-container">
        <input type="checkbox" name="agree" id="agree" />
        <label htmlFor="agree">
          I agree to the <span onClick={openModalTerms}>Terms</span> and{" "}
          <span onClick={openModalPrivacy}>Privacy Policy</span>
        </label>
      </div>
      <br />
      <div className="form-buttons">
        <button className="btn btn-full" type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="btn btn-empty" onClick={handleSignIn}>
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
