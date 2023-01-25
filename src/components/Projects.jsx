import React from "react";
import amazon from "../assets/projects/amazon.jpg";
import netflix from "../assets/projects/netflix.jpg";
import foa from "../assets/projects/foa.jpg";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: amazon,
      link1: "https://clone-fa3a8.firebaseapp.com/",
      link2: "https://www.github.com/aniruddhapw/",
    },
    {
      id: 2,
      src: foa,
      link1: "https://www.friendsofanimals.org.in/",
      link2: "https://www.github.com/aniruddhapw/",
    },
    {
      id: 3,
      src: netflix,
      link1: "https://netflix-clone-85529.firebaseapp.com/",
      link2: "https://www.github.com/aniruddhapw/",
    },
  ];

  const handleClick = (link) => {
    window.open(link);
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
          {Projects.map(({ id, src, link1, link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClick(link1)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClick(link2)}
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

