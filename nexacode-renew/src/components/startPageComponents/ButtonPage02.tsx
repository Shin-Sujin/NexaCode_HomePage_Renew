import ButtonContents02 from "./ButtonContents02";

interface ButtonPage02Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function ButtonPage02({
  sectionRefs,
  startIndex,
}: ButtonPage02Props) {
  return (
    <div
      ref={(el) => {
        if (sectionRefs.current) {
          sectionRefs.current[startIndex] = el;
        }
      }}
    >
      <div className="flex justify-center lg:h-screen h-auto">
        <div
          ref={(el) => {
            if (sectionRefs.current) {
              sectionRefs.current[startIndex + 1] = el;
            }
          }}
        >
          <ButtonContents02 />
        </div>
      </div>
    </div>
  );
}
