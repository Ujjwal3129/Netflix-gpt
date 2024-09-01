import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../Utils/Constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
// import showGptSearch  from "../Utils/gptSlice";

function Header() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when compponent is unmount
    return () => unsubscribe;
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e);

    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute flex  md:justify-between w-screen md:px-36 md:py-3 bg-gradient-to-b from-black z-10 flex-col md:flex-row items-center ">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />

      {user && (
        <div className="flex p-3 gap-10 md:gap-5">
          <img
            className="w-12 h-12 rounded-md "
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="px-3 py-2 bg-red-800 rounded-lg text-white"
          >
            Sign Out
          </button>
          <button
            onClick={handleGPTSearchClick}
            className="px-3 py-2 rounded-lg text-white bg-purple-800 "
          >
            {showGptSearch ? "Home page" : "Gpt Search"}
          </button>
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="px-3 py-2 rounded-lg bg-gray-400 text-black"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
