import React from 'react';
import Banner from './Banner';
import SortedBooks from './SortedBooks';
import { useLoaderData } from 'react-router';
import TopGenres from './TopGenres';
import BookOfWeek from './BookOfWeek';

const Home = () => {
    const sortData=useLoaderData()
 

    return (
      <div className=" ">
        <Banner />
        <div className="w-11/12 mx-auto my-5">
          <SortedBooks sortBooks={sortData.result} />
        </div>
        <div className="w-11/12 mx-auto my-5">
          <TopGenres />
        </div>
        <div className="w-11/12 mx-auto my-5">
          <BookOfWeek />
        </div>
      </div>
    );
};

export default Home;