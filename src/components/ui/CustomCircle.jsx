import React from "react";
const borderColorsMap = {
    white: "border-white",
    black: "border-black",
}
const CustomCircle = ({ className, borderColor }) => {
  return (
    <div className={`border-2 ${borderColorsMap[borderColor]} rounded-full`}>
      <div className={`${className} w-12 h-12 flex justify-center items-center rounded-full`}></div>
    </div>
  );
};

export default CustomCircle;
