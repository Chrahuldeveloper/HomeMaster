import React from 'react'
import { CiInstagram } from 'react-icons/ci'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f5f5] md:h-[50vh] p-10">
        <div className="pt-20 px-40">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-evenly gap-10 my-10">
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-xl">Social Links</h1>
            <ul className="space-x-3 mt-3 flex items-center">
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
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
