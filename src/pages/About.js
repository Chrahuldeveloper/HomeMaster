import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { MdOutlineCleaningServices } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";

export default function About() {
  const [showmenu, setshowmenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar
          showmenu={showmenu}
          setshowmenu={setshowmenu}
          page={"About"}
          hide="gallery"
        />
        <div className="flex flex-col gap-6 p-5 my-10 md:flex-row md:justify-evenly md:gap-0">
          <div>
            <img
              src="https://homemaster.in/upload/about/about-page-img-1.jpg"
              alt=""
              className="max-w-xs mx-auto rounded-lg cursor-pointer md:max-w-md lg:max-w-lg"
            />
          </div>
          <div className="max-w-lg space-y-3">
            <h1 className="text-lg font-semibold">
              More than 10 years of cleaning experience
            </h1>
            <p className="text-gray-500 ">
              Cleaning Company service is a fully integrated janitorial cleaning
              services company that provides comprehensive, high quality,
              reliable cleaning solutions to commercial, corporate, industrial
              and residential clients.
            </p>
            <p className="text-gray-500 ">
              Our diligent management and work ethic are central to Cleaning
              Company service business philosophy and critical to delivering
              consistent, quality cleaning services. We pride ourselves on
              making our management accountable to the client through direct
              access and interaction with our managing director.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 md:justify-evenly md:flex-row md:gap-0">
          <div className="flex items-start max-w-md gap-5">
            <AiOutlineAim size={85} color="#6e42e5" />
            <div className="space-y-2.5">
              <h1 className="text-xl font-semibold">Our Mission</h1>
              <p className="text-gray-500 ">
                Aims to be the market leader in Pune for providing cleaning
                services, delivering reliable, high-quality, and cost-effective
                cleaning solutions to our customers.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-md gap-5">
            <MdOutlineCleaningServices size={85} color="#6e42e5" />
            <div className="space-y-2.5">
              <h1 className="text-xl font-semibold">Our Vision</h1>
              <p className="text-gray-500 ">
                We have a strong presence across Pune, committed to the same
                core values and principles at all our locations.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="p-6 bg-blue-600 rounded-lg lg:w-[80vw] flex flex-col md:flex-row items-center justify-around mx-auto my-10 gap-6 md:gap-0">
            <div>
              <img
                src="https://homemaster.in/upload/satisfaction/banner-guaranteed-img1.png"
                alt=""
              />
            </div>
            <div className="max-w-xl space-y-4 text-center text-white">
              <h1 className="text-2xl font-semibold">
                Satisfaction Guaranteed!
              </h1>
              <p>
                Your satisfaction is 100% guaranteed at Cleaning Company. If you
                are not happy with any area we’ve cleaned, simply call within 24
                hours and we will come back out and reclean it free of charge.
                This makes hiring Cleaning Company virtually risk free. Our
                maids are thoroughly screened through our rigorous recruitment
                process, and every one of them goes through our Maid University
                training process.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
