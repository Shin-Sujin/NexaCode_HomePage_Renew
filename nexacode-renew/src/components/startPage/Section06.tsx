import StepTable from "../startPageComponents/StepTable";

export default function Section06() {
  return (
    <div className="container relative xl:px-20 max-xl:px-10 py-36">
      <div className="flex flex-col max-lg:gap-10">
        <div>06. HOW WE WORK</div>
        <h2
          className="has_text_move_anim mt-10 text-center perspective-[400px] 
        max-md:w-[50rem] text-[3rem] font-normal"
        >
          <div
            className="has_fade_anim w-full"
            data-fade-from="bottom"
            data-duration="0.5"
          >
            <span className="font-bold ">처음부터 끝까지, </span>
            넥사코드가 함께합니다
          </div>
        </h2>
        <div className="relative w-full pt-20 flex justify-center items-center">
          {/* 제목 밑 내용 */}
          <StepTable />
        </div>
      </div>
    </div>
  );
}
