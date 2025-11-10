import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { Link, useNavigate } from 'react-router';

const AllBooks = () => {
  const [sort,setSort]=useState("")
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

const sortHandler = async (data) => {
  if (data === "lowertoupper") {
    setSort("Low - High");

await fetch("http://localhost:5050/booksSortedAssending")
  .then((res) => res.json())
  .then((data) => console.log("after sorting", setBook(data.result)));
  
  }

  if (data === "uppertolower") {
    setSort("High-Low");
 await fetch("http://localhost:5050/booksSortedDissending")
   .then((res) => res.json())
   .then((data) => console.log("after sorting", setBook(data.result)));
  }  
}
    return (
      <div className={`w-11/12 mx-auto  my-5 overflow-x-auto `}>
        <div className="overflow-x-auto w-full">
          <div className="flex justify-between">
            <h1>All Books</h1>

            <div className="dropdown dropdown-bottom dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1">
                sort : {sort ? sort : null}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
              >
                <li onClick={() => sortHandler("lowertoupper")}>
                  <a>Low-High</a>
                </li>
                <li onClick={() => sortHandler("uppertolower")}>
                  <a>High-Low</a>
                </li>
              </ul>
            </div>
          </div>
          <table className="table w-full min-w-[600px]">
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
                          <img src={book.coverImage} alt={book.title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.rating}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/boookDetails/${book._id}`)}
                      className="btn btn-xs ui-btn"
                    >
                      details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllBooks;
