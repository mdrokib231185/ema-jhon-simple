import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user ,] =
    useCreateUserWithEmailAndPassword(auth);

  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handelConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handelCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your passWord didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must should be 6 character");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="from-container">
        <form onSubmit={handelCreateUser}>
          <div>
            <h1 className="from-title">Sign Up</h1>
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input
                onBlur={handelEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                onBlur={handelPasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handelConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="sign up" />
          </div>
          <p>
            Already have an account?{" "}
            <Link className="sign-up-link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
