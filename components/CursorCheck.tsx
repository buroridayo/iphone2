"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import SquareBox from "./SquareBox";

const CursorCheck = () => {
  useGSAP(() => {
    gsap.to(".cursor-heading", { opacity: 1, y: 0, delay: 4 });
    gsap.to(".unique", { opacity: 1, y: 0, delay: 4 });
  });
  return (
    <section id="cursor">
      <div className="screen-max-width">
        <div className="cursor-div">
          <h1 className="cursor-heading">Get the highlights</h1>
          <div className="flex flex-wrap items-end gap-6">
            <p className="unique">Watch the film</p>
            <Image
              src="/watch.svg"
              alt="playbutton"
              width={20}
              height={20}
              className="ml-2 unique"
            />
          </div>
        </div>
        <SquareBox />
      </div>
    </section>
  );
};

export default CursorCheck;
