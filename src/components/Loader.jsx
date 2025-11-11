import React from 'react';
import "./loader.css"
const Loader = () => {
    return (
      <div className="flex h-screen justify-center items-center" role="status">
        {/*  <div className="loading loading-spinner loading-xl text-primary"></div>
        <span className="sr-only">Loading...</span> */}
        <div class="book">
          <div class="book__pg-shadow"></div>
          <div class="book__pg"></div>
          <div class="book__pg book__pg--2"></div>
          <div class="book__pg book__pg--3"></div>
          <div class="book__pg book__pg--4"></div>
          <div class="book__pg book__pg--5"></div>
        </div>
      </div>
    );
};

export default Loader;