import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ProductCart from "../utils/Cart";
import useAuth from "../hooks/CheckUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Service() {
  const notify = () => toast.success("Please Login!");

  const servicedata = useLocation();

  const cart = new ProductCart();

  const { id } = useParams();

  const { user, loading } = useAuth();

  console.log(loading);

  const navigate = useNavigate();

  const filteredServices = servicedata.state.otherService?.filter(
    (service) => service.tittle !== servicedata.state.tittle
  );

  const [showmenu, setshowmenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  console.log()
  
  return (
    <div>
      <ToastContainer />

      <Navbar showmenu={showmenu} setshowmenu={setshowmenu} explore={false} />

      <div className="w-[90vw] sm:w-[80vw] md:w-[97vw] lg:w-[84vw] mx-auto border-[1px] p-6 my-7">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">
              {servicedata.state.tittle}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 border-[1px] p-6 border-gray-300 gap-5 max-w-md">
              {filteredServices?.map((i, id) => (
                <React.Fragment key={id}>
                  <Link
                    to={`/service/${i.tittle}`}
                    state={{
                      otherService: servicedata?.state?.otherService,
                      introduction: i.Introduction,
                      prodcedure: i.Procedure,
                      price: i.price,
                      time: i.Time,
                      banner: i.img,
                      tittle: i.tittle,
                      inclusionsexclusions: i.InclusionsExclusions,
                    }}
                  >
                    <div className="flex flex-col items-center gap-3 duration-200 ease-in-out">
                      <div className="cursor-pointer">
                        <img
                          src={i.img}
                          className="object-cover mx-auto duration-500 ease-in-out rounded-lg hover:brightness-75"
                          alt=""
                        />
                      </div>
                      <h1 className="text-sm text-[#545454]">{i.tittle}</h1>
                    </div>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <img
              src={servicedata.state.banner}
              className="cursor-pointer md:max-w-xl lg:max-w-2xl"
              alt=""
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">
              {servicedata.state.tittle}:
            </h1>
            <p className="text-gray-600">{servicedata.state.introduction}</p>
          </div>
        </div>

        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Procedure:</h1>
            <ul className="px-5 space-y-2 text-gray-600">
              {servicedata.state.prodcedure?.map((i, id) => (
                <li className="list-disc" key={id}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Inclusions & Exclusions:</h1>
            <ul className="px-5 space-y-2 text-gray-600">
              {servicedata.state?.inclusionsexclusions.map((i, id) => (
                <li className="list-disc" key={id}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Required Time:</h1>
            <p className="text-gray-600">{servicedata.state.time}</p>
          </div>
        </div>

        <div className="my-6">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Our Prices:</h1>
            <div className="border-[1px] p-5 rounded-lg max-w-xs space-y-5 shadow-sm">
              <div>
                <h1 className="text-lg">{servicedata.state.tittle}</h1>
              </div>
              <div className="flex items-center justify-around">
                <h1>{servicedata.state.tittle}</h1>
                <p className="text-gray-700">{servicedata.state.price}</p>
              </div>
              <button
                onClick={() => {
                  if (user) {
                    cart.addToCart(user.uid, {
                      Name: servicedata.state.tittle,
                      Price: servicedata.state.price,
                      img: servicedata.state.banner,
                      serviceType: id,
                    });
                    navigate("/cart");
                  } else {
                    notify();
                  }
                }}
                className="border-violet-500 border-[1px] text-sm rounded-lg text-violet-500 font-semibold w-full mx-auto py-2 mt-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
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
    </div>
  );
}
