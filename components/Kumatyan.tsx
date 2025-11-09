"use client";
import IphoneMake from "@/uidayo/Aria/IphoneMake";
import IphoneMake2 from "@/uidayo/Aria/IphoneMake2";
import IphoneMake3 from "@/uidayo/Aria/IphoneMake3";
import NativeOption from "@/uidayo/NativeOption";
import { NativeSelect } from "@/uidayo/NativeSelect";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

const Kumatyan = () => {
  const [selectedModel, setSelectedModel] = useState("");
  return (
    <section className="bg-black">
      <div className="screen-max-width rounded-2xl bg-zinc-800 h-full p-10">
        <div className=" mb-12 flex justify-between items-start w-full md:flex">
          <div className="text-white lg:*:text-5xl md:text-4xl text-2xl lg:mb-0 mb-5 font-medium">
            <p>Worth the upgrade?</p>
            <p>100 percent</p>
          </div>
          <div className="items-end gap-4">
            <p className="text-blue-800 flex items-center text-lg">
              Select an iPhone to
            </p>
            <p className="text-blue-800 flex items-center text-lg">
              compare to iPhone 17 Pro:
            </p>
            <NativeSelect
              onChange={(e) => setSelectedModel(e.target.value)}
              defaultValue=""
            >
              <NativeOption value="">iPhone 15 Pro Max</NativeOption>
              <NativeOption value="iPhone 14 pro Max">
                iPhone 14 Pro Max
              </NativeOption>
              <NativeOption value="iPhone 13 Pro Max">
                iPhone 13 Pro Max
              </NativeOption>
            </NativeSelect>
          </div>
        </div>
        <div>
          <p className="font-medium text-white mb-3">
            A few ways iPhone 17 Pro gives you more
          </p>
          <div className="flex flex-wrap">
            {selectedModel === "" && <IphoneMake />}
            {selectedModel === "iPhone 14 pro Max" && <IphoneMake2 />}
            {selectedModel === "iPhone 13 Pro Max" && <IphoneMake3 />}
          </div>
        </div>
        <div className="p-10 flex flex-col items-center">
          <h1 className="text-white text-2xl">Trade In</h1>
          <p className="text-center">
            Get credit toward a new iPhone when you trade in an eligible device
          </p>
          <a
            href="/"
            className="text-blue-500 hover:underline flex items-center justify-center gap-2"
          >
            <span>Find your trade-in value</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={3}
              stroke="blue"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 4l8 8-8 8"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kumatyan;
