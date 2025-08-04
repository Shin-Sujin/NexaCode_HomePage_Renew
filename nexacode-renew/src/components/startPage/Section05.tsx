import TestimonialRotator from "../startPageComponents/TestimonialRotator";

export default function Section05() {
  return (
    <div className="container relative xl:px-20 max-xl:px-10 py-36">
      <div className="flex flex-col max-lg:gap-10">
        <div className="text-white"> 05.WHAT OUR CLIENTS SAY</div>
        <h2 className="has_text_move_anim mt-10 text-center perspective-[400px] max-md:w-[50rem] text-[3rem] font-normal text-white">
          <div
            className="has_fade_anim w-full"
            data-fade-from="bottom"
            data-duration="0.5"
          >
            고객이 말하는 넥사코드는 &quot;
            <span className="font-bold ">함께 일하고 싶은 개발사</span>{" "}
          </div>
        </h2>

        <div className="relative w-full pt-20">
          <div className="flex flex-row justify-center w-full">
            <TestimonialRotator />
          </div>
        </div>
      </div>
    </div>
  );
}
