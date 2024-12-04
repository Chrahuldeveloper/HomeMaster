import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCards({ tittle, data }) {
  return (
    <>
      <div className="w-[80vw] mx-auto my-14">
        <div>
          <h1 className="text-xl font-semibold md:text-3xl">{tittle}</h1>
          <div className="grid grid-cols-1 gap-8 p-12 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((i, id) => {
              return (
                <React.Fragment key={id}>
                  <Link to={`/service/${tittle}`}>
                    <div className="space-y-2 text-center">
                      <img
                        src={i.img}
                        alt=""
                        className="object-cover w-full h-40 rounded-lg cursor-pointer"
                      />
                      <h1 className="text-lg font-semibold">{i.tittle}</h1>
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