import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import ModelLogin from "./ModelLogin";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../src/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaRegCompass } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  const [showmenu, setshowmenu] = useState(false);

  return (
    <>
      <nav className="border-b-[1px] border-gray-300 p-4">
        <div className="flex items-center justify-between gap-5 px-6 md:justify-around">
          <div className="flex items-center gap-8">
            <div>
              <img src={logo} alt="" className="w-16 h-16 " />
            </div>
            <ul className="text-[#545454] text-sm  md:flex items-center gap-6 hidden ">
              <li className="cursor-pointer ">About</li>
              <li className="cursor-pointer ">Contact</li>
              <li className="cursor-pointer ">Explore</li>
            </ul>
            <div className="flex items-center gap-2">
              <IoLocationOutline size={23} color="gray" />
              <p className="text-sm text-[#545454]">Pune</p>
            </div>
          </div>
          <div className="md:hidden">
            <CiMenuFries
              onClick={() => {
                setshowmenu(true);
              }}
              size={23}
              color="black"
              className="cursor-pointer"
            />
          </div>
          <div className="items-center hidden gap-5 md:flex">
            <Link to="/cart">
              <MdOutlineShoppingCart
                size={25}
                color="black"
                cursor={"pointer"}
              />
            </Link>
            <CgProfile
              onClick={() => {
                setistoggle(true);
              }}
              size={25}
              color="black"
              cursor={"pointer"}
            />
          </div>
        </div>
      </nav>
      {showmenu ? (
        <aside className="fixed inset-0 z-50 h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="text-[#545454] text-sm w-[48vw] h-screen fixed top-0 bg-white  border-r-[1px] border-gray-300">
            <div className="mt-2 translate-x-64">
              <RxCross2
                size={17}
                color="black"
                className="p-1 bg-white rounded-full cursor-pointer w-7 h-7"
                cursor={"pointer"}
                onClick={() => {
                  setshowmenu(false);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <img src={logo} alt="" className="w-20 h-20 " />
            </div>
            <ul className="p-6 space-y-10 font-semibold text-center">
              <li className="flex items-center justify-between w-32 gap-6 mx-auto cursor-pointer">
                <FaRegCompass size={23} color="black" />
                <h1>Explore</h1>
              </li>
              <li>
                <Link
                  to={"/cart"}
                  className="flex items-center justify-between w-32 gap-6 mx-auto cursor-pointer"
                >
                  <MdOutlineShoppingCart size={23} color="black" />
                  <h1>Cart</h1>
                </Link>
              </li>
              <li className="flex items-center justify-between w-32 gap-6 mx-auto cursor-pointer">
                <CgProfile size={23} color="black" />
                <h1>Profile</h1>
              </li>
              <li className="flex items-center justify-between w-32 gap-6 mx-auto cursor-pointer">
                <FcAbout size={25} color="black" />
                <h1>About</h1>
              </li>
              <li className="flex items-center justify-between w-32 gap-6 mx-auto cursor-pointer">
                <CiPhone size={23} color="black" />
                <h1>Contact</h1>
              </li>
            </ul>
            <footer className="flex items-center justify-center">
              <div className="fixed bottom-4">
                <div className="">
                  <h1 className="text-sm text-center">All Rights Reserved</h1>
                </div>
              </div>
            </footer>
          </div>
        </aside>
      ) : null}

      {istoggle ? <ModelLogin setistoggle={setistoggle} /> : null}
    </>
  );
}
