import { pauseBtn, playBtn, replayBtn } from "@/utils/Portal";
import { chocoLatier } from "@/utils/Square";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const SquareBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<(HTMLVideoElement | null)[]>(new Array(6).fill(null));
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>(
    new Array(6).fill(null)
  );
  const videoDivRef = useRef<(HTMLSpanElement | null)[]>(
    new Array(6).fill(null)
  );

  const [loadData, setLoadData] = useState<HTMLVideoElement[]>([]);
  const [video, setVideo] = useState({
    isEnd: false,
    isLastVideo: false,
    startPlay: false,
    isPlaying: false,
    videoId: 0,
  });

  const { isEnd, isLastVideo, startPlay, isPlaying, videoId } = video;

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = window.innerWidth;

    gsap.to(container, {
      x: -slideWidth * videoId,
      duration: 2,
      ease: "power2.inOut",
    });

    const currentVideo = videoRef.current[videoId];
    if (currentVideo) {
      ScrollTrigger.create({
        trigger: currentVideo,
        start: "top center",
        onEnter: () => {
          currentVideo.muted = true;
          setVideo((pre) => ({
            ...pre,
            startPlay: true,
            isPlaying: true,
          }));
        },
      });
    }

    ScrollTrigger.refresh();
  }, [videoId]);

  // 再生・停止管理
  useEffect(() => {
    const currentVideo = videoRef.current[videoId];
    if (!currentVideo) return;

    if (isPlaying) {
      currentVideo.play();
      videoRef.current.forEach((v, i) => {
        if (i !== videoId) v?.pause();
      });
    } else {
      currentVideo.pause();
    }
  }, [isPlaying, videoId]);

  // プログレスバー処理
  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;
    const currentVideo = videoRef.current[videoId];

    if (!currentVideo || !span[videoId]) return;

    const animation = gsap.to(span[videoId], {
      onUpdate: () => {
        const progress = Math.ceil(animation.progress() * 100);
        if (progress !== currentProgress) {
          currentProgress = progress;
          gsap.to(videoDivRef.current[videoId], {
            width:
              window.innerWidth < 768
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });
          gsap.to(span[videoId], {
            width: `${currentProgress}%`,
            backgroundColor: "white",
          });
        }
      },
      onComplete: () => {
        if (isPlaying) {
          gsap.to(videoDivRef.current[videoId], { width: "12px" });
          gsap.to(span[videoId], { background: "#afafaf" });
        }
      },
    });

    if (videoId === 0) {
      animation.restart();
    }

    const animationUpdate = () => {
      animation.progress(
        currentVideo.currentTime / chocoLatier[videoId].videoDuration
      );
    };

    if (isPlaying) {
      gsap.ticker.add(animationUpdate);
    } else {
      gsap.ticker.remove(animationUpdate);
    }
  }, [videoId, startPlay, isPlaying]);

  // 状態変更処理
  const handleProcess = (action: string, i: number = 0) => {
    const currentVideo = videoRef.current[video.videoId];

    switch (action) {
      case "play":
        currentVideo?.play();
        videoRef.current.forEach((v, idx) => {
          if (idx !== video.videoId) v?.pause();
        });
        setVideo((pre) => ({ ...pre, isPlaying: true }));
        break;
      case "pause":
        currentVideo?.pause();
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        break;
      case "video-reset":
        videoRef.current.forEach((v) => v?.pause());
        setVideo({
          isEnd: false,
          isLastVideo: false,
          startPlay: false,
          isPlaying: false,
          videoId: 0,
        });
        break;
      case "video-end":
        setVideo((pre) => ({
          ...pre,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      default:
        return video;
    }
  };

  const handleLoadMeta = (
    _: boolean,
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const video = e.currentTarget;
    setLoadData((pre) => [...pre, video]);
  };

  return (
    <>
      <div ref={containerRef} className="square">
        {chocoLatier.map((list, m) => (
          <div key={list.id} className="square-div">
            <div className="square-container">
              <div className="square-contents">
                <video
                  playsInline
                  muted
                  autoPlay
                  className="pointer-events-none"
                  ref={(element) => {
                    videoRef.current[m] = element;
                  }}
                  onEnded={() =>
                    m !== chocoLatier.length - 1
                      ? handleProcess("video-end", m)
                      : handleProcess("video-last")
                  }
                  onLoadedMetadata={(e) => handleLoadMeta(true, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="square-text">
                {list.textList.map((text) => (
                  <p key={text} className="text-content">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn">
        <div className="btn-div">
          {chocoLatier.map((_, i) => (
            <span
              key={i}
              ref={(e) => {
                videoDivRef.current[i] = e;
              }}
              className="btn-sp"
            >
              <span
                className="btn-sp2"
                ref={(e) => {
                  videoSpanRef.current[i] = e;
                }}
              />
            </span>
          ))}
        </div>
        <button className="btn-control">
          <Image
            src={isLastVideo ? replayBtn : !isPlaying ? playBtn : pauseBtn}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default SquareBox;
