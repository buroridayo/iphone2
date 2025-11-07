import React, { useRef } from "react";
import { tailMesa } from "../Square";
import { gsap } from "gsap";

const TailDj = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentIndex = useRef(0);
  const slideWidth = 400;
  const maxIndex = tailMesa.length - 1;

  const handleLight = () => {
    if (currentIndex.current > 0) {
      currentIndex.current -= 1;
      gsap.to(containerRef.current, {
        x: -slideWidth * currentIndex.current,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  const handleRight = () => {
    if (currentIndex.current < maxIndex) {
      currentIndex.current += 1;
      gsap.to(containerRef.current, {
        x: -slideWidth * currentIndex.current,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-row gap-1 py-10 min-w-max" ref={containerRef}>
          {tailMesa.map((list) => (
            <div
              key={list.id}
              className="shrink-0 flex flex-col items-center justify-center rounded-3xl p-2 w-[400px] h-full text-center"
            >
              <img
                src={list.image}
                alt={`photo-${list.id}`}
                className="rounded-2xl object-cover h-full w-full mb-4"
              />
              <div className="space-y-1">
                {list.textList.map((item) => (
                  <p key={item} className="text-white text-sm sm:text-base">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button
            className="p-3 bg-zinc-800 rounded-full shadow hover:bg-blue-200"
            onClick={handleLight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-3 bg-zinc-800 rounded-full shadow hover:bg-blue-200"
            onClick={handleRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={5}
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TailDj;
