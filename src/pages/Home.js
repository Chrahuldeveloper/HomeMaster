import React from "react";
import { Footer, Navbar, OfferCards, ServiceCards } from "../components/index";
import Data1 from "../data/Data1";
import data1 from "../data/AcRepair";
import data2 from "../data/Data2";
import data3 from "../data/Data3";
import data4 from "../data/Data4";
import data5 from "../data/Data5";
export default function Home() {
  const data = [
    {
      tittle: "Repair",
      image: "https://homemaster.in/upload/service/Plumbing.jpg",
    },
    {
      tittle: "House cleaning",
      image: "https://homemaster.in/upload/service/service-img-11.jpg",
    },

    {
      tittle: "Carpentry",
      image: "https://homemaster.in/upload/service/Carpentry.jpg",
    },
    {
      tittle: "Painting",
      image: "https://homemaster.in/upload/service/Painting.jpg",
    },

    {
      tittle: "Electrical",
      image: "https://homemaster.in/upload/service/Electrical.jpg",
    },
    {
      tittle: "House cleaning",
      image: "https://homemaster.in/upload/service/service-img-2.jpg",
    },

    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
  ];

  const howWeWork = [
    {
      tittle: "Book online in 60 seconds",
      para: "Book & pay online. We'll match you with a trusted, experienced house cleaner",
    },
    {
      tittle: "Get a 5 star cleaner",
      para: "Book & pay online. We'll match you with a trusted, experienced house cleaner",
    },
    {
      tittle: "Manage everything online",
      para: "Book & pay online. We'll match you with a trusted, experienced house cleaner",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 p-5 mt-12 justify-evenly md:flex-row md:gap-0">
        <div className="space-y-6">
          <h1 className="max-w-xs text-3xl font-semibold">
            Home services at your doorstep
          </h1>
          <div className="space-y-4 border-[1px] p-8 rounded-lg shadow-sm ">
            <h1 className="text-[#545454] text-xl font-semibold">
              What are you looking for?
            </h1>
            <div className="grid grid-cols-3 gap-5">
              {data.map((i, id) => {
                return (
                  <React.Fragment key={id}>
                    <div className="flex flex-col items-center gap-3 ">
                      <div className="bg-[#f5f5f5] w-28 cursor-pointer">
                        <img
                          src={i.image}
                          className="object-cover w-16 mx-auto rounded-lg "
                          alt=""
                        />
                      </div>
                      <h1 className="text-sm text-[#545454]">{i.tittle}</h1>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <img
            className="max-w-xs mx-auto md:max-w-xl"
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center md:pl-44">
        <div className="flex gap-3 p-5 ">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693570188661-dba2e7.jpeg"
            alt=""
            className="object-cover w-12 h-12"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">5</h1>
            <p className="text-gray-600">Service Rating</p>
          </div>
        </div>

        <div className="flex gap-3 p-5 ">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693491890812-e86755.jpeg"
            alt=""
            className="object-cover w-12 h-12"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">12M+</h1>
            <p className="text-gray-600">Customers Globally</p>
          </div>
        </div>
      </div>

      {/* <OfferCards data={Data1} /> */}
      <div className="flex flex-col items-center gap-5 mt-20 lg:px-7 justify-evenly md:flex-row lg:gap-0">
        {howWeWork.map((i, id) => {
          return (
            <React.Fragment key={id}>
              <div className="flex flex-col items-center justify-center max-w-sm space-y-3.5 border-gray-300 border-[1px] cursor-pointer  rounded-lg p-5">
                <div className="w-10 h-10 p-2 font-semibold text-center text-white rounded-full bg-violet-500">
                  {id + 1}
                </div>
                <div className="space-y-2.5 text-center">
                  <h1 className="text-lg font-semibold">{i.tittle}</h1>
                  <p className="text-sm">{i.para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="w-[85vw] mx-auto"></div>

      <ServiceCards tittle={"Painting"} data={data2} />
      <ServiceCards tittle={"AC And Appliance Services"} data={data1} />
      <ServiceCards tittle={"Home Cleaning"} data={data4} />
      <ServiceCards tittle={"Pest Control"} data={data3} />
      <ServiceCards tittle={"Electrical & Plumbing "} data={data5} />

      <Footer />
    </div>
  );
}
