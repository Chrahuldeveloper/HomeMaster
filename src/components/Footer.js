import React from 'react'
import { CiInstagram } from 'react-icons/ci'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from '../../src/images/logo.png'
export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f5f5] md:h-[50vh] p-10">
        <div className="px-40 pt-20">
          <img
            src={logo}
            alt=""
            className="w-16 h-16 rounded-full shadow-sm cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-10 md:flex-row md:items-start md:justify-evenly">
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3">
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold">Social Links</h1>
            <ul className="flex items-center mt-3 space-x-3">
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <FaFacebookF
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <FaTwitter
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiLinkedin
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
