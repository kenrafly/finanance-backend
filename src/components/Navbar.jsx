import React from "react";
import { Link, Navigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-black border-b border-amber-300">
      <div className="relative flex flex-col sm:flex-row sm:justify-between container p-5 px-10 sm:items-center">
        <Link
          to="/"
          className="logo text-2xl text-white font-bold hover:cursor-pointer"
        >
          Financial Tracker
        </Link>
        <input class="peer hidden" type="checkbox" id="navbar-open" />
        <label
          class="absolute right-2 mt-1 cursor-pointer text-xl sm:hidden"
          for="navbar-open"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav className="hidden sm:block peer-checked:block bg-gray-800 sm:bg-transparent p-4 sm:p-0 rounded-lg">
          <ul className="flex flex-col sm:flex-row sm:gap-4 sm:items-center gap-2">
            <li className="">
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <SignedOut className="hover:bg-cyan-400 ">
                <div className="flex h-10 rounded-2xl p-3 items-center bg-gray-800 hover:bg-gray-900 hover:scale-110 transition ">
                  <SignUpButton
                    className="text-white justify-center cursor-pointer"
                    mode="modal"
                  />
                </div>
                <div className="flex h-10 rounded-2xl p-3 items-center bg-gray-800 hover:bg-gray-900 hover:scale-110 transition ">
                  <SignInButton
                    className="text-white justify-center cursor-pointer"
                    mode="modal"
                  />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
