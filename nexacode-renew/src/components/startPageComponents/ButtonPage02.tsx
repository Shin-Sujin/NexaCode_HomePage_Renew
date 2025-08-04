import React from "react";

export default function ButtonPage02() {
  return (
    <button
      className="has_fade_anim mr-24 flex w-[12rem] h-[12rem] px-[2.68125rem] py-0 
      justify-center items-center rounded-full bg-[#D9D9D9] text-[#121212] text-center font-kanit 
      text-[1.3rem] font-normal leading-[2.5rem] border-[0.5px] border- cursor-pointer max-xs:mt-12"
      data-fade-from="top"
      data-fade-offset="100"
      data-delay="0.1"
      data-duration="1.5"
      data-ease="bounce"
    >
      그렇다면
      <br />
      누구에게
      <br />
      맡겨야 할까?
    </button>
  );
}
