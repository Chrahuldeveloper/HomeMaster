import React from "react";
import { TbLoader2 } from "react-icons/tb";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div>
        <TbLoader2 size="35" color="gray" className="animate-spin" />
      </div>
    </div>
  );
}
