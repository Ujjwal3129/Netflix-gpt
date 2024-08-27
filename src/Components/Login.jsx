import React, { useState } from "react";
import Header from "./Header";

function Login() {

  const [signInForm, setSignInForm]=useState(true);

  const toggleSignInForm = ()=>{
    setSignInForm(!signInForm);
  }


  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt=""
        />
      </div>

      <form className="absolute  bg-[#0D0805] bg-opacity-80 p-12 w-1/3  text-center my-12  mx-auto right-0 left-0 text-white ">
        <h2 className="font-bold text-3xl">{signInForm ? "Login": "Sign up"}</h2>
        {!signInForm && (
          <input
          type="text"
          placeholder="Full name"
          className="w-full bg-[#0F0F0F] border p-4 my-4   text-md"
        />
        ) }
        <input
          type="text"
          placeholder="Email or Mobile number"
          className="w-full bg-[#0F0F0F] border p-4 my-4   text-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-[#0F0F0F] border p-4"
        />
        <button className="w-full p-4 my-4 bg-red-700">{signInForm ? "Login": "Sign up"}</button>
        <h1 className="py-4">OR</h1>
        <button className="py-4 w-full text-md bg-transparent border">
          Use a sign-in code
        </button>
        <h3 className="py-3">{signInForm ? "Forgot password?" : " "}</h3>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{signInForm ? "New to Netflix? Sign up now.":"Already registered?  Login now"}</p>
        <input type="checkbox" placeholder="Remember me" id="" />
      </form>
    </div>
  );
}

export default Login;
