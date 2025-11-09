import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { Link, useNavigate } from 'react-router';

const AllBooks = () => {
    const navigate=useNavigate()
    const axiosUse=useAxios()
    const [book,setBook]=useState([])
useEffect(() => {
  const fetchBooks = async () => {
    try {
      const bookData = await axiosUse.get("/books");
      console.log(bookData?.data?.result);
      setBook(bookData?.data?.result);
    } catch (error) {
      console.error(error); 
    }
  };

  fetchBooks();
}, [axiosUse]);


    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {book.map((book) => (
              <tr key={book._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={book.coverImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <th>
                  <button
                    onClick={() => navigate(`/boookDetails/${book._id}`)}
                    className="btn  btn-xs ui-btn "
                  >
                    <span> details</span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllBooks;
