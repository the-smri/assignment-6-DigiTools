import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cart }) => {
  return (
    <div className="  bg-base-100 shadow-sm ">
      <div className=" navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#products" className="hover:bg-[#9514FA] hover:text-white">Products</a>
              </li>
              <li>
                <a href="#features" className="hover:bg-[#9514FA] hover:text-white">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:bg-[#9514FA] hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:bg-[#9514FA] hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:bg-[#9514FA] hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn border-none shadow-none text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:bg-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#products" className="hover:bg-[#9514FA] hover:text-white">Products</a>
            </li>
            <li>
              <a href="#features" className="hover:bg-[#9514FA] hover:text-white">Features</a>
            </li>
            <li>
              <a href="#pricing" className="hover:bg-[#9514FA] hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:bg-[#9514FA] hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:bg-[#9514FA] hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-between items-center gap-2">
            <div className="relative">
              <a className="btn bg-transparent border-none shadow-none hover:bg-[#9514FA] hover:text-white rounded-full w-12 h-12">
              {" "}
              <IoCartOutline />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart}
              </span>
            </a>
            </div>
            <a className="btn bg-transparent border-none shadow-none hover:bg-[#9514FA] hover:text-white">
              {" "}
              Login
            </a>
            <a className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-transform  hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
