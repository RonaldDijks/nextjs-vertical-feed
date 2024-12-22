"use client";

import { useEffect, useRef, useState } from "react";
import { Video } from "./Video";

interface SnapEvent extends Event {
  snapTargetBlock: HTMLElement;
}

export interface Video {
  id: string;
  src: string;
}

export interface VideoScrollerProps {
  videos: Video[];
}

export const VideoScroller = ({ videos }: VideoScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVideo, setCurrentVideo] = useState(videos[0].id);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function handle(_event: Event) {
      const event = _event as SnapEvent;
      const newVideo = event.snapTargetBlock;

      if (!newVideo.id) {
        console.error("No id found for new video");
        return;
      }

      setCurrentVideo(newVideo.id);
    }

    container.addEventListener("scrollsnapchange", handle);
    return () => container.removeEventListener("scrollsnapchange", handle);
  }, [currentVideo]);

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
    >
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          src={video.src}
          playing={currentVideo === video.id}
        />
      ))}
    </div>
  );
};
