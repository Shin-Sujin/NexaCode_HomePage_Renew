import StepTable from "../startPageComponents/StepTable";

export default function Section06() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center xl:px-20 max-xl:px-10 py-36 h-screen overflow-y-hidden">
      <div className="flex flex-col max-lg:gap-10">
        <div>06. HOW WE WORK</div>
        <h2
          className="mt-10 text-center
        max-md:w-[50rem] text-[3rem] font-normal"
        >
          <span className="font-bold ">
            <span className="font-bold ">처음부터 끝까지, </span>
            넥사코드가 함께합니다
          </span>
        </h2>
        <div className="relative w-full pt-20 flex justify-center items-center">
          {/* 제목 밑 내용 */}
          <StepTable />
        </div>
      </div>
    </div>
  );
}
