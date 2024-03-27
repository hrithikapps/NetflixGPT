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
    <div className="scrollbar-hide absolute py-2 px-8 z-10 top-0 bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-44 scrollbar-hide" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex py-2 px-3 justify-center items-center">
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
          <img src={user.photoUrl} alt="Avatar" />
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
