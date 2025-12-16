import React, { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="w-full h-1 bg-gray-300">
      <div
        className="h-1 bg-magenta-500"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;
