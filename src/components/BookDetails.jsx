import React from 'react';
import { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import useSpecialAxios from '../hooks/useSpecialAxios';
import { useState } from 'react';

const BookDetails = () => {
   const navigate = useNavigate();
  const specialaxios=useSpecialAxios();
  const [data,setData]=useState(null)
  const {id}=useParams();

  
 /*  console.log(id) */
  useEffect(()=>{
specialaxios
  .get(`/books/${id}`)
  .then((data) =>{ setData(data.data.result)})
  .catch((err) => console.log(err));
  },[id,specialaxios])

 
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
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;