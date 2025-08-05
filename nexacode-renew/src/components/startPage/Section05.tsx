import TestimonialRotator from "../startPageComponents/TestimonialRotator";

export default function Section05() {
  return (
    <div className="container relative justify-center  items-center py-36 max-lg:py-10 max-lg:h-screen">
      <div className="flex flex-col max-lg:gap-10 w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg text-white max-md:pt-32">
          05. WHAT OUR CLIENTS SAY
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh]">
          <h2 className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl text-white">
            <span>
              고객이 말하는 넥사코드는
              <span className="font-bold ">
                <br className="max-md:block hidden" />
                &quot;함께 일하고 싶은 개발사&quot;
              </span>{" "}
            </span>
          </h2>
        </div>

        <div className="relative w-full pt-20 max-xxxl:pt-10">
          <div className="flex flex-row justify-center items-center w-full">
            <TestimonialRotator />
          </div>
        </div>
      </div>
    </div>
  );
}
