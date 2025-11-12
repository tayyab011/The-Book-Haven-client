import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import useSpecialAxios from '../hooks/useSpecialAxios';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';


const AddBook = () => {
  const {user}=use(AuthContext)
  const useaxioss=useSpecialAxios()
const navigate=useNavigate()
  const onBookSubmitHandler=async (e)=>{
    e.preventDefault()
 const name =e.target.name.value
 const email = e.target.email.value;
 const title = e.target.title.value;
 const author = e.target.author.value;
 const genre = e.target.genre.value;
 const rating = e.target.rating.value;
 const summary = e.target.summary.value;
 const image = e.target.image.value;

const newBook = {
  userName: name,
  userEmail: email,
  title: title,
  author: author,
  genre: genre,
  rating: rating,
  summary: summary,
  coverImage: image,
  createdAt: new Date(),
};
//aad
await useaxioss.post("/books",newBook).then(data =>{
  toast.success("Add Book Successfull")
  navigate("/myBook");
}).catch(err=>toast.error("Something Went wrong"))
/* console.log(newBook)
 toast.success("Something Went wrong"); */
  }
  
 
    return (
      <div>
        <motion.section
      
      initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
      animate={{ opacity: 1, y: 0 }}   // fade in and move up
      transition={{ duration: 1 }}   className={`body-font relative `}
        >
          <form onSubmit={onBookSubmitHandler}>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold ">
                  Add Books
                </h1>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 ">
                        User Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        disabled={true}
                        defaultValue={user?.displayName}
                        className="w-full cursor-not-allowed bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="email" className="leading-7 ">
                        User Email
                      </label>
                      <input
                        type="email"
                        disabled={true}
                        defaultValue={user?.email}
                        name="email"
                        className="w-full cursor-not-allowed bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="title" className="leading-7">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="author" className="leading-7">
                        Author
                      </label>
                      <input
                        type="text"
                        name="author"
                        required
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="genre" className="leading-7 ">
                        Genre
                      </label>
                      <input
                        type="text"
                        name="genre"
                        required
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="rating" className="leading-7 ">
                        Rating
                      </label>
                      <input
                        type="text"
                        name="rating"
                        required
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="summary" className="leading-7 ">
                        Summary
                      </label>
                      <input
                        type="text"
                        name="summary"
                        required
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="image" className="leading-7 ">
                        Image
                      </label>
                      <input
                        type="text"
                        name="image"
                        required
                        className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full flex justify-center">
                    <button
                      type="submit"
                      className="btn  btn-xs! md:btn-lg! text-sm! px-6! py-4! md:px-6! md:text-base! hover:scale-105 "
                    >
                      <span>Add Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </motion.section>
      </div>
    );
};

export default AddBook;