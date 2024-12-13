import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from "../../src/images/logo.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f5f5] md:h-[50vh] p-10 ">
        <div className="pr-4 lg:px-44">
          <img
            src={logo}
            alt=""
            className="w-16 h-16 mx-auto rounded-full shadow-sm cursor-pointer lg:mx-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10 mb-20 md:flex-row md:items-start md:justify-evenly">
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Reach Out</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">homemaster@gmail.com</li>
              <li className="text-gray-700">9928492720</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Location</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">Kothrud, Pune</li>
              <li className="text-gray-700">
                Mon-Fri: 9:00 am – 5:00 pm <br /> Sat-Sun: 11:00 am – 16:00 pm{" "}
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold">Social Links</h1>
            <ul className="flex items-center mt-3 space-x-3">
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
      </footer>
    </>
  );
}
