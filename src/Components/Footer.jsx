// Footer.js
import React from "react";
import twittergif from "../assets/icons8-twitter.gif";
import facebookgif from "../assets/icons8-facebook.gif";
import instagramgif from "../assets/icons8-instagram.gif";
import linkedingif from "../assets/icons8-linkedin.gif";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul className="list-none">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-300 mb-2">1-N-12T-781/1
Sri Krishna Vilasa,
Urvastores,
Ashoknagar(MR),
Mangalore,
Dakshina Kannada- 575006,
Karnataka, India</p>
            <p className="text-gray-300 mb-2">Phone:  9980490777</p>
            <p className="text-gray-300">Email: info@example.com</p>
          </div>

        
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
            <form>
              <input type="email" placeholder="Your Email" className="bg-gray-700 text-white rounded py-2 px-3 mb-2 w-full" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Subscribe</button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0 ">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex">
              <a href="#" className="mr-4 hover:text-gray-300">
                <img src={facebookgif} alt="Facebook" />
              </a>
              <a href="#" className="mr-4 hover:text-gray-300">
                <img src={twittergif} alt="Twitter" />
              </a>
              <a href="#" className="mr-4 hover:text-gray-300">
                <img src={instagramgif} alt="Instagram" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src={linkedingif} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

      
        <div className="mt-8 text-center">
          <a href="#" className="text-gray-300 hover:text-white mr-4">Home</a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">Products</a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">Services</a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">Blog</a>
          <a href="#" className="text-gray-300 hover:text-white">FAQs</a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-300">© 2024 Ecoyaan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
