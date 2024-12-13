import React from "react";
import { FaGoogle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function ModelLogin({ setlogintoggle, notify }) {
  const provider = new GoogleAuthProvider();

  const GoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
        <div className="flex justify-end translate-x-4 -translate-y-16">
          <RxCross2
            size={18}
            color="black"
            className="w-8 h-8 p-1 bg-white rounded-full"
            cursor={"pointer"}
            onClick={() => {
              setlogintoggle(false);
            }}
          />
        </div>
        <div className="-mt-6">
          <h1 className="text-xl font-semibold">Login/Sign up</h1>
          <div className="border-b-[1px] w-full border-gray-300 mt-4"></div>
          <div className="my-5">
            <button
              onClick={GoogleSignIn}
              className="bg-[#ededed] text-black font-semibold text-center w-full py-3 rounded-md flex items-center justify-center gap-3"
            >
              <FaGoogle size={19} color="black" />
              <h1>Google</h1>
            </button>
            <h1 className="mt-3 text-sm font-semibold text-gray-700 cursor-pointer">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
