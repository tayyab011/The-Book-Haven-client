import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Loader from './Loader';
import useAxios from '../hooks/useAxios';
import { auth } from '../firebase/firebase.init';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
    const [err, seterr] = useState("");
       const [errpass, seterrpass] = useState("");
       const [errname, seterrname] = useState("");
  const useAxioss=useAxios();
  const navigate=useNavigate()
    const {
      register,
      googleSignin,
      user,
      loader,
      setLoader,
      updateUsersData,
      setUser,
    } = use(AuthContext);
 console.log(user)
 
    const hndlesubmitBtn=async(e)=>{
        e.preventDefault()
const name =e.target.name.value
const email =e.target.email.value
const photo =e.target.photo.value
const password = e.target.password.value;
const regexEmail = /^[a-z0-9._%+-]+@gmail\.com$/;

if (name.length === 0) {
  seterrname("enter your name");
  return;
} else {
  seterrname("");
}
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


await register(email, password).then(res=>{
  console.log(res.user)
updateUsersData({  displayName:name,photoURL:photo}).then(res=>{
  console.log(res)
  setUser({ ...auth.currentUser });
}).catch(err=>{
  console.log("for update user",err)
})

  toast.success("sign up successfully");
  navigate("/")
  const newUser = {
    name: name,
    email: email,
    photoURL: photo,
  };
useAxioss.post("/users",newUser).then(data=>console.log("after add in  mongodb",data.data)).catch(err=>console.log(err)
)
setLoader(false)
}).catch(err=>{
  
  console.log(err)
})

    }


    const googleSignUpHandler = (e) => {
      e.preventDefault();
      googleSignin()
        .then((res) => {
          
          toast.success("sign up successfully");
          setLoader(false);
           const newUser = {
             name: res.user.displayName,
             email: res.user.email,
             photoURL: res.user.photoURL,
           };
           useAxioss
             .post("/users", newUser)
             .then((data) => {console.log("after add in  mongodb", data.data)
              navigate("/")
             })
             .catch((err) => console.log(err));


setLoader(false);


        })
        .catch(() => {
           setLoader(false);
          toast.error("something went wrong");
         
        });
    };
    if (loader) {
      return <Loader/>
    }else{
    return (
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 shadow-[#FAC921] py-4">
        <div className="w-full max-w-md  shadow-2xl shadow-[#FAC921]! rounded-3xl p-6 sm:p-10">
          <form onSubmit={hndlesubmitBtn}>
            <div className="text-center mb-6">
              <h2 className="md:text-3xl text-2xl  font-bold text-[#FAC921]">
                Create Account
              </h2>
              <p className="font-semibold text-sm mt-2">
                Sign up to get started
              </p>
            </div>

            {/* Name */}
            <label htmlFor="name" className="font-semibold  block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border rounded-lg px-3 py-2 mb-6 text-sm w-full focus:outline-none focus:border-[#FAC921] focus:bg-white focus:ring-2 focus:ring-[#FAC921]"
            />
            {errname && (
              <p className="text-red-400 font-base py-1 text-sm -mt-5 mb-4">
                {errname}
              </p>
            )}
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
            {/* Photo URL */}
            <label htmlFor="photo" className="font-semibold  block mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="border rounded-lg px-3 py-2 mb-6 text-sm w-full focus:outline-none focus:border-[#FAC921] focus:bg-white focus:ring-2 focus:ring-[#FAC921]"
            />

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
              <p className="text-red-400 font-ligth  text-sm py-1 -mt-5 mb-4">
                {errpass}
              </p>
            )}
            {/* Google Signup */}
            <span
              type="button"
              onClick={googleSignUpHandler}
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
              <span>Sign up with Google</span>
            </span>

            {/* Submit */}
            <button type="submit" className="py-2 px-4 w-full hover:scale-105!">
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center mt-6">
              <span className="w-1/5 border-b border-gray-300"></span>
              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase hover:underline mx-2"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b border-gray-300"></span>
            </div>
          </form>
        </div>
      </div>
    );

  }
};

export default Register;