import React from 'react';
import Banner from './Banner';
import SortedBooks from './SortedBooks';
import { useLoaderData } from 'react-router';

const Home = () => {
    const sortData=useLoaderData()
  
    return (
      <div>
        <Banner />
        <div className='w-11/12 mx-auto my-5'>

        <SortedBooks sortBooks={sortData.result} />
        </div>
      </div>
    );
};

export default Home;