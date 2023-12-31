import React, { useRef, useState } from "react";
import Header from "./Header";
import { Form, useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //signIn/signUp logic
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            // eslint-disable-next-line no-restricted-globals
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Neflix"
        />
      </div>
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 right-0 left-0 mx-auto text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 w-full bg-gray-700 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input
          ref={password}
          type="text"
          placeholder="Password "
          className="p-4 my-4 w-full bg-slate-700  rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2g">{errorMessage}</p>
        {/* {!isSignInForm && (
              <input
                type="text"
                placeholder="Confirm Password "
                className="p-4 my-4 w-full bg-gray-700 rounded-lg "
              />
            )} */}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </Form>
    </div>
  );
};
