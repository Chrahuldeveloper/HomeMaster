import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCards({
  tittle,
  data,
  redirect,
  setselectedTittle,
  settoggle,
}) {
  return (
    <>
      <div className="w-[88vw] mx-auto my-14">
        <div>
          <h1 className="px-10 text-lg font-semibold md:text-3xl">{tittle}</h1>
          <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((i, id) => {
              const handleClick = () => {
                if (setselectedTittle) {
                  settoggle(true);
                  setselectedTittle(i.tittle);
                }
              };

              return (
                <React.Fragment key={id}>
                  {redirect ? (
                    <Link
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      to={`/service/${tittle}`}
                      state={{
                        otherService: data,
                        introduction: i.Introduction,
                        procedure: i.Procedure,
                        price: i.price,
                        time: i.Time,
                        banner: i.img,
                        tittle: i.tittle,
                        inclusionsexclusions: i.InclusionsExclusions,
                      }}
                      onClick={handleClick}
                    >
                      <div className="space-y-2 text-center">
                        <img
                          src={i.img}
                          alt=""
                          className="object-cover w-full h-40 duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75 hover:scale-105"
                        />
                        <h1 className="text-lg font-semibold">{i.tittle}</h1>
                        <p className="text-gray-700"> {i.price}</p>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="space-y-2 text-center"
                      onClick={handleClick}
                    >
                      <img
                        src={i.img}
                        alt=""
                        className="object-cover w-full h-40 duration-500 ease-in-out rounded-lg"
                      />
                      <h1 className="text-lg font-semibold">{i.tittle}</h1>
                      <p className="text-sm font-semibold text-gray-700">
                        {i.price === "On Inspection"
                          ? "On Inspection"
                          : "Price : " + "  " + i.price}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
