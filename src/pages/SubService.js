import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import data1 from "../data/AcRepair";
import data2 from "../data/Data2";
import data3 from "../data/Data3";
import data4 from "../data/Data4";
import data5 from "../data/Data5";
import { Footer, Navbar, ServiceCards } from "../components";
import data6 from "../data/Data6";
import data7 from "../data/SubServiceBeauty";
import { RxCross2 } from "react-icons/rx";

export default function SubService() {
  const service = useLocation();
  const selectedService = service.state?.service || "";

  const serviceDataMap = {
    Painting: data2,
    "AC And Appliance Services": data1,
    "Home Cleaning": data4,
    "Pest Control": data3,
    "Electrical & Plumbing": data5,
  };

  const data = serviceDataMap[selectedService] || [];

  const [showmenu, setshowmenu] = useState(false);
  const [selectedTittle, setselectedTittle] = useState();

  const filteredData = selectedTittle
    ? data7.filter((item) => item.tittle === selectedTittle)
    : [];

  const [toggle, settoggle] = useState(false);

  return (
    <div>
      <Navbar showmenu={showmenu} setshowmenu={setshowmenu} explore={false} />

      <div className="grid justify-center grid-cols-1 gap-10 lg:gap-0 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:px-14">
        {service.state.service === "Painting" ? (
          <ServiceCards data={data2} redirect={true} />
        ) : service.state.service === "AC And Appliance Services" ? (
          <ServiceCards data={data1} redirect={true} />
        ) : service.state.service === "Home Cleaning" ? (
          <ServiceCards data={data4} redirect={true} />
        ) : service.state.service === "Pest Control" ? (
          <ServiceCards data={data3} redirect={true} />
        ) : service.state.service === "Electrical & Plumbing" ? (
          <ServiceCards data={data5} redirect={true} />
        ) : service.state.service === "Beauty & Services" ? (
          <ServiceCards
            data={data6}
            redirect={false}
            setselectedTittle={setselectedTittle}
            settoggle={settoggle}
          />
        ) : null}
      </div>

      {toggle ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] h-[70vh] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl overflow-y-scroll">
            <div className="flex justify-between px-3">
              <h1 className="text-lg font-semibold">{selectedTittle}</h1>
              <RxCross2
                onClick={() => {
                  settoggle(false);
                }}
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
              />
            </div>
            <div className="mt-4">
              {filteredData.length > 0 ? (
                filteredData.map((item, id) => (
                  <div key={id} className="mb-4">
                    {item.SubService.map((i, id) => {
                      return (
                        <React.Fragment key={id}>
                          <div className="p-5 border-[1px] border-gray-300 rounded-lg my-4 flex items-center justify-between cursor-pointer">
                            <div className="space-y-2">
                              <h1 className="w-56 font-semibold">{i.tittle}</h1>
                              <p className="text-xs font-semibold">
                                Starts at {i.Price}
                              </p>
                              <p className="text-xs text-gray-600 ">{i.Time}</p>
                              <p className="w-56 text-xs leading-5 text-gray-700">
                                {i.Service}
                              </p>
                            </div>
                            <div>
                              <Link
                                to={"/checkout"}
                                state={{
                                  Price: i.Price,
                                  Name: i.tittle,
                                }}
                              >
                                <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-xs rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4 px-10 text-center cursor-pointer">
                                  Add
                                </button>
                              </Link>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No details available.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
