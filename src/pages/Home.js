import React from "react";
import { Footer, Navbar, OfferCards, ServiceCards } from "../components/index";
import Data1 from "../data/Data1";
import data2 from "../data/AcRepair";
export default function Home() {
  const data = [
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
    },
    {
      tittle: "Ac Repair",
      image:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
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
            className="max-w-xs md:max-w-xl"
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

      <OfferCards data={Data1} />

      <ServiceCards tittle={"Home Cleaning"} data={data2} />
      <ServiceCards tittle={"AC And Appliance Services"} data={data2} />
      <ServiceCards tittle={"Beauty services"} data={data2} />
      <ServiceCards tittle={"Pest Control"} data={data2} />
      <ServiceCards tittle={"Painting"} data={data2} />
      <ServiceCards tittle={"Electrical & Plumbing "} data={data2} />

      <div className="flex justify-center my-20">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729254568001-5b659f.jpeg"
          alt=""
        />
      </div>

      <Footer/>
    </div>
  );
}
