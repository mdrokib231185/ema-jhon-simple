import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {useAuthState} from'react-firebase-hooks/auth'



const Shipping = () => {
  const [user] = useAuthState(auth)
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [phone, setPhone] = useState("");
      const [error, setError] = useState("");
      const [password, setPassword] = useState("");

       

        const handelEmailBlur = (event) => {
          setName(event.target.value);
        };
        const handelNameBlur = (event) => {
          setEmail(event.target.value);
        };
        const handelAddressBlur = (event) => {
          setAddress(event.target.value);
        };

        const handelPhoneBlur = (event) => {
          setPhone(event.target.value);
        };
        const handelPasswordBlur = (event) => {
          setPassword(event.target.value);
        };

      
      const handelShippingUser = (event) => {
        event.preventDefault();

        const shipping ={name, email, phone, address}
        
      };
      return (
        <div>
          <div className="from-container">
            <form onSubmit={handelShippingUser}>
              <div>
                <h1 className="from-title">Shipping Information </h1>
                <div className="input-group">
                  <label htmlFor="">Name</label>
                  <input
                    onBlur={handelNameBlur}
                    type="text"
                    name="name"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Email</label>
                  <input
                    value={user?.email} readOnly
                    type="Email"
                    name="Email"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Address</label>
                  <input
                    onBlur={handelAddressBlur}
                    type="text"
                    name="address"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Phone Number</label>
                  <input
                    onBlur={handelPhoneBlur}
                    type="number"
                    name="number"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password"> Password</label>
                  <input
                    onBlur={handelPasswordBlur}
                    type="password"
                    name="password"
                    id=""
                    required
                  />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <input className="form-submit" type="submit" value="Shipping" />
              </div>
            </form>
          </div>
        </div>
      );
};

export default Shipping;