import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useNavigate, useParams } from 'react-router';
import useSpecialAxios from '../hooks/useSpecialAxios';
import toast from 'react-hot-toast';

const UpdateBook = () => {
    const navigate=useNavigate()
    const {user}=use(AuthContext)
    const [old,setOld]=useState({})
    const specialaxios=useSpecialAxios()
      const { id } = useParams();
     useEffect(() => {
       specialaxios.get(`/books/${id}`).then((data) => {
         console.log(data.data.result);
         setOld(data.data.result);
       });
     }, [id, specialaxios]);
    const { title, author, genre, rating, summary, coverImage } = old || {};



    const onBookSubmitHandler=async (e)=>{
 e.preventDefault();
 const name = e.target.name.value;
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
 };

await specialaxios.put(`/booksByUser/${id}`,newBook).then(data=> {
    console.log("after update",data.data)
     toast.success("Book Update Successfull");
    navigate("/myBook");
}).catch(err=>console.log(err))
    }
    return (
      <section className="body-font relative">
        <form onSubmit={onBookSubmitHandler}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold   bg-gradient-to-r from-white to-[#FAC921] bg-clip-text text-transparent">
                Update Books
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7">
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
                    <label for="title" className="leading-7 ">
                      Title
                    </label>
                    <input
                      defaultValue={title}
                      type="text"
                      name="title"
                      className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="author" className="leading-7 ">
                      Author
                    </label>
                    <input
                      defaultValue={author}
                      type="text"
                      name="author"
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
                      defaultValue={genre}
                      type="text"
                      name="genre"
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
                      defaultValue={rating}
                      type="text"
                      name="rating"
                      className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="summary" className="leading-7 ">
                      Summary
                    </label>
                    <input
                      defaultValue={summary}
                      type="text"
                      name="summary"
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
                      defaultValue={coverImage}
                      type="text"
                      name="image"
                      className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-[#FAC921]  focus:ring-2 focus:ring-[#FAC921] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white ui-btn rounded-md "
                  >
                    <span>Update Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
};

export default UpdateBook;