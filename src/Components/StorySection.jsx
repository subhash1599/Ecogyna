
import React from "react";
import StoryIcon1 from "../assets/about-us-founding-team-01.png";
import StoryIcon2 from "../assets/about-us-founding-team-02.png";
import Linkedin from "../assets/linkedin.png";
function StorySection() {
  return (
    <section className="mb-12">
    
      <h2 className="text-2xl font-bold mb-6">Our Story</h2>

          <div className="flex items-start mb-8">
            <div className="w-44 h-32 flex items-center justify-center bg-gray-200 rounded-full mr-4 overflow-hidden transition duration-300 transform hover:scale-105">
              <img
                src={StoryIcon1}
                alt="Story Icon 1"
                className="w-40 h-40 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg mb-2 leading-relaxed">
                We started Ecoyaan after watching an episode of “Our Planet II”,
                where we saw the devastating impact of plastic pollution and
                climate change on the albatross birds. That moment ignited our
                mission.
              </p>
              <p className="text-lg leading-relaxed">
                Our research suggests that many Indians understand global
                warming, yet access to sustainable practices and products
                remains limited. We also noticed that there is a lack of support
                for eco-friendly businesses.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <div className="w-44 h-32 flex items-center justify-center bg-gray-200 rounded-full mr-4 overflow-hidden transition duration-300 transform hover:scale-105">
              <img
                src={StoryIcon2}
                alt="Story Icon 2"
                className="w-40 h-40 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg mb-2 leading-relaxed">
                We created Ecoyaan to connect consumers, businesses, and
                sustainability experts. We want to make it easy and convenient
                for people to access eco-friendly products and services, learn
                and share best practices, and support sustainability
                initiatives.
              </p>
              <p className="text-lg leading-relaxed">
                As founders, we are not perfect, but we are passionate. We
                believe that every small step matters. Join us and be a part of
                the Ecoyaan community — together, we’ll make a difference.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg mr-2">
              Connect with the founders on LinkedIn here:
            </span>
            <a
              href="https://www.linkedin.com/in/abhishekrao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <img
                src={Linkedin}
                alt="LinkedIn Icon"
                className="h-6 w-6 mr-2 transition duration-300 transform hover:scale-110"
              />
              Abhishek Rao
            </a>
            <a
              href="https://www.linkedin.com/in/sarwanjeet-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <img
                src={Linkedin}
                alt="LinkedIn Icon"
                className="h-6 w-6 mr-2 transition duration-300 transform hover:scale-110"
              />
              Sarwanjeet Singh
            </a>
          </div>
    </section>
  );
}

export default StorySection;
