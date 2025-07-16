export default function Footer() {
  return (
    <footer className="footer relative w-full min-h-[250px] bg-gradient-to-b from-[#23272f] via-[#23272b] to-[#18181b] flex flex-col items-center justify-center text-white py-10">
      <div className="flex flex-col items-center space-y-2">
        <img
          src="/images/nexacode_logo_white.webp"
          alt="NexaCode Logo"
          className="w-32 mb-4"
        />
        <div className="text-center space-y-1">
          <div>(주)넥사코드</div>
          <div>사업자등록번호 : 326-87-03313</div>
          <div>대표 김남정</div>
        </div>
        <div className="pt-8 text-center space-y-1">
          <div>서울시 금천구 디지털로 178 가산 퍼블릭 A동 1515~1516호</div>
          <div>M : nexacode@nexacode.co.kr, C : 010-4009-2398</div>
        </div>
      </div>
    </footer>
  );
}
