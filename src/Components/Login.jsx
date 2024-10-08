import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL, USER_AVATAR } from "../Utils/Constant";

function Login() {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // useRef Hook
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage(null); // Clear any previous error message when toggling
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    setErrorMessage(null); // Clear any previous error message

    // Perform validation
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !signInForm ? fullname.current.value : null // Include full name for sign-up validation
    );

    setErrorMessage(message);

    if (message) return;

    if (!signInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => { 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          setErrorMessage(error.message + " - " + error.code);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute h-screen object-cover"
          src={BG_URL}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-[#0D0805] bg-opacity-80 p-12 w-full md:w-1/3 text-center my-20 md:my-14 mx-auto right-0 left-0 text-white"
      >
        <h2 className="font-bold text-3xl">
          {signInForm ? "Login" : "Sign up"}
        </h2>
        {!signInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full name"
            className="w-full bg-[#0F0F0F] border p-4 my-4 text-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile number"
          className="w-full bg-[#0F0F0F] border p-4 my-4 text-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-[#0F0F0F] border"
        />
        <p className="text-red-500 font-medium text-md">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="w-full p-4 my-4 bg-red-700"
        >
          {signInForm ? "Login" : "Sign up"}
        </button>
        <h1 className="py-4">OR</h1>
        <button className="py-4 w-full text-md bg-transparent border">
          Use a sign-in code
        </button>
        <h3 className="py-3">{signInForm ? "Forgot password?" : " "}</h3>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Login now"}
        </p>
        <input type="checkbox" placeholder="Remember me" id="" />
      </form>
    </div>
  );
}

export default Login;
