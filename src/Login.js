import React, { useState } from "react";
import "./Login.css";
import apple from "./components/amazon.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); //USED FOR REDIRECTION
  const [email, setEmail] = useState(" "); //EMPTY STRING IS USED BECAUSE INPUT IS NOT GOOD TO PUT IN NIL OR FALSE
  const [password, setPassword] = useState(" ");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        //IF SUCCESSFULY CREATED
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={apple} alt="" className="loginLogo" />
      </Link>
      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginSignIn" onClick={signIn} type="submit">
            Sign In
          </button>
          <p>
            By signing-in you agree to amazons-clone conditions of use & sale.
            Please see our privacy Notice
          </p>
          <button className="loginRegister" onClick={register} type="submit">
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
