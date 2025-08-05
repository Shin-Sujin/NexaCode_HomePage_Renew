import StepTable from "../startPageComponents/StepTable";

export default function Section06() {
  return (
    <div className=" container relative  justify-center bg-green-300 items-center xl:px-20 max-xl:px-10 py-36 h-screen">
      <div className="flex flex-col max-lg:gap-10 w-full">
        <div className="text-2xl mt-10">06. HOW WE WORK</div>
        <div className="w-full h-[20vh] text-center">
          <h2 className="mt-20 text-center max-md:w-[50rem] text-[5rem] font-normal bg-green-200">
            <span className="font-bold ">
              <span className="font-bold ">처음부터 끝까지, </span>
              넥사코드가 함께합니다
            </span>
          </h2>
        </div>
        <div className="relative w-full pt-20 flex justify-center items-center">
          {/* 제목 밑 내용 */}
          <StepTable />
        </div>
      </div>
    </div>
  );
}
