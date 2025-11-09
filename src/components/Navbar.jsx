import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
    const { user, logout } = use(AuthContext);

 

        const link = (
          <>
            <li>
              <NavLink> Home</NavLink>
            </li>
            <li>
              <NavLink to="/allBooks"> All Books</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/addBook"> Add Book</NavLink>
                </li>
                <li>
                  <NavLink> My Books</NavLink>
                </li>
              </>
            )}
          </>
        );
    
    return (
      <div>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <a onClick={logout} className="btn mr-4">
                  Logout
                </a>
                <div className="dropdown dropdown-hover  cursor-pointer">
                  <img
                    src={user?.photoURL}
                    alt=""
                    tabIndex={0}
                    role="button"
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 w-40 rounded-box z-1 p-2 shadow-sm right-12"
                  >
                    {user?.displayName}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn ui-btn mr-4">
                
                  <span> Login</span>
                </NavLink>
                <NavLink to="/register" className="btn ui-btn">
                  <span> Register</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;