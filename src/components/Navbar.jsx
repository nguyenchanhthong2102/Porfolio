import React from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-scroll";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img
          src={Logo}
          alt="anhdaidien"
          style={{ width: "60px", height: "60px" }}
          className="rounded-full"
        />
      </div>
      {/* menu-bar*/}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500}>
            SKILL
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* hamburger*/}
      <div
        className="md:hidden z-10 text-3xl duration-500 ease-in-out"
        onClick={handleClick}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile_Menu */}
      {nav && (
        <ul className="duration-300  absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center">
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
              SKILL
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              WORK
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
      {/*Social icons */}
      <div className="hidden lg:flex fixed top-[35%] left-0 ">
        <ul className="">
          <li className="w-[160px] flex justify-between items-center">
            <a
              href="https://www.linkedin.com/in/th%C3%B4ng-nguy%E1%BB%85n-7a844b240/"
              target="_blank"
              className="flex justify-between p-2 w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 items-center"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1o4L0W8st6K0LgI3S_QAO3HAeiBtBvvDo?hl=vi"
              target="_blank"
              className="flex justify-between p-2 w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181856] items-center"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nguyenchanhthong2102"
              target="_blank"
              className="flex justify-between p-2 w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] items-center"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100026293701242"
              target="_blank"
              className="flex justify-between w-full p-2 text-slate-800 font-medium ml-[-100px] hover:ml-[-10px] duration-300 bg-[#588c88] items-center"
            >
              FaceBook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
