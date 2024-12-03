import React from "react";
export default function OfferCards({ data }) {
  return (
    <div className="w-[80vw] mx-auto overflow-x-scroll flex items-center gap-6 mt-24">
      {data.map((i, id) => {
        return (
          <React.Fragment key={id}>
            <img src={i.img} alt="" className="cursor-pointer"/>
          </React.Fragment>
        );
      })}
    </div>
  );
}
