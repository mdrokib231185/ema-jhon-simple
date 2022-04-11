import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const logOut = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/Order">Order</Link>
        <Link to="/inventroy">Inventroy</Link>
        <Link to="/About">About</Link>
        
        {user ? (
          <button onClick={logOut}>sign Out</button>
        ) : (
          <Link to="login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
