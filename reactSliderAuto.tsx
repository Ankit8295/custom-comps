import { useState, useEffect } from "react";
import imageA from "assets/Images/loginImageA.png";
import imageB from "assets/Images/loginImageB.png";
import imageC from "assets/Images/loginImageC.png";
import imageD from "assets/Images/loginImageD.png";

const Slider = () => {
  const sliderData: string[] = [imageA, imageB, imageC, imageD];
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval: any;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function autoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="w-full h-full max-h-screen flex  relative overflow-hidden">
      <div
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        className={`transition-all duration-300  w-full h-full flex`}
      >
        {sliderData.map((slide, index) => {
          return (
            <img
              src={slide}
              key={index}
              alt="slide"
              className={` w-full min-w-full object-fill h-full`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
