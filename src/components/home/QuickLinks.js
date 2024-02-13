import React from "react";

function QuickLinks() {
  return (
    <div className="mt-3 bg-white p-2 rounded-3">
      <p className="text-black">Quick Links</p>
      <div className="mt-4 flex justify-between">
        <div>
          <img src="/images/receipt.png" alt="" className="w-[30px]" />
          <p>Add Txn</p>
        </div>
        <div>
          <img src="/images/receipt.png" alt="" className="w-[30px]" />
          <p>Sale Report</p>
        </div>
        <div>
          <img src="/images/receipt.png" alt="" className="w-[30px]" />
          <p>Add Txn</p>
        </div>
        <div>
          <img src="/images/receipt.png" alt="" className="w-[30px]" />
          <p>Add Txn</p>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
