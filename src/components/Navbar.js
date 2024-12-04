import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import ModelLogin from "./ModelLogin";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from '../../src/images/logo.png'
export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  return (
    <>
      <nav className="border-b-[1px] border-gray-300 p-4">
        <div className="flex items-center justify-around gap-5">
          <div className="flex items-center gap-8">
            <div>
              <img
                src={logo}
                alt=""
                className="w-16 h-16 "
              />
            </div>
            <ul className="text-[#545454] flex items-center gap-2">
              <li className="cursor-pointer">Native</li>
            </ul>
            <div className="flex items-center gap-2">
              <IoLocationOutline size={23} color="gray" />
              <p className="text-sm text-[#545454]">Pune</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <MdOutlineShoppingCart size={25} color="gray" cursor={"pointer"} />
            <CgProfile
              onClick={() => {
                setistoggle(true);
              }}
              size={25}
              color="gray"
              cursor={"pointer"}
            />
          </div>
        </div>
      </nav>
      {istoggle ? <ModelLogin setistoggle={setistoggle} /> : null}
    </>
  );
}
