import React, { use } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import useSpecialAxios from '../hooks/useSpecialAxios';
import { useState } from 'react';
import { AuthContext } from '../provider/AuthContext';

const BookDetails = () => {
  const {user}=use(AuthContext)

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
};
await specialaxios
  .post(`/books/${id}/comments`, newComment)
  .then((data) => {
   
      setComment((prev) => [...prev,newComment]);
  
   /*  console.log("after comment", data); */
   
  })
  .catch((err) => console.log(err));
 }
    return (
      <div>
        <title> {data?.title}</title>
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
              <h2 className="card-title text-3xl font-black gradient-text">
                {data?.title}
              </h2>
              <p className="gradient-text font-bold"> {data?.summary}</p>

              <div className="">
                <p>
                  <span className="font-black">Author:</span>{" "}
                  <span className="gradient-text font-bold">
                    {data?.author}
                  </span>
                </p>
                <p>
                  <span className="font-black">Genre:</span>{" "}
                  <span className="gradient-text font-bold">
                    {" "}
                    {data?.genre}
                  </span>
                </p>
                <p>
                  <span className="font-black">Ratings:</span>{" "}
                  <span className="gradient-text font-bold">
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
                  className="bg-pink-950 text-pink-400 border cursor-pointer border-pink-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                >
                  <span className="bg-pink-400 shadow-pink-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Back to Home
                </button>
              </div>

              <div>
                <form onSubmit={commentData}>
                  <div>
                    <textarea
                      name="comment"
                      placeholder="comment Here"
                      className="textarea textarea-accent"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className='btn my-3'>Comment</button>
                </form>
                <div className="space-y-6">
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
        </div>
      </div>
    );
};

export default BookDetails;