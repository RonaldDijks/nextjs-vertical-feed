"use client";

import { useEffect, useRef, useState } from "react";
import { Video } from "./Video";

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

    function handle(event: Event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newVideo = (event as any).snapTargetBlock as HTMLElement;
      console.log(newVideo.id);
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
