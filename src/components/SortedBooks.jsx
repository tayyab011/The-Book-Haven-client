import React from 'react';
import { Link } from 'react-router';

const SortedBooks = ({ sortBooks }) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
      {sortBooks.map((book) => (
        <div key={book._id} className="card  shadow-sm">
          <figure className="py-2">
            <img className="w-50 h-72" src={book.coverImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book.title}
              <div className="badge badge-secondary"> {book.genre}</div>
            </h2>
            <p>{book?.summary}</p>
            <div className="card-actions justify-end">
              <Link to={`boookDetails/${book._id}`} className="btn ui-btn">
                <span> See Details</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortedBooks;