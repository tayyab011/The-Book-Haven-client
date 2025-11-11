import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    return signOut(auth)
      .then(() => toast.success("logout successfull")
    )
      .catch(() => toast.error("somthing went wrong"));
  };
  const updateUsersData=(data)=>{
       setLoader(false);
    return updateProfile(auth.currentUser, data);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const data = {
    register,
    login,
    user,
    googleSignin,
    logout,
    loader,
    setLoader,
    updateUsersData,
    setUser
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
