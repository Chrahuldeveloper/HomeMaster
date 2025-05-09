import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import TermsConditions from "./TermsConditions";
import Privacy from "./Privacy";
export default function Footer() {
  const [toggle, settoggle] = useState(false);
  const [togglePrivacy, settogglePrivacy] = useState(false);

  return (
    <>
      {toggle ? <TermsConditions settoogleterms={settoggle} /> : null}
      {togglePrivacy ? <Privacy settogglePrivacy={settogglePrivacy} /> : null}
      <footer className="bg-[#f5f5f5] md:h-[60vh] p-10 text-center">
        <div className="pr-4 lg:px-44">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/app-2-d919d.appspot.com/o/website_logos%2FJalad%20Seva.png?alt=media&token=733510d9-f354-43c0-9562-a9c21f4c5ff1"
            }
            alt=""
            className="w-24 h-24 mx-auto rounded-full shadow-sm cursor-pointer lg:mx-0"
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
              <li className="text-gray-700 cursor-pointer">
                <Link to="https://merchant.razorpay.com/policy/PbnF3rvHcnEUnw/privacy">
                  <h1>Privacy Policy</h1>
                </Link>
              </li>
              <li className="text-gray-700">
                <Link to="https://merchant.razorpay.com/policy/PbnF3rvHcnEUnw/terms">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">jaladseva@gmail.com</li>
              <li className="text-gray-700">9822667624</li>
              <li className="text-gray-700">9881448036</li>
          
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Location</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">
                SR.no.14/2D,Sukhsagar Nagar,Katraj,Pune,411046 Maharashtra India{" "}
              </li>
              <li className="text-gray-700">
                Mon-Sat: 9:00 am – 6:00 pm <br /> Sun : 10:00 am – 2:00 pm{" "}
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
