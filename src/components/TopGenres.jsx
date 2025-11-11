
import "./TopGenres.css"; 

const genres = [
  {
    name: "Fantasy",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
  },
  {
    name: "Romance",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    name: "Mystery",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
  },
  {
    name: "Science Fiction",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
];

const TopGenres = () => {
  return (
    <section className="py-16 bg-base-200 text-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold  ">
        Top Genres
      </h2>
      <p className="max-w-xl mx-auto font-semibold mb-10 pt-10">
        Explore some of the most loved genres by our readers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {genres.map((genre, i) => (
          <div
            key={i}
            className="card bg-base-100 shadow-xl overflow-hidden genre-card"
          >
            <figure>
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="text-lg font-semibold">{genre.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGenres;
