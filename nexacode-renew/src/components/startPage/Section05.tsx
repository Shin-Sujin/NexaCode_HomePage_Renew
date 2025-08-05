import TestimonialRotator from "../startPageComponents/TestimonialRotator";

export default function Section05() {
  return (
    <div className=" container relative  justify-center bg-black items-center xl:px-20 max-xl:px-10 py-36 h-screen">
      <div className="flex flex-col max-lg:gap-10 w-full">
        <div className="text-2xl mt-10 text-white">
          05. WHAT OUR CLIENTS SAY
        </div>
        <div className="w-full h-[20vh] text-center">
          <h2 className="mt-20 text-center max-md:w-[50rem] text-[5rem] font-normal  text-white">
            <span>
              고객이 말하는 넥사코드는 &quot;
              <span className="font-bold ">
                함께 일하고 싶은 개발사&quot;
              </span>{" "}
            </span>
          </h2>
        </div>

        <div className="relative w-full pt-20">
          <div className="flex flex-row justify-center w-full">
            <TestimonialRotator />
          </div>
        </div>
      </div>
    </div>
  );
}
