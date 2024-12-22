import { IconType } from "react-icons";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

interface SideButtonProps {
  active?: boolean;
  subtitle?: string;
  onClick?: () => void;
}

export const SideButton = ({
  activeColor,
  icon: Icon,
  active,
  subtitle,
  onClick,
}: { icon: IconType; activeColor?: string } & SideButtonProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <button
        className="bg-[#1F1F1F] hover:bg-[#141414] text-white px-4 py-4 rounded-full"
        onClick={onClick}
      >
        <Icon
          width={24}
          height={24}
          className={active ? activeColor ?? "text-white" : ""}
        />
      </button>
      {subtitle && <span className="text-xs font-bold">{subtitle}</span>}
    </div>
  );
};

export const LikeButton = ({ active, subtitle, onClick }: SideButtonProps) => {
  return (
    <SideButton
      icon={FaHeart}
      active={active}
      activeColor="text-red-500"
      subtitle={subtitle}
      onClick={onClick}
    />
  );
};

export const BookmarkButton = ({
  active,
  subtitle,
  onClick,
}: SideButtonProps) => {
  return (
    <SideButton
      icon={FaBookmark}
      active={active}
      activeColor="text-yellow-500"
      subtitle={subtitle}
      onClick={onClick}
    />
  );
};

export const ShareButton = ({ active, subtitle, onClick }: SideButtonProps) => {
  return (
    <SideButton
      icon={FaShare}
      active={active}
      subtitle={subtitle}
      onClick={onClick}
    />
  );
};

export const CommentButton = ({
  active,
  subtitle,
  onClick,
}: SideButtonProps) => {
  return (
    <SideButton
      icon={IoChatbubble}
      active={active}
      subtitle={subtitle}
      onClick={onClick}
    />
  );
};
