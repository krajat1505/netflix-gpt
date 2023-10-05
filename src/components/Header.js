import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { netflixLogo } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { SupportedLanguages } from "../utils/Constants";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        }
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };
  const handleLngChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0  "
        src={netflixLogo}
        alt="NeflixLogo"
      />
      {user && (
        <div className="flex p-2 gap-3 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white "
              onChange={handleLngChange}
            >
              {SupportedLanguages.map((lng) => (
                <option key={lng.identifier} value={lng.identifier}>
                  {lng.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 m-2 px-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          {/* <img
            className="hidden md:block w-12 h-12"
            alt="userIcon"
            src={user?.photoURL}
          /> */}
          <button
            className=" text-white py-2 m-2 px-4 rounded-lg outline"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
