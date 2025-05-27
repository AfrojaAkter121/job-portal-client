import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contex/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Navbar = () => {
  const { user } = use(AuthContext);

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
        console.log('user Logout')
    }).catch(err => {
        console.log(err)
    })
  }

  const links = (
    <div className="flex space-x-5">
      <NavLink className="" to="/">
        Home
      </NavLink>
      {
        user && <>
        <NavLink className="" to="/myApplications">My Application</NavLink>
        </>
      }
    </div>
  );

  return (
    <div className=" flex justify-between items-center px-4 md:px-12 py-3">
      <div className="flex items-center space-x-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-red-300 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-red-300 text-lg menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="h-grad md:text-2xl font-bold">Job Portal</a>
      </div>

      <div className="hidden lg:flex">
        <ul className="text-red-200 text-lg menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="">
        {user ? (
          <button onClick={handleLogout} className="btn-grad">Log Out</button>
        ) : (
          <div className="flex items-center gap-3">
            <Link to='/register' className="text-red-100 text-lg underline">Register</Link>
            <Link to="/login" className="btn-grad">
              Sing In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
