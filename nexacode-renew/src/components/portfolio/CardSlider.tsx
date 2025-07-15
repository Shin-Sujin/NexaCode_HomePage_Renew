"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "프로젝트 A",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "프로젝트 B",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "프로젝트 C",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200",
      title: "프로젝트 D",
    },
  ];

  return (
    <div className="w-full px-6 py-10">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.title} className="w-full mb-4" />
              <h3 className="text-center font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
