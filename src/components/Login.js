import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />

      <img
        className="absolute top-0 h-100vh w-100vw"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="BackgroundImage"
      />
      <form className="w-3/12 relative rounded-md p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {!isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {!isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {!isSignIn
            ? "New To Netflix ? Sign Up Now"
            : "Already a User ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
