import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import useAuth from "../hooks/CheckUser";
import ContactFunc from "../utils/ContactUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const { user, loading } = useAuth();

  const contact = new ContactFunc();

  const notify = () => toast.success("We will contact you Soon!");

  const [data, setdata] = useState({
    Name: "",
    email: "",
    message: "",
  });

  console.log(loading);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="p-5">
        <div className="bg-white max-w-xl mx-auto my-10 border-[1px] rounded-lg p-5 border-gray-300 space-y-5 ">
          <div>
            <h1 className="text-xl font-semibold md:text-2xl ">
              React Out to us
            </h1>
          </div>
          <div>
            <h1>Name</h1>
            <input
              type="text"
              value={data.Name}
              onChange={(e) => {
                setdata({ ...data, Name: e.target.value });
              }}
              className="outline-none border-[1px] px-3 py-2 w-full  border-gray-300 bg-gray-50 rounded-lg mt-3"
            />
          </div>
          <div>
            <h1>Email</h1>
            <input
              type="text"
              value={data.email}
              onChange={(e) => {
                setdata({ ...data, email: e.target.value });
              }}
              className="outline-none border-[1px] px-3 py-2 w-full  border-gray-300 bg-gray-50 rounded-lg mt-3"
            />
          </div>
          <div>
            <h1>Message</h1>
            <textarea
              cols={18}
              value={data.message}
              onChange={(e) => {
                setdata({ ...data, message: e.target.value });
              }}
              rows={8}
              className="outline-none border-[1px] px-3 py-2 w-full  border-gray-300 bg-gray-50 rounded-lg mt-3"
            ></textarea>
          </div>
          <button
            onClick={() => {
              contact.saveData(data, user.uid);
              notify();
            }}
            className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
