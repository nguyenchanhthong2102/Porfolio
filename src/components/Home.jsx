import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  items-center h-full">
        <p className="text-pink-600 text-3xl ">Hi my name is </p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nguyen Chanh Thong
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Front-end Developer
        </h2>
        <p className=" text-gray-300 text-justify py-4 max-w max-w-[700px]">
          I'm Front-end Developer I'm building and deploy website on browser and
          I can design UX/UI to creative website. So if you interested in me
          please click button and give me information to disscus each other
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="border-2 text-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
