import Image from "next/image";
import ButtonPage02 from "../startPageComponents/ButtonPage02";

export default function Section01() {
  return (
    <div className=" container relative  justify-center bg-green-300 items-center xl:px-20 max-xl:px-10 py-36">
      <div className="flex flex-col max-lg:gap-10 w-full">
        <div className="text-2xl mt-10">01. ISSUES</div>
        <div className="w-full h-[20vh] text-center">
          <h2 className="mt-20 text-center max-md:w-[50rem] text-[5rem] font-normal bg-green-300">
            <span className="font-bold ">개발사 선정에 </span>
            고민이 많으시죠?
            <br />
          </h2>
          <span className="text-gray-500 text-5xl text-center mt-2">
            무엇을 만들지보다, 누구와 함께할지가 더 중요한 고민일지도 모릅니다.
          </span>
        </div>
        <div className="w-full h-[60vh]">
          <div className="relative w-full pt-20 flex flex-col items-center justify-center gap-10">
            <Image
              src="/images/startPage/Container.svg"
              alt="section01"
              width={800}
              height={800}
              className="w-[80%]"
            />
            <ButtonPage02 />
          </div>
        </div>
      </div>
    </div>
  );
}
