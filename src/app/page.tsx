import { VideoScroller } from "@/components/VideoScroller";

const videos = [
  { id: "1", src: "/videos/tiktok_01.mp4" },
  { id: "2", src: "/videos/tiktok_02.mp4" },
  { id: "3", src: "/videos/tiktok_03.mp4" },
  { id: "4", src: "/videos/tiktok_04.mp4" },
  { id: "5", src: "/videos/tiktok_05.mp4" },
  { id: "6", src: "/videos/tiktok_06.mp4" },
];

export default function Home() {
  return <VideoScroller videos={videos} />;
}
