import React from "react";

function TopBar() {
  return (
    <div className="py-[20px] px-[20px] border-b-2 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <img src="/images/store.png" className="w-[30px]" />
        </div>
        <div className="flex items-center ">
          <input
            className="text-xl font-[600] outline-none"
            placeholder="Enter Business Name..."
          />
          <img src="/images/pen.png" className="w-[20px]" />
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/bell.png" className="w-[20px]" />
          <img src="/images/settings.png" className="w-[20px]" />
        </div>
      </div>

      <div className="flex justify-between mt-[20px]">
        <div className="border-2 px-3 rounded-3 m-w-[150px]">
          <p>Transaction Details</p>
        </div>
        <div className="border-2 px-3 rounded-3 min-w-[150px]">
          <p className="text-center">Party Details</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
