import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function ServiceModel({ data,  }) {

    console.log(data)

    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-white w-[85vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
        <div className="flex justify-end translate-x-4 -translate-y-16">
          <RxCross2
            size={18}
            color="black"
            className="w-8 h-8 p-1 bg-white rounded-full"
            cursor={"pointer"}
            onClick={() => {}}
          />
        </div>

        <div className="">
          <div className="grid grid-cols-3 gap-7">
            {data.map((i, id) => {
              return (
                <React.Fragment key={id}>
                  <div className="flex flex-col items-center gap-3 ">
                    <div
                      className="cursor-pointer w-28"
                      onClick={() => {
                        settoggle(false);
                      }}
                    >
                      <img
                        src={i.image}
                        className="object-cover w-16 mx-auto rounded-lg "
                        alt=""
                      />
                    </div>
                    <h1 className="text-sm text-[#545454]">{i.tittle}</h1>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
