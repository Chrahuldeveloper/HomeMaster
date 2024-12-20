import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCards({ tittle, data, redirect }) {
  return (
    <>

    <div className="w-[88vw] mx-auto my-14">
      <div>
        <h1 className="px-10 text-lg font-semibold md:text-3xl">{tittle}</h1>
        <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((i, id) => {
            return (
              <React.Fragment key={id}>
                {redirect ? (
                  <Link
                    to={`/service/${tittle}`}
                    state={{
                      otherService: data,
                      introduction: i.Introduction,
                      prodcedure: i.Procedure,
                      price: i.price,
                      time: i.Time,
                      banner: i.img,
                      tittle: i.tittle,
                      inclusionsexclusions: i.InclusionsExclusions,
                    }}
                  >
                    <div className="space-y-2 text-center">
                      <img
                        src={i.img}
                        alt=""
                        className="object-cover w-full h-40 duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75 hover:scale-105"
                      />
                      <h1 className="text-lg font-semibold">{i.tittle}</h1>
                      <p className="text-gray-700">Rs {i.price}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="space-y-2 text-center">
                    <img
                      src={i.img}
                      alt=""
                      className="object-cover w-full h-40 duration-500 ease-in-out rounded-lg"
                    />
                    <h1 className="text-lg font-semibold">{i.tittle}</h1>
                    <p className="text-gray-700">Rs {i.price}</p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>





   <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">

   <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
     
     

   </div>

   </div>



    
    </>
  );
}
