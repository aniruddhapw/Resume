import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-white to-gray-200 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a student of Electronics and Telecommunication Engineering at
          Shri Sant Gajanan Maharaj College of Engineering, Shegaon Along with
          this I have experience of working with a NGO Friends Of Animals where
          I worked on frontend technologies like ReactJS and organized events
          for Animal cruelty awareness.
        </p>

        <br />

        <p className="text-xl">
          Also I won a cash prize of INR 50000/- Hackthon at Adani Electricity
          for Building solution on key managment problem for meter cabins
        </p>
      </div>
    </div>
  );
};

export default About;
