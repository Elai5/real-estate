/** @format */

import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto md:px-20 lg:px-32 w-full overfflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 tect-center mb-8">
        Passionate About Propperties, Dedicated to Your Vision
      </p>
    </div>
  );
};

export default About;
