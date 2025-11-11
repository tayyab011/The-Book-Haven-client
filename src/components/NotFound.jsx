import React from "react";
import { useNavigate } from "react-router";

/* import { BookX } from "lucide-react"; */

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Floating animation */}
      <div className="relative animate-bounce-slow mb-6">
        <div className="bg-[#FAC921]/20 p-8 rounded-full">
     {/*      <BookX className="w-20 h-20 text-[#FAC921]" /> */}
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold text-[#FAC921] drop-shadow-lg">
        404
      </h1>
      <p className="text-gray-300 mt-4 text-lg md:text-xl font-medium">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="btn mt-8 bg-[#FAC921] border-none text-black hover:bg-[#e4b91d] transition-all duration-300"
      >
        Back to Home
      </button>
    </section>
  );
};

export default NotFound;
