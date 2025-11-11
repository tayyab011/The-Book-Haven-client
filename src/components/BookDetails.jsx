import React, { use } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import useSpecialAxios from '../hooks/useSpecialAxios';
import { useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const BookDetails = () => {
  const { user } = useContext(AuthContext);

   const navigate = useNavigate();
   const [comment,setComment]=useState([])
  const specialaxios=useSpecialAxios();
  const [data,setData]=useState(null)
  const {id}=useParams();

  
 /*  console.log(id) */
  useEffect(()=>{
specialaxios
  .get(`/books/${id}`)
  .then((data) =>{ 
    setData(data.data.result)
    setComment(data.data.result.comments);
  })
  .catch((err) => console.log(err));
  },[id,specialaxios])

 const commentData =async (e)=>{
e.preventDefault()
const comment=e.target.comment.value;
const newComment = {
  userName: user?.displayName,
  userPhoto: user?.photoURL,
  comment: comment,
  createdAt: new Date(),
};
await specialaxios
  .post(`/books/${id}/comments`, newComment)
  .then((data) => {
   
     setComment((prev) => [...prev , newComment]);
  toast.success("Comment Add Successfull");
   /*  console.log("after comment", data); */
   e.target.reset()
  })
  .catch((err) => toast.error("someting went wrong"));
 }
    return (
      <div>
        <div className="w-11/12 mx-auto my-10">
          <div className="card lg:card-side ">
            <figure className="lg:w-1/2 p-3 shadow">
              <img
                src={data?.coverImage}
                alt=""
                className="w-50 h-80  object-cover rounded-xl"
              />
            </figure>

            <div className="card-body lg:w-1/2 space-y-3">
              <h2 className="card-title md:text-5xl text-3xl  font-black gradient-text">
                {data?.title}
              </h2>
              <p className="gradient-text font-bold md:text-lg text-base">
                {" "}
                {data?.summary}
              </p>

              <div className="">
                <p>
                  <span className="font-black md:text-lg text-base">
                    Author:
                  </span>{" "}
                  <span className="gradient-text font-bold md:text-lg text-base">
                    {data?.author}
                  </span>
                </p>
                <p>
                  <span className="font-black md:text-lg text-base">
                    Genre:
                  </span>{" "}
                  <span className="gradient-text font-bold md:text-lg text-base">
                    {" "}
                    {data?.genre}
                  </span>
                </p>
                <p>
                  <span className="font-black md:text-lg text-base">
                    Ratings:
                  </span>{" "}
                  <span className="gradient-text font-bold md:text-lg text-base">
                    ⭐ {data?.rating}
                  </span>
                </p>
              </div>

              <div className="card-actions justify-start mt-6">
                {/* <button
                
                  className="btn mt-4 gradient-button gradient-text"
                >
                  <span className="gradient-text"> Register</span>
                </button> */}
                {/*  <a className="btn btn-outline btn-secondary"></a> */}

                <button
                  onClick={() => navigate(`/`)}
                  className="btn  btn-xs! md:btn-lg! text-sm! px-6! py-4! md:px-6! md:text-base! hover:scale-105 "
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
          <div className="my-5 w-full block mx-auto">
            <form onSubmit={commentData} className=" w-full ">
              <div>
                <textarea
                  name="comment"
                  placeholder="comment Here"
                  className="textarea textarea-accent  md:w-1/2 w-full mx-auto"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn my-3">
                Comment
              </button>
            </form>
            <div className="space-y-6 md:w-1/4">
              {comment?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* User Info */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={data?.userPhoto}
                        alt={data?.userName}
                        className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
                      />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {data?.userName}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(data?.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {/* Comment Text */}
                  <p className="text-gray-700 dark:text-gray-300 pl-1">
                    {data?.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;