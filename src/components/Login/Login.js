import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);


  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, {replace: true});
  }

  const handelUserSignIn = (event) => {
    event.preventDefault();
    

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="from-container">
      <form onSubmit={handelUserSignIn}>
        <div>
          <h1 className="from-title">Login</h1>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input onBlur={handelEmailBlur} type="email" name="" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input onBlur={handelPasswordBlur} type="password" name="" id="" />
          </div>

          <p style={{ color: "red" }}>{error?.message}</p>
          <input className="form-submit" type="submit" value="Login" />
        </div>
        <p>
          New to Ema-jhon?{" "}
          <Link className="sign-up-link" to="/signup">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
