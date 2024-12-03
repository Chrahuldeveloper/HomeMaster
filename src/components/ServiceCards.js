import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCards({ tittle, data }) {
  return (
    <>
      <div className="w-[80vw] mx-auto my-14">
        <div>
          <h1 className="text-2xl font-semibold md:text-3xl">{tittle}</h1>
          <div className="flex flex-col items-center gap-12 mt-10 md:flex-row">
            {data.map((i, id) => {
              return (
                <React.Fragment key={id}>
                  <Link to={`/service/${tittle}`}>
                    <div className="space-y-1 ">
                      <img
                        src={i.img}
                        alt=""
                        className="cursor-pointer rounded-lg w-[75vw]"
                      />
                      <h1 className="font-semibold">{i.tittle}</h1>
                      <p className="text-gray-700">Rs {i.price}</p>
                    </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
