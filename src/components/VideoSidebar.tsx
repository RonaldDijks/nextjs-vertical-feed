import { useState } from "react";
import {
  BookmarkButton,
  CommentButton,
  LikeButton,
  ShareButton,
} from "./SideButton";

export const VideoSidebar = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-end">
      <LikeButton
        subtitle="45.9K"
        active={isLiked}
        onClick={() => setIsLiked(!isLiked)}
      />
      <CommentButton subtitle="740" />
      <BookmarkButton
        subtitle="3506"
        active={isBookmarked}
        onClick={() => setIsBookmarked(!isBookmarked)}
      />
      <ShareButton subtitle="5685" />
    </div>
  );
};
