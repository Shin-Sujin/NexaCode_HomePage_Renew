import Image from "next/image";

export default function OverlapCard() {
  return (
    <div className="relative w-full max-w-xl">
      {/* 뒤에 있는 이미지 */}
      <div className="w-[18.9375rem] h-[25.8125rem] relative overflow-hidden">
        <Image
          src="/images/page07Image2.webp"
          alt="Card Background"
          fill
          className="object-cover"
        />
      </div>

      {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
      <div className="absolute bottom-0 right-[-3rem] bg-white p-12 w-[24.375rem] h-[18.75rem]">
        <p className="text-sm text-gray-500 mb-2">Branding — 14 Jan 2024</p>
        <h2 className="text-xl font-semibold mb-4">
          How to bring fold to your startup company with Arolax
        </h2>
        <hr className="mb-4" />
        <p className="text-base font-semibold">Read More</p>
      </div>
    </div>
  );
}
