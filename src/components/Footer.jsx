import React from "react";
import { format } from "date-fns";

const Footer = () => {
  return (
    <footer className="w-full bg-base-100 shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdnlRmPjjoXhfviUTQIUhHQy75GFMT8g_Hw&s"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <p className="text-center md:text-left text-sm md:text-base">
          Copyright ©{" "}
          <span className="font-bold">{format(new Date(), "PPPP")}</span> – All
          rights reserved
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <a
          href="#"
          aria-label="YouTube"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKss4Zzlw84Eyt_-MbZZoxIrZPUdE38MefzQ&s"
            alt="YouTube"
            className="w-8 h-8 rounded-full"
          />
        </a>
        <a
          href="#"
          aria-label="Play"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
