import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { assets } from "../assets/assets";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/pages");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 opacity-50 animate-bgShift"></div>
      <div className="absolute inset-0 z-0 animate-particleEffect"></div>
      <div className="relative flex flex-col items-center justify-center text-center z-10 px-6 md:px-12">
        <div className="opacity-0 animate-logoReveal mb-6">
          <img
            src={assets.spoty}
            alt="Spotify"
            className="h-32 md:h-48 mx-auto transition-all ease-in-out duration-300"
          />
        </div>
        <p className="text-3xl md:text-4xl font-medium text-gray-300 opacity-0 animate-textReveal transition-all">
          <span className="animate-typing">
            Stream your favorites and discover new tunes.
          </span>
        </p>
        <p className="mt-4 text-lg md:text-xl font-semibold text-gray-400 opacity-0 animate-subtitleReveal transition-all">
          Join millions of users enjoying high-quality music streaming today.
        </p>
      </div>

      <style jsx>{`
        @keyframes bgShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes particleEffect {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0.1;
          }
          50% {
            transform: translateX(10px) translateY(10px);
            opacity: 0.2;
          }
          100% {
            transform: translateX(20px) translateY(20px);
            opacity: 0.1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes subtitleReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bgShift {
          animation: bgShift 8s ease-in-out infinite;
        }

        .animate-particleEffect {
          animation: particleEffect 6s ease-in-out infinite;
        }

        .animate-logoReveal {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-textReveal {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 2s;
        }

        .animate-subtitleReveal {
          animation: subtitleReveal 1.5s ease-out forwards;
          animation-delay: 4s;
        }

        .animate-typing {
          display: inline-block;
          width: 0;
          white-space: nowrap;
          overflow: hidden;
          border-right: 0.1em solid #fff;
          animation: typing 2.5s steps(40) 2s forwards,
            removeCursor 0s 5s forwards;
        }

        @keyframes removeCursor {
          to {
            border-right: none;
          }
        }
      `}</style>
      <Outlet />
    </div>
  );
};

export default LandingPage;
