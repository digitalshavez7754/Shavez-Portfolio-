import { useState, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && props.video) {
        videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && props.video) {
        videoRef.current.pause();
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {props.video && (
          <video 
            ref={videoRef}
            src={props.video} 
            muted 
            playsInline 
            loop 
            preload="metadata"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease", backgroundColor: "transparent" }}
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
