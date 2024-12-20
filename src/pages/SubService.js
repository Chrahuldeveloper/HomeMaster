import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data1 from "../data/AcRepair";
import data2 from "../data/Data2";
import data3 from "../data/Data3";
import data4 from "../data/Data4";
import data5 from "../data/Data5";
import { Footer, Navbar, ServiceCards } from "../components";
import data6 from "../data/Data6";

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

  console.log(data, "this is");

  const [showmenu, setshowmenu] = useState(false);

  return (
    <div>
      <Navbar showmenu={showmenu} setshowmenu={setshowmenu} explore={false} />

      <div className="grid justify-center grid-cols-1 gap-10 lg:gap-0 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:px-14">
        {service.state.service === "Painting" ? (
          <ServiceCards data={data2} />
        ) : service.state.service === "AC And Appliance Services" ? (
          <ServiceCards data={data1} />
        ) : service.state.service === "Home Cleaning" ? (
          <ServiceCards data={data4} />
        ) : service.state.service === "Pest Control" ? (
          <ServiceCards data={data3} />
        ) : service.state.service === "Electrical & Plumbing" ? (
          <ServiceCards data={data5} />
        ) : service.state.service === "Beauty & Services" ? (
          <ServiceCards data={data6} />
        ) : null}
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
