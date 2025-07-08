import React from "react";
import Image from "next/image";
import ButtonPage03 from "@/src/components/startPageComponents/ButtonPage03";

export default function WorkGallery() {
  const works = [
    {
      id: 1,
      title: "Victoria kinko",
      tag: "Design - 2019",
      image: "/images/victoria_kinko.webp",
      alt: "Victoria kinko",
    },
    {
      id: 2,
      title: "Jimmy fermin",
      tag: "Design - 2019",
      image: "/images/jimmyfermin.webp",
      alt: "Jimmy fermi",
    },
    {
      id: 3,
      title: "Briyokath Woody",
      tag: "Design - 2019",
      image: "/images/briyokathwoody.webp",
      alt: "Briyo kathwood",
    },
    {
      id: 4,
      title: "Mastartery",
      tag: "Design - 2019",
      image: "/images/mastartery.webp",
      alt: "Mastarter",
    },
    {
      id: 5,
      title: "Festonax card",
      tag: "Design - 2019",
      image: "/images/festonaxcard.webp",
      alt: "Festonax card",
    },
  ];

  return (
    <div className="works-wrapper-box">
      {works.map((work) => (
        <div key={work.id} className="work-box">
          <div className="thumb">
            <Image src={work.image} alt={work.alt} width={800} height={600} />
          </div>
          <div className="title">{work.title}</div>
          <span className="tag">{work.tag}</span>
        </div>
      ))}
      <ButtonPage03 />
    </div>
  );
}
