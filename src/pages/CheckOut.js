import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { RxCross2 } from "react-icons/rx";
import { BsCashStack } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";

export default function CheckOut() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (method) => {
    setSelectedPayment(selectedPayment === method ? null : method);
  };

  const [toggle, settoggle] = useState(false);

  return (
    <>
      <Navbar explore={false} />
      <div className="flex flex-col justify-center gap-8 p-5 my-14 md:flex-row lg:justify-evenly md:gap-0">
        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] rounded-lg shadow-sm">
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="">Send booking details to</h1>
              <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer">
                +Add
              </button>{" "}
            </div>
          </div>
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="">Address</h1>
              <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer">
                +Add
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278185297-2bf0c3.jpeg"
              alt=""
            />
            <div
              className="space-y-2"
              onClick={() => {
                settoggle(true);
              }}
            >
              <h1 className="">Payment Method</h1>
              <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer">
                +Add
              </button>
            </div>
          </div>
        </div>

        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] p-6 rounded-lg shadow-sm">
          <h1 className="mt-5 font-bold">Payment summary</h1>

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

      {toggle ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
            <div className="flex justify-end translate-x-4 -translate-y-16">
              <RxCross2
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
                onClick={() => {
                  settoggle(false);
                }}
              />
            </div>
            <h1 className="text-lg font-semibold -mt-7 ">
              Select Payment Method
            </h1>
            <div className="border-b-[1px] border-gray-300 mt-3"></div>
            <div className="flex justify-between ">
              <div
                className="flex items-center gap-4 my-5 cursor-pointer"
                onClick={() => handlePaymentSelection("cash")}
              >
                <BsCashStack size={20} color="black" />
                <h1 className="text-sm ">Cash On Delivery</h1>
              </div>
              <input
                type="radio"
                checked={selectedPayment === "cash"}
                readOnly
                onClick={() => handlePaymentSelection("cash")}
                className="accent-violet-500"
              />
            </div>
            <div className="flex justify-between ">
              <div
                className="flex items-center gap-4 my-5 cursor-pointer"
                onClick={() => handlePaymentSelection("online")}
              >
                <IoIosPhonePortrait size={20} color="black" />
                <h1 className="text-sm ">Online Payment</h1>
              </div>
              <input
                type="radio"
                checked={selectedPayment === "online"}
                readOnly
                onClick={() => handlePaymentSelection("online")}
                className="accent-violet-500"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
