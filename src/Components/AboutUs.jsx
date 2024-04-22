
import React from "react";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <AboutSection />
        <ValuesSection />
        <StorySection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
