"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { SOCIALS } from "../utils/constants/socials";
import { Social } from "../utils/types/socials";


export default function Contact() {

  const [socials] = useState<Social[]>(SOCIALS);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  

  const [isSent, setIsSent] = useState(false);
  const isSubmitting = false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => setIsSent(true), // Set isSent to true after sending email
        (error) => {
          console.log(error.text);
        }
      );

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-primary text-xs flex items-center justify-center">
      <div className="max-w-7xl w-full p-5 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
          <div className="text-white text-4xl md:text-5xl font-bold w-60">
            Want to work
          </div>
          <div className="text-accent text-4xl md:text-5xl font-bold w-60">
            together?
          </div>
        </div>
        <div className="flex-1">
          <div className="relative bg-gray-800 rounded-2xl shadow-lg z-10">
            <div className="flex items-center pl-5 p-3 bg-secondary rounded-t-2xl">
              <div className="flex-1 flex">
                <div className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></div>
                <div className="w-2 h-2 mr-3 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-200"></div>
              </div>
            </div>

            <div className="p-8 bg-primary border-4 rounded-b-2xl border-secondary">
              <form onSubmit={sendEmail}>
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col md:flex-col lg:flex-row justify-between md:items-center">
                    <div className="md:text-left lg:w-3/12">
                      <div className="text-accent font-bold text-3xl md:text-4xl">
                        <p className="mb-4">Contact</p>
                      </div>
                      <div className="text-accent font-bold text-3xl md:text-4xl w-14">
                        <p className="mb-3 border-b-2 border-accent pb-1">Me</p>
                      </div>
                    </div>

                    {/* FORM FIELDS */}
                    <div className="md:w-7/12 space-y-6">
                      <div className="pb-1 pt-5 border-b border-gray-600">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="NAME"
                          required
                        />
                      </div>
                      <div className="pb-1 border-b border-gray-600">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="EMAIL"
                          required
                        />
                      </div>
                      <div className="pb-1 border-b border-gray-600">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="MESSAGE"
                          rows={3}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex justify-end space-x-10 pb-4">
                    {/* <button type="button" className="text-white hover:border-b-2 hover:border-accent border-b-2 border-transparent">
                      CANCEL
                    </button> */}
                    <button disabled={isSubmitting} type="submit" className="text-accent hover:border-b-2 text-lg hover:border-accent border-b-2 border-transparent">
                      {isSubmitting? 'Sending...' : 'SEND'}
                    </button>
                  </div>
                </div>
              </form>

              {/* SOCIAL MEDIA ICONS */}
              <div className="flex md:justify-start justify-evenly space-x-4 h-7 mb-4">
              {socials.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.url ?? "", "_blank")}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="h-[40px] w-[40px] hover:text-accent"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}
