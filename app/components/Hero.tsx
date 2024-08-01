import React from "react";
import profilePic from "../../assets/parla1.jpg";
import Image from "next/image";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  const val = process.env.MONGO_URI
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto sm:grid-cols-12 lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mx-auto mb-10 size-8/12 sm:col-span-5 sm:size-9/12 lg:col-span-5 lg:size-auto lg:ml-16 lg:mr-16 xl:col-span-5 xl:mr-36 lg:flex">
            <Image
              src={profilePic}
              alt="profile picture"
              className="rounded-3xl mx-auto"
            />
          </div>
          <div className="mr-auto place-self-center sm:col-span-7 lg:col-span-7 xl:col-span-7">
            <h1 className=" text-blue-500 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <TypewriterEffect/>              
            </h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
              I am a Full Stack Engineer building beautiful, usable and
              aesthetically pleasing web applications.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I work at the intersection of technology, design and business. I
              beleive all great products are built in this zone.
            </p>
            <p>ENV val: {val}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
