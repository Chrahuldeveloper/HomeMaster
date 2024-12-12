import React from "react";
import { Footer, Navbar } from "../components";

export default function CheckOut() {
  return (
    <>
      <Navbar explore={false} />
      <div className="flex flex-col justify-center gap-8 p-5 my-14 md:flex-row lg:justify-evenly md:gap-0">
        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] rounded-lg shadow-sm">
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300">
            <img
              className="object-cover w-14"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="">Send booking details to</h1>
              <p className="text-sm font-bold">+91 8317680338</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300">
            <img
              className="object-cover w-14"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="">Address</h1>
              <p className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer">
                +Add
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5">
            <img
              className="object-cover w-14"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="">Send booking details to</h1>
              <p className="text-sm font-bold">+91 8317680338</p>
            </div>
          </div>
        </div>

        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] p-6 rounded-lg shadow-sm">
          <h1 className="font-bold">Payment summary</h1>

          <div className="flex justify-between mt-5">
            <h1>Item total</h1>
            <p>₹549</p>
          </div>
          <div className="flex justify-between mt-5">
            <h1>Item total</h1>
            <p>₹69</p>
          </div>

          <div className="flex justify-between mt-8">
            <h1 className="font-semibold">Total</h1>
            <p>₹618 </p>
          </div>
          <div>
            <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4">
              Pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
