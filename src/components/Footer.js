import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from "../../src/images/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f5f5] md:h-[60vh] p-10 text-center">
        <div className="pr-4 lg:px-44">
          <img
            src={logo}
            alt=""
            className="w-16 h-16 mx-auto rounded-full shadow-sm cursor-pointer lg:mx-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10 mb-20 md:flex-row md:items-start md:justify-evenly">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">
                <Link to="/about">About us</Link>
              </li>
              <li className="text-gray-700">
                <Link to="/contact">Reach Out</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">jaladseva@gmail.com</li>
              <li className="text-gray-700">8622949494</li>
              <li className="text-gray-700">8622939393</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Location</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">
                SR.no.14/2D,Sukhsagar Nagar,Katraj,Pune,411046 Maharashtra India
              </li>
              <li className="text-gray-700">
                Mon-Fri: 9:00 am – 5:00 pm <br /> Sat-Sun: 11:00 am – 16:00 pm{" "}
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Social Links</h1>
            <ul className="flex items-center justify-center mt-3 space-x-3 md:justify-start">
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full cursor-pointer"
                />
              </li>
              <li>
                <FaFacebookF
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full cursor-pointer"
                />
              </li>
              <li>
                <FaTwitter
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full cursor-pointer"
                />
              </li>
              <li>
                <CiLinkedin
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-sm font-semibold text-center text-gray-500 bg-[#f5f5f5] ">
          Designed and Developed By WiDigitalize
        </h1>
      </footer>
    </>
  );
}
