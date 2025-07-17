import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white inline-block">
      <Image
        src={imageSrc}
        alt={title}
        width={800}
        height={400}
        className="w-full h-auto block mb-2"
      />
      <div className="font-550 text-2xl">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
};

export default PortfolioCard;
