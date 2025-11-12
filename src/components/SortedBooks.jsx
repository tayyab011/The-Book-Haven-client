import React from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from "framer-motion";
const SortedBooks = ({ sortBooks }) => {
  const navigate=useNavigate()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5  gap-y-12 py-12 flex-1">
      {sortBooks.map((book) => (
        <motion.div
          whileHover={window.innerWidth > 768 ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.99 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          key={book._id}
          className="
        card bg-base-200 shadow-lg 
        w-full sm:w-[90%] md:w-[100%] lg:w-[100%] 
        mx-auto hover:shadow-xl transition-all duration-300
      "
        >
          {/* --- IMAGE SECTION --- */}
          <figure className="p-4 bg-white flex justify-center items-center">
            <img
              className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-contain rounded-md"
              src={book.coverImage}
              alt={book.title}
            />
          </figure>

          {/* --- CARD BODY --- */}
          <div className="card-body p-4 sm:p-5">
            <h2 className="card-title font-black text-base sm:text-lg md:text-xl lg:text-2xl flex flex-wrap gap-2">
              {book.title}
              <div
                className="
              badge badge-primary
              text-[10px] sm:text-xs md:text-sm 
              px-2 sm:px-3 md:px-4 
              py-1 sm:py-1.5 md:py-2 
              rounded-full
            "
              >
                {book.genre}
              </div>
            </h2>

            <p className="font-semibold text-sm sm:text-base md:text-lg line-clamp-3">
              {book?.summary}
            </p>

            {/* --- ACTION BUTTON --- */}
            <div className="card-actions justify-end mt-3">
              <button
                onClick={() => navigate(`boookDetails/${book._id}`)}
                className="
              btn btn-primary
              text-xs sm:text-sm md:text-base
              px-3 sm:px-4 md:px-6
              py-1 sm:py-2 md:py-3
              rounded-md
              hover:scale-105 transition-transform duration-200
            "
              >
                See Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SortedBooks;