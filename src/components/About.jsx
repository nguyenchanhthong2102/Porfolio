import React from "react";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Thong welcome to my website. Have a good day</p>
          </div>
          <div className="text-gray-300 text-justify">
            <p>
              I'm Front-end Developer I'm building and deploy website on browser
              and I can design UX/UI to creative website. So if you interested
              in me please click button and give me information to disscus each
              other
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
