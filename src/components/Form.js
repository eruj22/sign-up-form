import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    console.log("Signing in!");
  };

  const handleSignUp = () => {
    console.log("Signing up!");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="checkbox-container">
        <input type="checkbox" name="agree" id="agree" />
        <label htmlFor="agree">
          I agree to the <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>
        </label>
      </div>
      <br />
      <div className="form-buttons">
        <button className="btn btn-full" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="btn btn-empty" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Form;
