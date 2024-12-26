import React, { useRef, useState } from "react";
import { Footer, Gallery, Navbar, ServiceCards } from "../components/index";
import data1 from "../data/AcRepair";
import data2 from "../data/Data2";
import data3 from "../data/Data3";
import data4 from "../data/Data4";
import data5 from "../data/Data5";
import img1 from "../images/img1.png";
import { Link } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa6";
import data6 from "../data/Data6";

export default function Home() {
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
      image: "https://homemaster.in/upload/service/Plumbing.jpg",
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

  const howWeWork = [
    {
      tittle: "Book online in 60 seconds",
      para: "Easily book and pay online. We'll connect you with a reliable, experienced cleaner for your home.",
    },
    {
      tittle: "Get a top-rated cleaner",
      para: "We'll assign a trusted, highly-rated cleaner to your job, ensuring quality and satisfaction.",
    },
    {
      tittle: "Manage everything online",
      para: "Track and manage your bookings, payments, and services effortlessly through our online platform.",
    },
  ];

  const [showmenu, setshowmenu] = useState(false);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const galleryref = useRef(null);

  const scrollToGallery = () => {
    if (galleryref.current) {
      galleryref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar
        showmenu={showmenu}
        setshowmenu={setshowmenu}
        explore={true}
        page={"home"}
        scrollToGallery={scrollToGallery}
      />
      <div className="flex flex-col gap-5 p-5 mt-8 justify-evenly lg:flex-row md:gap-0">
        <div className="space-y-6">
          <h1 className="max-w-xs text-3xl font-semibold">
            Home services at your doorstep
          </h1>
          <div className="space-y-4 border-[1px] p-8 rounded-lg shadow-sm ">
            <h1 className="text-[#545454] text-xl font-semibold">
              What are you looking for?
            </h1>
            <div
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="grid max-w-md grid-cols-2 gap-5 mt-1.5 border-gray-200 md:grid-cols-1 lg:grid-cols-3"
            >
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
                            className="object-cover mx-auto duration-500 ease-in-out rounded-lg w-28 hover:brightness-75 hover:scale-105"
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
        </div>

        <div
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <img
            className="max-w-xs mx-auto rounded-lg md:max-w-md"
            src={img1}
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
            <h1 className="text-xl font-semibold">5</h1>
            <p className="text-sm text-gray-600">Service Rating</p>
          </div>
        </div>

        <div className="flex gap-3 p-5 ">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693491890812-e86755.jpeg"
            alt=""
            className="object-cover w-12 h-12"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">2.5Lak+</h1>
            <p className="text-sm text-gray-600">Customers Globally</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h1 className="text-2xl font-semibold md:text-3xl">How It Works</h1>
      </div>
      <div className="flex flex-col items-center gap-5 mt-8 px-7 justify-evenly md:flex-row lg:gap-0">
        {howWeWork.map((i, id) => {
          return (
            <React.Fragment key={id}>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="flex flex-col items-center justify-center max-w-sm space-y-3.5 border-gray-300 border-[1px] cursor-pointer  rounded-lg p-5"
              >
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
      <ServiceCards
        tittle={"AC And Appliance Services"}
        data={data1}
        redirect={true}
      />
      <ServiceCards tittle={"Beauty Services"} data={data6} redirect={true} />
      <ServiceCards tittle={"Painting"} data={data2} redirect={true} />
      <ServiceCards
        tittle={"Electrical & Plumbing "}
        data={data5}
        redirect={true}
      />
      <ServiceCards tittle={"Pest Control"} data={data3} redirect={true} />
      <ServiceCards tittle={"Home Cleaning"} data={data4} redirect={true} />

      <div ref={galleryref} className="mb-8 ">
        <h1 className="text-3xl font-semibold text-center">Our Work </h1>
        <Gallery />
      </div>

      <div className="fixed bottom-10 right-5">
        <div
          onClick={scrolltoTop}
          className="bg-[#6e42e5] p-1.5 rounded-md flex justify-center cursor-pointer  w-10 h-10 z-50"
        >
          <FaAngleUp size={23} color="white" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
