import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import useSpecialAxios from '../hooks/useSpecialAxios';

const AddBook = () => {
  const {user}=use(AuthContext)
  const useaxioss=useSpecialAxios()

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
await useaxioss.post("/books",newBook).then(data => console.log("after added book in mongodb",data.data)).catch(err=>console.log(err))
console.log(newBook)
  }
    return (
      <div>
        <section className="text-gray-600 body-font relative">
          <form onSubmit={onBookSubmitHandler}>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Add Books
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        disabled={true}
                        defaultValue={user?.displayName}
                        className="w-full bg-gray-100 cursor-not-allowed bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        User Email
                      </label>
                      <input
                        type="email"
                        disabled={true}
                        defaultValue={user?.email}
                        name="email"
                        className="w-full bg-gray-100 cursor-not-allowed bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="title"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="author"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        name="author"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="genre"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Genre
                      </label>
                      <input
                        type="text"
                        name="genre"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="rating"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Rating
                      </label>
                      <input
                        type="text"
                        name="rating"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="summary"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Summary
                      </label>
                      <input
                        type="text"
                        name="summary"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="image"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Image
                      </label>
                      <input
                        type="text"
                        name="image"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white ui-btn rounded-md "
                    >
                      <span>Add Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
};

export default AddBook;