import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import ModelLogin from "./ModelLogin";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  return (
    <>
      <nav className="border-b-[1px] border-gray-300 p-5">
        <div className="flex items-center  justify-around">
          <div className="flex items-center gap-8">
            <div>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"
                alt=""
              />
            </div>
            <ul className="text-[#545454] flex items-center gap-8">
              <li className="cursor-pointer">Native</li>
            </ul>
            <div className="flex items-center gap-2">
              <IoLocationOutline size={23} color="gray" />
              <p className="text-sm text-[#545454]">Pune India</p>
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
