import Image from "next/image";
import ButtonPage02 from "../startPageComponents/ButtonPage02";

export default function Section01() {
  return (
    <div className="container relative xl:px-20 max-xl:px-10 py-36 w-full">
      <div className="flex flex-col max-lg:gap-10">
        <div>01. ISSUES</div>
        <h2 className="has_text_move_anim mt-10 text-center perspective-[400px] max-md:w-[50rem] text-[3rem] font-normal">
          <div
            className="has_fade_anim w-full"
            data-fade-from="bottom"
            data-duration="0.5"
          >
            <span className="font-bold ">개발사 선정에 </span>
            고민이 많으시죠?
            <br />
          </div>
        </h2>
        <span className="text-gray-500 text-3xl text-center mt-2">
          무엇을 만들지보다, 누구와 함께할지가 더 중요한 고민일지도 모릅니다.
        </span>
        <div className="relative w-full pt-20 flex flex-col items-center justify-center gap-10">
          <Image
            src="/images/startPage/Container.svg"
            alt="section01"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <ButtonPage02 />
        </div>
      </div>
    </div>
  );
}
