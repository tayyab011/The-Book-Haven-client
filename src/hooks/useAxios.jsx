import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-book-heavens.vercel.app",
});

const useAxios = () => {
  return instance;
};
export default useAxios;
