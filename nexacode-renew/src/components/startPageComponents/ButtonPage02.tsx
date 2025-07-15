import React from "react";

export default function ButtonPage02() {
  return (
    <button
      className="has_fade_anim mr-24 flex w-[10.625rem] h-[10.625rem] px-[2.68125rem] py-0 
      justify-center items-center rounded-[5.3125rem] bg-white text-[#121212] text-center font-kanit 
      text-[1.125rem] font-semibold leading-[1.18125rem] border-[0.5px] border-[#666666] cursor-pointer max-xs:mt-12"
      data-fade-from="top"
      data-fade-offset="100"
      data-delay="0.1"
      data-duration="1.5"
      data-ease="bounce"
    >
      Explore all
      <br />
      services
    </button>
  );
}
