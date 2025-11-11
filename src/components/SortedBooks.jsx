import React from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from "framer-motion";
const SortedBooks = ({ sortBooks }) => {
  const navigate=useNavigate()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-12 py-12 flex-1">
      {sortBooks.map((book) => (
        <motion.div
        whileHover={window.innerWidth > 768 ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring"  }} key={book._id} className="card  bg-base-200 shadow-lg">
          <figure className="py-2 bg-white  mx-5 my-5">
            <img className="w-50 h-72" src={book.coverImage} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-black text-xl md:text-2xl">
              {book.title}
              <div className="badge badge-primary badge-xs">
                {" "}
                {book.genre}
              </div>
            </h2>
            <p className="font-semibold">{book?.summary}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => navigate(`boookDetails/${book._id}`)}
                className="btn  btn-xs! md:btn-lg! text-sm! px-6! py-4! md:px-6! md:text-base! hover:scale-105 "
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