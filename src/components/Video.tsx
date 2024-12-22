"use client";

import { useEffect, useRef } from "react";
import { VideoSidebar } from "./VideoSidebar";

interface VideoProps {
  id: string;
  src: string;
  playing: boolean;
}

export const Video = ({ id, src, playing }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (playing) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [playing]);

  return (
    <article
      className="snap-center snap-always h-screen w-full py-4 flex justify-center"
      id={id}
    >
      <div className="flex gap-4">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          controls
          className="h-full rounded-3xl"
        />
        <VideoSidebar />
      </div>
    </article>
  );
};
