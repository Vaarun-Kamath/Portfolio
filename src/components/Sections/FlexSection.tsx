import { flexCards } from "@/constants";
import React from "react";

function FlexSection() {
  return (
    <div className="flex flex-col gap-10 w-1/2">
      <div className="grid grid-cols-4 gap-5 select-none">
        {flexCards.map((flex, index) => {
          return (
            <div
              key={index}
              className="flex bg-opacity-50 justify-between items-center text-center flex-col rounded-sm py-5 shadow-2xl shadow-black px-3 bg-neutral-800"
            >
              <span className="text-3xl">{flex.icon}</span>
              <span>
                <p className="text-3xl">{flex.count}</p>
                <p className="text-sm">{flex.title}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlexSection;
