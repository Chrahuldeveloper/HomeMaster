import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

export default function Explore() {
  const [showmenu, setshowmenu] = useState(false);

  const data = [
    {
      tittle: "Painting",
      image: "https://homemaster.in/upload/service/Painting.jpg",
    },
    {
      tittle: "AC And Appliance Services",
      image:
        "https://content.jdmagicbox.com/v2/comp/hyderabad/n8/040pxx40.xx40.210305162740.n6n8/catalogue/-q4mefhb49n-250.jpg",
    },
    {
      tittle: "Home Cleaning",
      image: "https://homemaster.in/upload/service/service-img-11.jpg",
    },
    {
      tittle: "Pest Control",
      image: "https://homemaster.in/upload/serviceimages/24.jpg",
    },
    {
      tittle: "Electrical & Plumbing",
      image: "https://homemaster.in/upload/service/Electrical.jpg",
    },
    {
      tittle: "Beauty & Services",
      image:
        "https://imgmedia.lbb.in/media/2020/02/5e4d51ba6e343b1b20e148ec_1582125498852.jpg",
    },
  ];

  return (
    <>
      <Navbar showmenu={showmenu} setshowmenu={setshowmenu} page={"explore"} />
      <div className="max-w-md my-20 rounded-lg md:max-w-lg mx-auto border-gray-300 border-[1px] p-5">
        <h1 className="pb-5 text-lg font-semibold ">Explore our Services</h1>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-1 lg:grid-cols-3">
          {data.map((i, id) => {
            return (
              <Link
                to="/subservice"
                state={{
                  service: i.tittle,
                }}
              >
                <React.Fragment key={id}>
                  <div className="flex flex-col items-center gap-3 ">
                    <div className="cursor-pointer " onClick={() => {}}>
                      <img
                        src={i.image}
                        className="object-cover mx-auto duration-500 ease-in-out rounded-lg w-36 hover:brightness-75 hover:scale-105"
                        alt=""
                      />
                    </div>
                    <h1 className="text-xs text-center text-[#545454]">
                      {i.tittle}
                    </h1>
                  </div>
                </React.Fragment>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-[#f5f5f5] p-10 my-10">
        <div>
          <h1 className="text-center text-2xl font-semibold text-[#4b5b68]">
            Why Choose Us?
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:justify-around lg:flex-row">
          <ul className="space-y-5 text-[#4b5b68] text-lg font-semibold">
            <li>Experienced & Trained Professionals</li>
            <li>Eco-Friendly Chemicals</li>
            <li>100% Satisfaction Guaranteed or Free Re-work</li>
          </ul>
          <div>
            <img
              src="https://homemaster.in/upload/whychooseusimage/1.png"
              alt=""
            />
          </div>
          <ul className="space-y-5 text-[#4b5b68] text-lg font-semibold">
            <li>Experienced & Trained Professionals</li>
            <li>Eco-Friendly Chemicals</li>
            <li>100% Satisfaction Guaranteed or Free Re-work</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
