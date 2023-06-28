import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactJS from "../assets/reactjs.png";
import TailwindCSS from "../assets/tailwindcss.png";
import GitHub from "../assets/github.png";
const Skill = () => {
  return (
    <div name="skill" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*Container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-4">
            Experience
          </p>
          <p className="py-4 mt-3"># These are technologies I've worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="htmlicon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="htmlicon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className=" mx-auto"
              style={{ width: "120px" }}
              src={Javascript}
              alt="htmlicon"
            />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactJS} alt="htmlicon" />
            <p>REACTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindCSS} alt="htmlicon" />
            <p>TAILWINDCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="htmlicon" />
            <p>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
