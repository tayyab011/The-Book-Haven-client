import React from "react";
/* import { BookOpen } from "lucide-react"; */

const NoBooks = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {/* Animated Icon */}
      <div className="animate-bounce bg-yellow-200 p-6 rounded-full shadow-md mb-4">
{/*         <BookOpen className="text-[#FAC921] w-12 h-12" /> */}
      </div>

      {/* Text Content */}
      <h2 className="text-2xl md:text-3xl font-bold ">
        No Books Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like there are no books available right now. Please check back
        later or try adding a new one!
      </p>

      {/* Optional Button */}
      <button
        onClick={() => window.location.reload()}
        className="btn bg-[#FAC921] border-none text-black mt-6 hover:bg-[#e4b91d] transition-all duration-300"
      >
        Refresh
      </button>
    </div>
  );
};

export default NoBooks;
