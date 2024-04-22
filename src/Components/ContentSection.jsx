import React from "react";
import impact from "../assets/Impact.png";
import OurStory from "../assets/OurStory4.png";
import ProductCuration from "../assets/ProductCuration.mp4";
function ContentSection() {
  return (
    <>
      <div className="content flex bg-gray-100 ">
        <div className="w-full md:w-3/4 px-4 py-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Join our community in creating a more sustainable future for
            everyone
          </h2>
          <p className="text-base md:text-lg mb-4">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </p>
          <p className="text-base md:text-lg">
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
            Join Us
          </button>
        </div>
        <div className="w-full md:w-1/4 hidden md:block">
          <img
            src={impact}
            alt="Sustainability impact"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
      <div className="content flex bg-gray-100 ">
        <div className="w-full md:w-3/4 px-4 py-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Carefully curated Eco-friendly products
          </h2>
          <p className="text-base md:text-lg mb-4">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </p>
          <p className="text-base md:text-lg">
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </p>
        </div>
        <div className="w-full md:w-1/4 hidden md:block">
          <video
            width="640"
            height="480"
            controls
            autoPlay
            className="w-full h-auto rounded"
          >
            <source src={ProductCuration} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="content flex bg-gray-100 ">
        <div className="w-full md:w-3/4 px-4 py-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            For businesses that care deeply about sustainability
          </h2>
          <p className="text-base md:text-lg mb-4">
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </p>
          <p className="text-base md:text-lg mb-4">
            Do you want to showcase your products to an incredible audience of
            eco-conscious consumers who care?
          </p>
          <p className="text-base md:text-lg">
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </p>
        </div>
        <div className="w-full md:w-1/3 hidden md:block">
          <img
            src={OurStory}
            alt="Our Story"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </>
  );
}

export default ContentSection;
