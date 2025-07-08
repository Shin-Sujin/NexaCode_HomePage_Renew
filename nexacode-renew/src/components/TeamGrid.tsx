"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const memberRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    if (!containerRef.current) return;

    // 각 멤버에 다른 애니메이션 스타일 적용
    memberRefs.current.forEach((memberRef, index) => {
      if (!memberRef) return;

      // 모든 행: 아래에서 위로 등장
      const animationStyle = {
        opacity: 0,
        y: 100,
        scale: 0.8,
      };

      // 왼쪽부터 차례로 등장하는 효과를 위해 stagger 추가
      gsap.fromTo(memberRef, animationStyle, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2, // 각 멤버마다 0.2초씩 지연
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // 컨테이너 자체에 페이드인 효과 추가
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // 클린업 함수
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-28 w-full"
    >
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          ref={(el) => {
            memberRefs.current[index] = el;
          }}
          className="flex flex-col items-center"
        >
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
