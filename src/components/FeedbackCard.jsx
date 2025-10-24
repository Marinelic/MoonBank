import React from "react";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex flex-col justify-between px-8 py-10 rounded-[16px] max-w-[370px] w-full 
    bg-[#111827]/50 border border-transparent transition-all duration-300 
    hover:border-yellow-400/60 hover:bg-[#1a2235]/60 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
  >
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-gray-200 my-4 mt-0">
      {content}
    </p>

    <div className="flex flex-row items-center">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full object-cover"
      />

      <div className="flex flex-col ml-4 text-left">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-400">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
