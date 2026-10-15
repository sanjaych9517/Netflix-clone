import React from "react";
import { FiPlay } from "react-icons/fi";
import { GoInfo } from "react-icons/go";

const VideoTitle = () => {
  return (
    <div className="absolute w-screen aspect-video text-white pt-[15%] p-12">
      <h1 className="text-3xl font-bold">Sanjay Mern Stack</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        voluptatem, illum rem
        <br />
        tenetur quidem repellendus consequuntur maxime ratione praesentium
      </p>
      <div className="flex gap-2 mt-4">
        <button className="px-6 py-2 bg-white text-black rounded-4xl hover:opacity-80 text-xl flex justify-center items-center gap-2">
          <FiPlay /> Play
        </button>
        <button className="px-6 py- bg-white text-black rounded-4xl hover:opacity-80  text-xl flex justify-center items-center gap-2">
          <GoInfo /> Watch-more
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
