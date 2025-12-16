import React, { useEffect, useRef, useState } from "react";

const SVGComponent = () => {
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const [transformWidth, setTransformWidth] = useState(0);
  const updateStrokeDashoffset = () => {
    if (pathRef1.current) {
      let numberValue = parseFloat(pathRef1.current.style.strokeDashoffset);
      let newOffset = numberValue - 1.5;
      if (newOffset <= -2490) {
        newOffset = -900;
      }
      pathRef1.current.style.strokeDashoffset = `${newOffset}px`;
      pathRef1.current.style.strokeDasharray = `190px 1400px`;
    }
    if (pathRef2.current) {
      let numberValue = parseFloat(pathRef2.current.style.strokeDashoffset);
      let newOffset = numberValue - 1.5;
      if (newOffset <= -2040) newOffset = -450;
      pathRef2.current.style.strokeDashoffset = `${newOffset}px`;
      pathRef2.current.style.strokeDasharray = `190px 1400px`;
    }
    if (pathRef3.current) {
      let numberValue = parseFloat(pathRef3.current.style.strokeDashoffset);
      let newOffset = numberValue - 1.5;
      if (newOffset <= -1590) newOffset = 0;
      pathRef3.current.style.strokeDashoffset = `${newOffset}px`;
      pathRef3.current.style.strokeDasharray = `190px 1400px`;
    }
  };

  useEffect(() => {
    const viewBoxWidth = 1440;
    const transformValue = viewBoxWidth - 350;
    setTransformWidth(transformValue);
  }, []);
  useEffect(() => {
    // Set up interval to update strokeDashoffset every second
    const interval = setInterval(() => {
      updateStrokeDashoffset();
    }, 1); // Update every second

    return () => {
      // Clean up the interval on component unmount
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 311"
        className="sc-01-Hero__LinesDesktop-sc-1zfsxy-2 gNTXrB"
        style={{ position: "absolute", marginTop: "100px" }}
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          clipPath="url(#hero-lines_svg__clip0_627_52794)"
        >
          <image
            href={require(`@/assets/image/base/intro_left.png`)}
            scale={0.8}
            transform="translate(-20, 55)"
          />
          <image
            href={require(`@/assets/image/base/intro_right.png`)}
            transform={`translate(${transformWidth}, 55)`}
            // transform="translate(1000, 55)"
          />
          <path
            d="M -184.5 295 L 160.974 295 C 168.218 295 279.797 198.232 287.041 198.232 L 1104.933 197.631 C 1110.873 197.631 1226.208 295 1232.148 295 L 1503 295"
            stroke="#F7F9FA"
            strokeWidth="15"
          />
          <path
            d="M -182.819 263.74 L 160.26 259.749 C 167.504 259.749 273.496 167.77 280.74 167.77 L 1110.605 165.573 C 1116.545 165.573 1231.88 263.74 1237.82 263.74 L 1504.681 263.74"
            stroke="#F7F9FA"
            strokeWidth="15"
          />
          <path
            d="M -181.433 32.933 L 153.664 32.933 C 160.908 32.933 274.882 136.085 282.126 136.085 L 1114.386 135.12 C 1120.326 135.12 1238.854 32.933 1244.794 32.933 L 1506.067 32.933"
            stroke="#F7F9FA"
            strokeWidth="15"
          />
          <path
            ref={pathRef3}
            className="hero-path"
            d="M-0 295 L 160.974 295 C 168.218 295 279.797 198.232 287.041 198.232 L 1104.933 197.631 C 1110.873 197.631 1226.208 295 1232.148 295 L 1503 295"
            stroke="#3b82f6"
            // stroke="url(#hero-lines_svg__hero-gradient-1)"
            strokeWidth="15.691"
            style={{ strokeDashoffset: 0, strokeDasharray: "190px, 1400x" }}
          ></path>
          <path
            ref={pathRef2}
            className="hero-path"
            d="M-0 263.74 L 160.26 259.749 C 167.504 259.749 273.496 167.77 280.74 167.77 L 1110.605 165.573 C 1116.545 165.573 1231.88 263.74 1237.82 263.74 L 1504.681 263.74"
            stroke="#3b82f6"
            // stroke="url(#hero-lines_svg__hero-gradient-2)"
            strokeWidth="15.691"
            style={{ strokeDashoffset: -450, strokeDasharray: "190px, 1400x" }}
          ></path>
          <path
            ref={pathRef1}
            className="hero-path"
            d="M-0 32.933 L 153.664 32.933 C 160.908 32.933 274.882 136.085 282.126 136.085 L 1114.386 135.12 C 1120.326 135.12 1238.854 32.933 1244.794 32.933 L 1506.067 32.933"
            stroke="#3b82f6"
            // stroke="url(#hero-lines_svg__hero-gradient-3)"
            strokeWidth="15"
            style={{ strokeDashoffset: -900, strokeDasharray: "190px, 1400x" }}
          ></path>

          <rect
            x="327"
            y="6"
            width="780"
            height="226"
            rx="35"
            fill="url(#hero-lines_svg__rect-gradient)"
          />
        </g>
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            className="hero-path-grad"
            id="hero-lines_svg__hero-gradient-1"
            x1="4%"
            y1="20"
            x2="18%"
            y2="20"
          >
            <stop stopColor="#001AFF" />
            <stop offset="1" stopColor="#001AFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            className="hero-path-grad"
            id="hero-lines_svg__hero-gradient-2"
            x1="4%"
            y1="33"
            x2="0%"
            y2="33"
          >
            <stop stopColor="#001AFF" />
            <stop offset="1" stopColor="#001AFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            className="hero-path-grad"
            id="hero-lines_svg__hero-gradient-3"
            x1="4%"
            y1="292"
            x2="0"
            y2="292"
          >
            <stop stopColor="#001AFF" />
            <stop offset="1" stopColor="#001AFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="hero-lines_svg__rect-gradient"
            x1="327"
            y1="119"
            x2="1065.3"
            y2="125.997"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.150699" stopColor="white" />
            <stop offset="0.883" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="hero-lines_svg__clip0_627_52794">
            <rect width="1440" height="311" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SVGComponent;
