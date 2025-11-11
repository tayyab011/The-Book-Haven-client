import React, { use, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import "./Nav.css"
const Navbar = () => {
    const { user, logout } = use(AuthContext);
const navigate=useNavigate()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "autumn");
 useEffect(() => {
   const html = document.querySelector("html");
   html.setAttribute("data-theme", theme);
   localStorage.setItem("theme", theme);
 }, [theme]);
        const link = (
          <>
            <li>
              <NavLink to="/" className=""> Home</NavLink>
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
                  <NavLink to="/myBook"> My Books</NavLink>
                </li>
              </>
            )}
          </>
        );
      const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "autumn");
      };

    return (
      <div>
        <div className="navbar shadow-sm bg-base-100">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  text-[20px]"
              >
                {link}
              </ul>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdnlRmPjjoXhfviUTQIUhHQy75GFMT8g_Hw&s"
              className=" w-10 h-10 rounded-full"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[18px]">{link}</ul>
          </div>
          <div className="navbar-end">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle mr-2 md:mr-4"
            />
            {user ? (
              <>
                {/*  <a onClick={logout} className="btn mr-4">
                  Logout
                </a> */}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="user"
                        src={`${
                          user.photoURL
                            ? user?.photoURL
                            : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80"
                        }`}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-center space-y-4"
                  >
                    <li className="text-center">
                      <a className="justify-between  text-center text-base">
                        {user.displayName || "Profile"}
                      </a>
                    </li>

                    <li>
                      <button
                        className="btn  btn-xs! md:btn-xs! text-sm! px-6! py-4! md:px-3! md:text-base! hover:scale-105  "
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="btn  md:mr-4 mr-2  btn-xs! md:btn-lg! text-xs! px-3! md:px-6! md:text-base! hover:scale-105"
                >
                  <span> Login</span>
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="btn  btn-xs! md:btn-lg! text-xs! px-3! md:px-6! md:text-base! hover:scale-105"
                >
                  <span> Register</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;