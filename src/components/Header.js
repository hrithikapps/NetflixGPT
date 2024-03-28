import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTsearch } from "../utils/GPTslice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTsearch());
  };

  const GPTsearchVisible = useSelector(
    (store) => store.gpt.ToggleGPTsearchView
  );

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/Error");
      });
  };
  return (
    <div className="absolute scrollbar-hide w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="scrollbar-hide w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {GPTsearchVisible && (
            <select
              onChange={handleLanguageChange}
              className="p-2 px-5 m-2 bg-gray-500 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className="rounded-md px-3 py-2 bg-green-700"
          >
            {GPTsearchVisible ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={user.photoUrl}
            alt="Avatar"
          />
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
