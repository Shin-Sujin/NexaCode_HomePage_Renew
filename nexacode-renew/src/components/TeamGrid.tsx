import React from "react";
import Image from "next/image";

export default function TeamGrid() {
  const teamMembers = [
    {
      id: 1,
      name: "Kamal Abraham",
      position: "CEO, Wealcoder",
      image: "/images/member1.webp",
      alt: "Kamal Abraham",
    },
    {
      id: 2,
      name: "Selina Gomaze",
      position: "Junior Executive",
      image: "/images/member2.webp",
      alt: "Selina Gomaze",
    },
    {
      id: 3,
      name: "Pedrik Vadra",
      position: "Sr. Developer",
      image: "/images/member3.webp",
      alt: "Pedrik Vadra",
    },
    {
      id: 4,
      name: "Thomas Ribbon",
      position: "UX Designer",
      image: "/images/member4.webp",
      alt: "Thomas Ribbon",
    },
    {
      id: 5,
      name: "Sofia Uironka",
      position: "Developer",
      image: "/images/member5.webp",
      alt: "Sofia Uironka",
    },
    {
      id: 6,
      name: "Joseph Buttler",
      position: "Developer",
      image: "/images/member6.webp",
      alt: "Joseph Buttler",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-28 w-full">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex flex-col items-center">
          <Image
            src={member.image}
            alt={member.alt}
            width={220}
            height={220}
            className="rounded-full object-cover mb-4"
          />
          <div className="text-xl font-medium text-center">{member.name}</div>
          <div className="text-gray-500 text-center text-sm mt-1">
            {member.position}
          </div>
        </div>
      ))}
    </div>
  );
}
