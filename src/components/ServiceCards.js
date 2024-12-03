import React from "react";

export default function ServiceCards({tittle,data}) {
  return (
    <>
      <div className="w-[80vw] mx-auto my-14">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {tittle}
          </h1>
          <div className="flex-col md:flex-row flex items-center gap-12 mt-10">
            {data.map((i, id) => {
              return (
                <React.Fragment key={id}>
                  <div className="space-y-1 ">
                    <img
                      src={i.img}
                      alt=""
                      className="cursor-pointer rounded-lg w-[60vw]"
                    />
                    <h1 className="font-semibold">{i.tittle}</h1>
                    <p className="text-gray-700">Rs {i.price}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
