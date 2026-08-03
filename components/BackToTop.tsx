"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-8
        right-8
        z-50
        w-12
        h-12
        rounded-full
        bg-yellow-500
        text-black
        flex
        items-center
        justify-center
        shadow-lg
        hover:bg-yellow-400
        transition
      "
      aria-label="Back to top"
    >
      <ArrowUp size={22} />
    </button>
  );
}