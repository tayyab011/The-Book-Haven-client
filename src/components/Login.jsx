import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import { useState } from 'react';
import Loader from './Loader';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Login = () => {

  const {state}=useLocation()
     const [err, seterr] = useState("");
         const [errpass, seterrpass] = useState("");
    const useAxioss = useAxios();
  const navigate=useNavigate()
 /*  console.log("lo", state); */
        const { login, googleSignin ,loader , setLoader} = use(AuthContext);
 const hndlesubmitLoginBtn = (e) => {
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   const regexEmail = /^[a-z0-9._%+-]+@gmail\.com$/;
if (email.length === 0) {
  seterr("enter your email");
  return;
} else {
  seterr("");
}
if (!regexEmail.test(email)) {
  seterr("invalid email");
  return;
} else {
  seterr("");
}
const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const minLength = /.{6,}/;

if (password.length === 0) {
  seterrpass("enter your password");
  return;
} else {
  seterrpass("");
}
if (!minLength.test(password)) {
  seterrpass("Password must be at least 6 characters long.");
  return;
} else {
  seterrpass("");
}

if (!hasLowercase.test(password)) {
  seterrpass("Password must contain at least one lowercase letter.");
  return;
} else {
  seterrpass("");
}
if (!hasUppercase.test(password)) {
  seterrpass("Password must contain at least one uppercase letter.");
  return;
} else {
  seterrpass("");
}


 login(email, password)
   .then((res) => {
     alert("user login successfull");
     navigate(`${state ? state: "/"}`)
     console.log(res.user);
   })
   .catch((err) => {
     if (err.code === "auth/invalid-credential") {
         toast.error("please enter correct email or password");
          setLoader(false);
     }

     console.log(err.code);
   }); 
 };

 const googleSignInHandler=(e)=>{
    e.preventDefault();
    googleSignin()
      .then((res) => { toast.success("user login successfull");
 const newUser = {
   name: res.user.displayName,
   email: res.user.email,
   photoURL: res.user.photoURL,
 };
 useAxioss
   .post("/users", newUser)
   .then((data) => {
   /*  console.log("after add in  mongodb", data.data) */
  })
   .catch((err) => console.log(err));
        
           navigate(`${state ? state : "/"}`);
      })
      .catch(() => 
        { setLoader(false)
  
         toast.error("something went wrong");
      }
      );
 }

if (loader) {
  return <Loader/>
}else{
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}  
      animate={{ opacity: 1, x: 0 }}   
      transition={{ duration: 1, ease: "easeOut" }}
      initial={{ opacity: 0, x: 50 }}   
      animate={{ opacity: 1, x: 0 }}    
      transition={{ duration: 1, ease: "easeOut" }}
       className="flex justify-center items-center min-h-screen  px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md  shadow-2xl shadow-[#FAC921]! rounded-3xl p-6 sm:p-10">
        <form onSubmit={hndlesubmitLoginBtn}>
          <div className="text-center mb-6">
            <h2 className="md:text-3xl text-2xl  font-bold text-[#FAC921]">
              Welcome Back
            </h2>
            <p className=" text-sm mt-2 font-semibold">
              Sign in to continue your journey
            </p>
          </div>

          {/* Email */}
          <label htmlFor="email" className="font-semibold  block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border rounded-lg px-3 py-2 mb-6 text-sm w-full focus:outline-none focus:border-[#FAC921] focus:bg-white focus:ring-2 focus:ring-[#FAC921]"
          />
          {err && (
            <p className="text-red-400 font-base py-1 text-sm -mt-5 mb-4">
              {err}
            </p>
          )}
          {/* Password */}
          <label htmlFor="password" className="font-semibold  block mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="border rounded-lg px-3 py-2 mb-6 text-sm w-full focus:outline-none focus:border-[#FAC921] focus:bg-white focus:ring-2 focus:ring-[#FAC921]"
          />
          {errpass && (
            <p className="text-red-400 font-ligth  text-sm py-1 -mt-3 mb-4">
              {errpass}
            </p>
          )}
          {/* Forgot Password */}
          <div className="text-right mb-5">
            <a
              href="#"
              className="text-xs font-semibold text-gray-500 hover:text-gray-700"
            >
              Forgot Password?
            </a>
          </div>

          {/* Google Login */}
          <span
            type="button"
            onClick={googleSignInHandler}
            className="flex items-center justify-center gap-2 py-2 px-4 mb-5 w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg shadow-sm transition duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                fill="#F44336"
              ></path>
              <path
                d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                fill="#2196F3"
              ></path>
              <path
                d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                fill="#FFC107"
              ></path>
              <path
                d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                fill="#00B060"
              ></path>
            </svg>
            <span>Sign in with Google</span>
          </span>

          {/* Submit Button */}
          <button type="submit" className="py-2 px-4 w-full hover:scale-105!">
            Log in
          </button>

          {/* Divider + Signup Link */}
          <div className="flex items-center justify-center mt-6">
            <span className="w-1/5 border-b border-gray-300"></span>
            <Link
              to="/register"
              className="text-xs text-gray-500 uppercase hover:underline mx-2"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b border-gray-300"></span>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
};

export default Login;