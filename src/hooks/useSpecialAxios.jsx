import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useNavigate } from "react-router";

const specialInstance = axios.create({
  baseURL: "https://the-book-heavens.vercel.app",
});

const useSpecialAxios = () => {
  const navigate = useNavigate();
  const { user, logout } = use(AuthContext);
  useEffect(() => {
    //for request
    if (user?.accessToken) {
      const requestInterceptor = specialInstance.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );
      //for response
      const responseInterceptor = specialInstance.interceptors.response.use(
        (res) => {
          return res;
        },
        (err) => {
          const status = err.status;
          if (status === 401 || status === 403) {
            logout().then(() => {
              navigate("/login");
            });
          }
          console.log("special Axios", err);
        }
      );

      //for unmount
      return () => {
        specialInstance.interceptors.request.eject(requestInterceptor);
        specialInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, logout, navigate]);
  return specialInstance;
};

export default useSpecialAxios;
