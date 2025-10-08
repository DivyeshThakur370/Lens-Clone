"use client";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import { SearchContext } from "../Context/UseContext";
import { SignUp } from "../Auth/SignUp";
import axios from "axios";
import { useLogin } from "../../Hooks/useLogin";

export const Navigation = () => {
  const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const { user } = useLogin()

  const isCloseSignup = () => {
    setisSignup(false);
  };

  const isCloseSignin = () => {
    setisLogin(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const { setSearchData } = useContext(SearchContext);

  return (
    <div>
      <header className="font-sans">
        {/* Top bar - hidden on screens smaller than lg (992px) */}
        <div className="hidden lg:flex justify-between px-5 py-2.5 bg-gray-100 text-sm">
          <div className="flex space-x-2 cursor-pointer flex-grow">
            <p>Do More, Be More |</p>
            <p>Tryin3D |</p>
            <p>StoreLocator |</p>
            <p>Singapore |</p>
            <p>UAE |</p>
            <p>John Jacobs |</p>
            <p>Aqualens |</p>
            <p>Cobrowsing |</p>
            <p>Engineering Blog |</p>
            <p>Partner With Us </p>
          </div>
          <div className="flex space-x-5">
            {user?.role === "admin" && (
              <Link
                to={"/admin"}
                className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
              >
                Admin Pannel
              </Link>
            )}
            <p>Contact Us</p>
          </div>
        </div>

        {/* Main bar - responsive layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-5 py-2.5 bg-white border-b border-gray-200 sm:px-5 max-sm:px-2.5">
          <div className="flex items-center max-sm:w-full max-sm:justify-start">
            <Link to={"/"}>
              <img
                src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                alt="Lenskart Logo"
                className="h-10"
              />
            </Link>
            <span className="ml-2 text-center max-sm:hidden">
              1800-202-4444
            </span>
          </div>

          <div className="max-sm:w-full max-sm:mt-2.5 sm:flex-1 sm:mx-4">
            <input
              type="text"
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full sm:w-96 md:w-80 lg:w-96 px-2.5 py-2.5 border border-gray-300 rounded"
            />
          </div>

          <div className="flex space-x-5 max-sm:mt-2.5 max-sm:justify-between max-sm:w-full max-sm:space-x-0">
            <span className="cursor-pointer text-gray-700 text-sm">
              Track Order
            </span>
            {user ? (
              <>
                <span
                  onClick={handleLogout}
                  className="cursor-pointer text-gray-700 text-sm"
                >
                  Logout
                </span>
              </>
            ) : (
              <>
                <span className="cursor-pointer text-gray-700 text-sm">
                  <span onClick={() => setisLogin(!isLogin)}>Sign In </span>
                  <span>&</span>
                  <span onClick={() => setisSignup(!isSignup)}> Sign up</span>
                </span>
              </>
            )}

            <Link
              to="/AddToCard"
              className="text-gray-700 text-sm no-underline"
            >
              Cart
            </Link>
          </div>
        </div>

        {/* Bottom bar - hidden on screens smaller than lg (992px) */}
        <div className="hidden lg:flex justify-between items-center bg-white w-full py-5">
          <div className="flex justify-center">
            <Link
              to={"/eyeglassespage"}
              className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
            >
              EYEGLASSES
            </Link>
            <Link
              to={"/screenglasses"}
              className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
            >
              SCREEN GLASSES
            </Link>
            <Link
              to={"/kidsglasses"}
              className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
            >
              KIDS GLASSES
            </Link>
            <Link
              to={"/contactlenses"}
              className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
            >
              CONTACT LENSES
            </Link>
            <Link
              to={"/sunglasses"}
              className="mx-4 text-gray-700 no-underline text-sm hover:text-gray-900"
            >
              SUNGLASSES
            </Link>
          </div>
          <div className=" flex">
            <img
              src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
              alt=""
              className="h-10 mx-1.5"
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
              alt=""
              className="h-10 mx-1.5"
            />
            <img
              src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
              alt=""
              className="h-10 mx-1.5"
            />
          </div>
        </div>

        {/* Conditional modals */}
        {isLogin ? <SignIn isOpen={isLogin} onClose={isCloseSignin} /> : ""}
        {isSignup ? <SignUp isOpen={isSignup} onClose={isCloseSignup} /> : ""}
      </header>
    </div>
  );
};
