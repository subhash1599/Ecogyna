
import React from "react";
import AboutImage from "../assets/about-us-sustainable-lifestyle-partner.png";

function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mb-12">
      <div className="max-w-lg w-full md:mr-8">
      <h1 className="text-3xl font-bold mb-6">About Ecoyaan</h1>
            <p className="text-lg mb-4 leading-relaxed">
              At Ecoyaan, we are more than just a platform. Our goal is to build
              a community of eco-conscious people who share a common vision and
              passion for a more sustainable world.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              We recognize that sustainability is a journey (as the Sanskrit
              word “yaan” suggests). To keep you motivated on this journey, on
              our platform and our social media pages, you can find:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Tips and tricks to adopt a more eco-friendly and low-waste
                lifestyle
              </li>
              <li className="mb-2">
                Videos, posts, and quizzes on climate change and sustainability
              </li>
              <li className="mb-2">
                Events and pledges that invite you to adopt a more sustainable
                lifestyle
              </li>
            </ul>
      </div>
      <div className="w-full md:w-auto md:max-w-xs">
        <img
          src={AboutImage}
          alt="About Ecoyaan"
          className="w-full h-auto rounded-md"
        />
      </div>
    </section>
  );
}

export default AboutSection;
