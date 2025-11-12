import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useState } from "react";
import useSpecialAxios from "../hooks/useSpecialAxios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import NoBooks from "./NoBooks";
import { motion } from 'framer-motion';

const AddMyBooks = () => {
const navigate=useNavigate()
    const {user}=use(AuthContext)
    const [book,setBook]=useState([])
    const specialaxios=useSpecialAxios()
    useEffect(()=>{
specialaxios
  .get(`/booksByUser?email=${user?.email}`)
  .then((data) => setBook(data.data));
    },[user,specialaxios])

    const deleteHandler=(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning!!",
  showCancelButton: true,
  confirmButtonColor: "#3085d6!",
  cancelButtonColor: "#d33!",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    specialaxios.delete(`/booksByUser/${id}`).then(data=>{console.log(data)
      const remainingData=book.filter(data=>data._id != id)
      setBook(remainingData);
    })
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
  }
});
    }
  return (
    <div className="w-11/12 mx-auto my-24 ">
      {book.length === 0 ? (
        <NoBooks />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <motion.table
      initial={{ opacity: 0, x: -50 }} // start left and invisible
      animate={{ opacity: 1, x: 0 }}   // move to original position and fade in
      transition={{ duration: 1, ease: "easeOut" }}  className="table w-full text-sm md:text-base font-semibold">
            {/* table head */}
            <thead className="text-[#FAC921] font-black md:text-xl ">
              <tr>
                <th>Img</th>
                <th>Title</th>
                <th>Author</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {book.map((book) => (
                <tr key={book._id} className="">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-10 w-10">
                          <img src={book?.coverImage} alt="Book cover" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{book?.title}</td>
                  <td>{book?.author}</td>
                  <td>
                    <div className="flex flex-wrap justify-center gap-2 items-center">
                      <button
                        onClick={() => navigate(`/update-book/${book._id}`)}
                        className="btn btn-xs! px-5! text-xs!  font-semibold!  hover:font-bold! hover:scale-105!"
                      >
                        Update
                      </button>
                      <span
                        onClick={() => deleteHandler(book._id)}
                        className="btn btn-xs  border-2 border-red-500 px-5! py-3! hover:bg-red-500! hover:text-black! hover:scale-105!  font-bold!  text-red-500 bg-transparent rounded-xl! "
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      )}
    </div>
  );
};

export default AddMyBooks;

