import React from "react";
import { pen1, pen4, pen5, pen6, pencil, pencil2 } from "@/utils/Portal";
import Image from "next/image";
//14promax
const IphoneMake2 = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* part1 */}
        <div className="flex flex-col items-center text-center bg-black p-4 rounded-lg shadow">
          <p className="text-white font-medium">
            Foreged aluminum unibody&nbsp;design
          </p>
          <div className="w-full h-auto max-h-40 object-contain mt-7">
            <figure>
              <img src={pen1} />
            </figure>
          </div>
        </div>
        {/* part2 */}
        <div className="flex flex-col items-center text-center bg-black p-4 rounded-lg shadow">
          <div className="font-medium flex flex-col items-center">
            <p className="p-2 text-gray-400 text-lg">Up to</p>
            <div className="text-3xl text-white pb-4">
              10 more
              <br />
              <div>
                <div className="flex items-center gap-3">
                  hours{" "}
                  <div className="relative">
                    <Image
                      src={pencil}
                      alt="battery"
                      width={30}
                      height={30}
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-400">
              video&nbsp;playback
              <br />
              on iPhone&nbsp;Pro&nbsp;Max
            </div>
          </div>
        </div>
        {/* part3 */}
        <div className="flex flex-col items-center text-center bg-black p-4 rounded-lg shadow">
          <p className="text-gray-400 font-medium mb-4">
            48MP rear cameras and Camera&nbsp;Control
          </p>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <figure className="w-full flex justify-center  max-h-40">
              <img src={pen5} alt="iphone" className="object-contain" />
            </figure>
          </div>
        </div>
        {/* part4 */}
        <div className="flex flex-col items-center text-center bg-black p-10 rounded-lg shadow">
          <div className="font-medium flex flex-col items-center ">
            <p className="p-2 text-gray-400 text-lg">Up to</p>
            <div className="text-4xl text-white pb-4">
              2x
              <br />
              faster
            </div>
            <div className="text-gray-400">GPU&nbsp;performance</div>
          </div>
        </div>
        {/* part5 */}

        <div className="flex flex-col items-center text-center bg-black p-4 rounded-lg shadow">
          <p className="text-gray-400 font-medium mb-4">
            18MP&nbsp;Center&nbsp;Stage front&nbsp;camera
          </p>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <figure className="w-full flex justify-center max-h-40">
              <img src={pen4} alt="blue iphone" className="object-contain" />
            </figure>
          </div>
        </div>

        {/* part6 */}

        <div className="flex flex-col items-center text-center bg-black p-4 rounded-lg shadow">
          <div className="relative m-10">
            <Image
              src={pencil2}
              alt="film"
              width={30}
              height={30}
              className="inline-block"
            />
          </div>
          <p className="text-gray-400 font-medium">
            Record&nbsp;video&nbsp;in
            4K&nbsp;120&nbsp;fps&nbsp;Dolby&nbsp;Vision
          </p>
        </div>
      </div>
    </>
  );
};

export default IphoneMake2;
