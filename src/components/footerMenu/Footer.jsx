import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal  text-neutral-content p-10 justify-center gap-20">
          <nav>
            <h6 className="footer-title">DigitTools</h6>
            <p>Premium digital tools for creators,<br /> professionals, and businesses.  Work smarter <br />with our suite of powerful tools.</p>
          </nav>
          
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Template</a>
            <a className="link link-hover">Integration</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title justify-center">Social Links</h6>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <a href=""><AiFillInstagram className="text-3xl text-black"/></a>
              </div>
              
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <a href=""> <FaFacebook className="text-3xl text-black"/></a>
              </div>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <a href=""><FaXTwitter className="text-3xl  text-black"/></a>
              </div>
            </div>
          </nav>
          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
