import React from "react";
import CustomCircle from "./ui/CustomCircle";

const ExpenseChartHeader = () => {
  return (
    <header className="bg-red-500 rounded-20 py-6 px-8 flex items-center justify-between">
      <div className="flex flex-col">
        <p className="text-preset-4 leading-preset-4 text-white">My balance</p>
        <p className="text-preset-2 font-preset-2 text-white leading-preset-2">
          $921.48
        </p>
      </div>
      <div className="flex items-center -space-x-6">
        <div className="relative z-10">
          <CustomCircle className="bg-transparent" borderColor="white" />
        </div>
        <div className="relative z-0">
          <CustomCircle className="bg-black" borderColor="black" />
        </div>
      </div>
    </header>
  );
};

export default ExpenseChartHeader;
