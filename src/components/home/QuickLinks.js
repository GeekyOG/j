import React from "react";

function QuickLinks() {
  return (
    <div className="mt-3 bg-white p-2 rounded-3">
      <p className="text-black font-[700]">Quick Links</p>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col items-center">
          <img src="/images/bills.png" alt="" className="w-[30px]" />
          <p className="text-[12px]">Add Txn</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/seo-report.png" alt="" className="w-[30px]" />
          <p className="text-[12px]">Sale Report</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/transaction.png" alt="" className="w-[30px]" />
          <p className="text-[12px]">Add Txn</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/settings.png" alt="" className="w-[30px]" />
          <p className="text-[12px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
