"use client";
import BookMark from "@/utils/field/BookMark";
import LoveGun from "@/utils/field/LoveGun";
import TailDj from "@/utils/field/TailDj";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PracticeSlide = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  return (
    <section className="h-fit w-full overflow-hidden bg-black sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="mb-12 justify-between items-end w-full md:flex">
          <div className="text-gray-400 lg:mb-0 mb-5 font-medium">
            <p className="lg:text-6xl md:text-5xl text-3xl">iOS 26.NEW look.</p>{" "}
            <p className="lg:text-6xl md:text-5xl text-3xl">Even more magic</p>
          </div>
        </div>
        {[BookMark, TailDj, LoveGun].map((Cpt, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="opacity-0 translate-y-20"
          >
            <Cpt />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeSlide;
