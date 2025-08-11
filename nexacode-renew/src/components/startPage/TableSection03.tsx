export default function TableSection03() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:gap-x-24 lg:gap-x-16 justify-center items-center ">
      <div>
        <div className="service-item-top">
          앱 개발 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>250만 다운로드를 만든
            팀이 직접 증명
          </span>
        </div>
        <div className="service-item">
          홈페이지 제작 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>평범한 웹부터 모니터링
            · 관리자 웹까지
          </span>
        </div>

        <div className="service-item">
          검색엔진 최적화 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>광고 없이도, 자연스럽게
            최상단 노출
          </span>
        </div>
      </div>
      <div>
        <div className="service-item-top">
          주 1회 정기 보고 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>매주 확인하는 진짜 진행
            상황
          </span>
        </div>
        <div className="service-item">
          지속적인 유지보수 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>서비스는 배포 후부터
            시작입니다
          </span>
        </div>

        <div className="service-item">
          실전형 컨설팅 <br className="max-lg:block hidden" />
          <span className="font-normal">
            <span className="max-lg:hidden">&nbsp;</span>앱 출시부터 서비스
            매각까지 전 과정 지원
          </span>
        </div>
      </div>
    </div>
  );
}
