import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import  ReactRotatingText from "react-rotating-text"
const Banner = () => {

    const navigate=useNavigate()
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // 👈 start muted

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.paused) return;
      // play again if user interaction unblocks playback
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/2356.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Volume button */}
      <span
        onClick={toggleMute}
        className="absolute bottom-5 cursor-pointer right-5 z-20 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
      >
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </span>

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="w-md md:w-full">
          <h1 className="mb-5  text-3xl md:text-5xl lg:text-6xl font-bold   bg-gradient-to-r from-white to-[#FAC921] bg-clip-text text-transparent">
            Explore the World of Books |<br />
            <ReactRotatingText
              className=""
              items={["Discover", "Read", "Read & Learn"]}
            />
          </h1>
          <p className="mb-5">
            Manage your personal library, track what you’ve read, and explore
            recommendations tailored to your taste.
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => navigate(`allBooks`)} className="btn Btn">
              <span> All Books</span>
            </button>
            <button onClick={() => navigate(`addBook`)} className="btn Btn">
              Create Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
