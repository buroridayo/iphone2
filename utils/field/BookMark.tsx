import React from "react";
import { bookLoo } from "../Square";
import { useRef } from "react";
import { gsap } from "gsap";

const BookMark = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  //state management
  const currentIndex = useRef(0);
  const slideWidth = 400;
  const maxIndex = bookLoo.length - 1;

  //control button
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
          {bookLoo.map((list) => (
            <div
              key={list.id}
              className="shrink-0 flex flex-col items-center justify-center rounded-3xl p-2 w-[400px] h-full text-center"
            >
              <img
                src={list.image}
                alt={`photo-${list.id}`}
                className="rounded-2xl object-cover h-ful w-full mb-4 hover:scale-105 duration-200"
              />
              <div className="space-y-1">
                {list.textList.map((text) => (
                  <p key={text} className="text-white text-sm sm:text-base ">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-5">
          {/* light button */}
          <button
            className="p-3 bg-zinc-800 rounded-full shadow hover:bg-gray-400"
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
          {/* right button */}
          <button
            className="p-3 bg-zinc-800 rounded-full  hover:bg-gray-400"
            onClick={handleRight}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default BookMark;
