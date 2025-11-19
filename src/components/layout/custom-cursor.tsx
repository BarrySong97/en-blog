import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/dist/mouse-follower.min.css";

MouseFollower.registerGSAP(gsap);

export default function CustomCursor() {
  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.3,
      skewing: 1,
      skewingText: 3,
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return null;
}
