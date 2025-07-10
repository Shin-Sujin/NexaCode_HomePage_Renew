import React from "react";

export default function AchievementTable() {
  const achievements = [
    {
      id: 1,
      platform: "Awwwards",
      description: "3x creative agency of the day",
      status: "Winner",
    },
    {
      id: 2,
      platform: "Envato",
      description: "1x agency of the year",
      status: "Awarded",
    },
    {
      id: 3,
      platform: "CSS Winner",
      description: "5x honorable mentioned",
      status: "Mentioned",
    },
    {
      id: 4,
      platform: "Behance",
      description: "2x Featured design of the week",
      status: "Winner",
    },
    {
      id: 5,
      platform: "Dribbble",
      description: "8x Best design of the day",
      status: "Winner",
    },
  ];

  return (
    <div
      className="w-full awwwards-thin has_text_move_anim"
      // data-delay="0.5"
      style={{ overflow: "hidden" }}
    >
      <table
        className="w-full border-collapse has_fade_anim"
        data-fade-from="bottom"
        data-fade-offset="10"
        data-duration="0.5"
      >
        <tbody>
          {achievements.map((achievement) => (
            <tr key={achievement.id} className="border-b border-[#e5e5e5]">
              <td className="py-3 pr-6 text-left">{achievement.platform}</td>
              <td className="py-3 px-6 pl-32">{achievement.description}</td>
              <td className="py-3 px-6 text-right">{achievement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
