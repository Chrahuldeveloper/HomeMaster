import React from "react";
import { Navbar } from "../components";
import { CiInstagram } from "react-icons/ci";
export default function Service() {
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
    <div className="">
      <Navbar />

      <div className="w-[90vw] sm:w-[80vw] md:w-[97vw] lg:w-[84vw] mx-auto border-[1px] p-6 my-7">
        <div className="flex flex-col md:flex-row justify-around gap-6">
          <div className="space-y-5">
            <h1 className="text-2xl  font-semibold">Plumber</h1>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 border-[1px] p-6 border-gray-300 gap-5">
              {data.map((i, id) => {
                return (
                  <React.Fragment key={id}>
                    <div className="flex flex-col items-center gap-3 border-b-2 border-white ease-in-out duration-200 hover:border-violet-300">
                      <div className="bg-[#f5f5f5] w-28 cursor-pointer ">
                        <img
                          src={i.image}
                          className="w-16 rounded-lg object-cover mx-auto "
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
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_873,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1726568980978-c2ae0a.jpeg"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="space-y-5">
            <h1 className="text-2xl  font-semibold">Introduction : </h1>
            <p className="text-gray-600">
              Clean House is pure bliss. In today’s busy world, it is difficult
              for everyone to take time for deep cleaning of their house. But
              when your cleaning partners are here, you don’t have to worry. We
              have expertise in providing deep cleaning to your house. We have
              trained, efficient, and trusted employees who understand the need
              of our customers and work accordingly. They are proficient in
              cleaning and scrubbing the floor in order to remove dirt from
              pores. They left no scope for stains and work their level best to
              restore the shine of the floor of your house.
            </p>
          </div>
        </div>
        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl  font-semibold">Procedure : </h1>
            <p className="text-gray-600">
              Clean House is pure bliss. In today’s busy world, it is difficult
              for everyone to take time for deep cleaning of their house. But
              when your cleaning partners are here, you don’t have to worry. We
              have expertise in providing deep cleaning to your house. We have
              trained, efficient, and trusted employees who understand the need
              of our customers and work accordingly. They are proficient in
              cleaning and scrubbing the floor in order to remove dirt from
              pores. They left no scope for stains and work their level best to
              restore the shine of the floor of your house.
            </p>
          </div>
        </div>
        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl  font-semibold">Required Time : </h1>
            <p className="text-gray-600">
              We require two to six hours for cleaning your complete house. The
              total time will be depended on the type of floor and size of your
              house.
            </p>
          </div>
        </div>
        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Our Prices : </h1>
            <div className="border-[1px] p-5 rounded-lg max-w-xs space-y-5 shadow-sm ">
              <div className="">
                <h1 className="text-lg ">Plumber Service</h1>
              </div>
              <div className="flex items-center justify-around">
                <h1 className="">Plumber</h1>
                <p className="text-gray-700">Rs : 299</p>
              </div>
              <button className="border-violet-500 border-[1px] rounded-lg text-violet-500 font-semibold w-full mx-auto py-2 mt-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] md:h-[50vh] p-10 my-10">
        <div>
          <h1 className="text-center text-2xl font-semibold text-[#4b5b68]">
            Why Choose Us?
          </h1>
        </div>

        <div className=" flex justify-center lg:justify-around items-center flex-col lg:flex-row my-6">
          <ul className="space-y-5 text-[#4b5b68] text-lg  font-semibold">
            <li>Experinced & Trained Professionals</li>
            <li>Eco-Frinedly Chemicals</li>
            <li>100% satisfication Guranteed or free Re-work</li>
          </ul>
          <div>
            <img
              src="https://homemaster.in/upload/whychooseusimage/1.png"
              alt=""
            />
          </div>
          <ul className="space-y-5 text-[#4b5b68] text-lg font-semibold">
            <li>Experinced & Trained Professionals</li>
            <li>Eco-Frinedly Chemicals</li>
            <li>100% satisfication Guranteed or free Re-work</li>
          </ul>
        </div>
      </div>

      <footer className="bg-[#f5f5f5] md:h-[50vh] p-10">
        <div className="pt-20 px-40">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-evenly gap-10 my-10">
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">About us</li>
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Company</h1>
            <ul className="space-y-3 mt-3">
              <li className="text-gray-700">Terms & conditions</li>
              <li className="text-gray-700">Privacy policy </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-xl">Social Links</h1>
            <ul className="space-x-3 mt-3 flex items-center">
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
              <li>
                <CiInstagram
                  size={24}
                  color="black "
                  className="bg-white w-10 h-10 shadow-md p-1.5 rounded-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
