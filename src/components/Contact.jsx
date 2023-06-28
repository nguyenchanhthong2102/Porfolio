import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/229c98d5-df85-4e2c-84f0-a8c7ade88d95"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="w-full h-screen bg-[#0a192f] text-gray-300">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            #Submit form email below abc@gmail.com
          </p>
          <input
            className="p-2 w-full bg-[#ccd6f6]"
            type="text"
            placeholder="Name"
            name="name"
          ></input>

          <input
            className="my-4 w-full p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          ></input>
          <textarea
            className="w-full bg-[#ccd6f6] p-2"
            name="message
          "
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let Collaborate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
