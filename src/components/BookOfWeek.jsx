import React from "react";
import "./BookOfWeek.css";
import { useNavigate } from "react-router";

const BookOfWeek = () => {
    const navigation=useNavigate()
  return (
    <section className="py-20   ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 fade-left">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Book of the Week"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-4 fade-right">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold   ">
            Book of the Week
          </h2>
          <h3 className="text-2xl font-semibold text-[#FAC921]">
            “The Timeless Journey”
          </h3>
          <p className="leading-relaxed">
            Dive into a world of adventure and discovery in “The Timeless
            Journey,” a masterpiece that blends mystery, science, and emotion.
            Perfect for readers who crave stories that linger long after the
            last page.
          </p>

          <button
           
            target_blank
            className="btn bg-[#FAC921] border-none text-black hover:bg-[#e4b91d] transition-all duration-300"
          >
            <a href="https://read.amazon.com/sample/B0F4MC27Z9?clientId=share" target="_blank">
              Read Now
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookOfWeek;
