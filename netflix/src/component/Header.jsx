import React from "react";
import { PiArrowCircleDownLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className="absolute z-10 bg-linear-to-b flex items-center justify-between w-full from-black px-6">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        alt="netflix-logo"
      />

      <div className="flex justify-center items-center text-white">
        <PiArrowCircleDownLight size="24px" />
        <h1 className="text-lg font-medium ml-2">KapoorMernStack</h1>
        <div className="ml-4">
          <button className="bg-red-800  px-4 py-2 rounded-md cursor-pointer hover:bg-red-700">
            Logout
          </button>
          <button className="bg-red-800  px-4 py-2 rounded-md ml-2 cursor-pointer hover:bg-red-700">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
