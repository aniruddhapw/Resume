import React from "react";
import amazon from "../assets/portfolio/amazon.jpg";
import netflix from "../assets/portfolio/netflix.jpg";
import foa from "../assets/portfolio/foa.jpg";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: amazon,
    },
    {
      id: 2,
      src: foa,
    },
    {
      id: 3,
      src: netflix,
    },
  ];
  const handleClick = () => {
    window.location.href = "https://clone-fa3a8.firebaseapp.com/";
  };
  const handleClick1 = () => {
    window.location.href = "https://github.com/aniruddhapw";
  };

  return (
    <div name="projects" className="bg-white w-full text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                href="https://clone-fa3a8.firebaseapp.com/"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                >
                  Demo
                </button>
                <button
                  onClick={handleClick1}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
