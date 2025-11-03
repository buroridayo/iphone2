"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { manuVideo, smallManuVideo } from "@/utils/Portal";

const MainHeader = () => {
  const [videoSrc, setVideoSrc] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);
  //videosize change
  useEffect(() => {
    const handleVideoSet = () => {
      if (window.innerWidth < 768) {
        setVideoSrc(manuVideo);
      } else {
        setVideoSrc(smallManuVideo);
      }
    };

    handleVideoSet();

    window.addEventListener("resize", handleVideoSet);
    return () => window.removeEventListener("resize", handleVideoSet);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const delegate = document.querySelector("#delegate");

    if (!video || !delegate) return;

    const handleVideoEnd = () => {
      gsap.to(delegate, {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [videoSrc]);

  return (
    <section id="hero">
      <div>
        <video
          id="exploreVideo"
          autoPlay
          muted
          playsInline
          key={videoSrc}
          ref={videoRef}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div id="delegate">
        <a href="/">BUY</a>
        <p>From $199/month or $970</p>
      </div>
    </section>
  );
};

export default MainHeader;
