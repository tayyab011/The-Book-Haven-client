import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const BookDetails = () => {
    const navigate=useNavigate()
   const data=useLoaderData()
    const {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail,
      userName,
      _id
    } = data.result;
    console.log(_id);
    return (
      <div>
        <title>{title}</title>
        <div className="w-11/12 mx-auto my-10">
          <div className="card lg:card-side ">
            <figure className="lg:w-1/2 p-3 shadow">
              <img
                src={coverImage}
                alt={title}
                className="w-50 h-80  object-cover rounded-xl"
              />
            </figure>

            <div className="card-body lg:w-1/2 space-y-3">
              <h2 className="card-title text-3xl font-black gradient-text">
                {title}
              </h2>
              <p className="gradient-text font-bold">{summary}</p>

              <div className="">
                <p>
                  <span className="font-black">Author:</span>{" "}
                  <span className="gradient-text font-bold">{author}</span>
                </p>
                <p>
                  <span className="font-black">Genre:</span>{" "}
                  <span className="gradient-text font-bold">{genre}</span>
                </p>
                <p>
                  <span className="font-black">Ratings:</span>{" "}
                  <span className="gradient-text font-bold">⭐ {rating}</span>
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