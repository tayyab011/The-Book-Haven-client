import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useState } from "react";
import useSpecialAxios from "../hooks/useSpecialAxios";
import { useNavigate } from "react-router";

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

  return (
    <div className="w-11/12 mx-auto my-8">
      {/* responsive wrapper */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table w-full text-sm md:text-base">
          {/* table head */}
          <thead className="bg-pink-900 text-pink-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {book.map((book) => (
              <tr key={book._id} className="hover:bg-pink-50 transition">
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
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => navigate(`/update-book/${book._id}`)}
                      className="btn btn-xs sm:btn-sm bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button className="btn btn-xs sm:btn-sm bg-red-500 text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddMyBooks;

