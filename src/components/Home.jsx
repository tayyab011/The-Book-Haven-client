import React from 'react';
import Banner from './Banner';
import SortedBooks from './SortedBooks';
import { useLoaderData } from 'react-router';

const Home = () => {
    const sortData=useLoaderData()
  const theme =localStorage.getItem("theme")

    return (
      <div className={`${theme === "light" && "bg-soft-sky"}`}>
        <Banner />
        <div className="w-11/12 mx-auto my-5">
          <SortedBooks sortBooks={sortData.result} />
        </div>
      </div>
    );
};

export default Home;