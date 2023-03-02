import { React} from "react";

import { NavLink} from "react-router-dom";
import "./Login.css";

// function for logins
export default function Login(props) {
 


// login form
  return (
    <>
      <section className="login">
        <div className="center">
          <div className="square">
            <div>
              <form >
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                  <label className="label">
                   
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    defaultValue={props.userEmail}
                    onChange={props.handleEmail}
                  />
                </div>
                <div className="form-group">
                  <label className="label">
                   
                  </label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    defaultValue={props.userPassword}
                    onChange={props.handlePass}
                  />
                </div>
                <div className="form-button">
                  <input
                    className="form-submit"
                    type="submit"
                    defaultValue="Login"
                    onClick={props.LoginUser}
                  />
                </div>
              </form>
              <div className="createAccount">
              
                <NavLink to="/signup" className="createAccountText">
                  Create an account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


