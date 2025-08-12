// scrollModes.ts
export type SectionMode = "full" | "free";

export const SECTION_MODE: Record<number, SectionMode> = {
  0: "full",
  1: "full",
  2: "full",
  3: "free", // ButtonPage02: 내부 자유 스크롤
  4: "full",
  5: "full",
  6: "full",
  7: "full",
  8: "full",
  9: "full",
  10: "full",
  11: "full",
  12: "full",
  13: "full",
  14: "full",
  15: "full",
  16: "full",
  17: "full",
  18: "full",
  19: "full",
};

export const isFullPageSection = (index: number) =>
  SECTION_MODE[index] !== "free";
