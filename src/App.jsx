import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar";
import Carousel from "./Components/Carousel";
import ContentSection from "./Components/ContentSection";
import Dot from "./Components/Dot";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [currentContent, setCurrentContent] = useState(1);

  const handleDotClick = (contentNumber) => {
    setCurrentContent(contentNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => (prevContent % 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage currentContent={currentContent} handleDotClick={handleDotClick} />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainPage({ currentContent, handleDotClick }) {
  return (
    <>
      <Carousel currentContent={currentContent} handleDotClick={handleDotClick} />
      <div className="dots  flex">
        <Dot active={currentContent === 1} onClick={() => handleDotClick(1)} />
        <Dot active={currentContent === 2} onClick={() => handleDotClick(2)} />
        <Dot active={currentContent === 3} onClick={() => handleDotClick(3)} />
      </div>
      <ContentSection />
      <Footer />
    </>
  );
}

export default App;
