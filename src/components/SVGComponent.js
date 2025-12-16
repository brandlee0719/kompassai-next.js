import React, { useEffect, useRef, useState } from "react";

const SVGComponent = () => {
  const [strokeDashOffset, setStrokeDashOffset] = useState(0);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const pathRef4 = useRef(null);

  // const gradient1 = document.getElementById("footerLines_svg__footer-path-1");
  function updateGradient1X(x1Value, x2Value) {
    const gradient = document.getElementById("footerLines_svg__footer-path-1");
    gradient.setAttribute("x1", `${x1Value}%`);
    gradient.setAttribute("x2", `${x2Value}%`);
  }
  function updateGradient2X(x1Value, x2Value) {
    const gradient = document.getElementById("footerLines_svg__footer-path-2");
    gradient.setAttribute("x1", `${x1Value}%`);
    gradient.setAttribute("x2", `${x2Value}%`);
  }
  let currentGradient2X1 = 7;
  let currentGradient2X2 = 0;
  let currentGradient1X1 = 7;
  let currentGradient1X2 = 0;
  let increment = 1 / 14;
  // Function to update strokeDashoffset
  const updateStrokeDashoffset = () => {
    if (pathRef1.current) {
      // Calculate the new offset value here (e.g. using a state)
      let numberValue = parseFloat(pathRef1.current.style.strokeDashoffset);
      let newOffset = numberValue - 1; // replace with your logic to calculate new offset
      if (newOffset <= -1400) {
        newOffset = 0;
        currentGradient1X1 = 7;
        currentGradient1X2 = 0;
      }
      pathRef1.current.style.strokeDashoffset = `${newOffset}px`;
      pathRef1.current.style.strokeDasharray = `190px 1400px`;

      currentGradient1X1 += increment;
      currentGradient1X2 += increment;
      updateGradient1X(currentGradient1X1, currentGradient1X2);
      //   console.log(newOffset);
      // if (pathRef3.current) {
      // }
    }
    if (pathRef2.current) {
      // Calculate the new offset value here (e.g. using a state)
      let numberValue = parseFloat(pathRef2.current.style.strokeDashoffset);
      let newOffset = numberValue - 1; // replace with your logic to calculate new offset
      if (newOffset <= -1400) {
        newOffset = 0;
        currentGradient2X1 = 7;
        currentGradient2X2 = 0;
      }
      pathRef2.current.style.strokeDashoffset = `${newOffset}px`;
      pathRef2.current.style.strokeDasharray = `190px 1400px`;

      currentGradient2X1 += increment;
      currentGradient2X2 += increment;
      updateGradient2X(currentGradient2X1, currentGradient2X2);
      //   console.log(newOffset);
    }
  };

  useEffect(() => {
    // Set up interval to update strokeDashoffset every second
    const interval = setInterval(() => {
      updateStrokeDashoffset();
    }, 5); // Update every second

    return () => {
      // Clean up the interval on component unmount
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <svg
      viewBox="0 0 1362 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Footer__Lines-sc-12do67w-10 hGSCMg"
    >
      <g clipPath="url(#footerLines_svg__clip0_266_1024)">
        <path
          d="M-33.5 75.2134L415.617 75.2134C421.06 75.2134 426.4 76.6943 431.066 79.4974L545.804 148.43C550.47 151.233 555.811 152.714 561.254 152.714L840.05 152.713C845.494 152.713 850.836 154.195 855.502 156.999L919.562 195.493C924.228 198.297 929.57 199.778 935.014 199.778H1389.88"
          stroke="#121821"
          strokeWidth="15"
        ></path>
        <path
          d="M-31.959 25.2134H443.336C448.779 25.2134 454.12 26.6943 458.786 29.4974L573.524 98.4296C578.19 101.233 583.53 102.714 588.974 102.714L862.848 102.713C868.243 102.713 873.538 104.168 878.175 106.924L943.197 145.567C947.835 148.323 953.13 149.778 958.524 149.778H1210.11C1216.93 149.778 1223.55 147.452 1228.88 143.183L1367.77 31.8085C1373.1 27.5397 1379.72 25.2134 1386.54 25.2134H1395.99"
          stroke="#121821"
          strokeWidth="15"
        ></path>
        <path
          ref={pathRef1}
          className="footer-path"
          d="M-33.5 75.2134L415.617 75.2134C421.06 75.2134 426.4 76.6943 431.066 79.4974L545.804 148.43C550.47 151.233 555.811 152.714 561.254 152.714L840.05 152.713C845.494 152.713 850.836 154.195 855.502 156.999L919.562 195.493C924.228 198.297 929.57 199.778 935.014 199.778H1389.88"
          stroke="url(#footerLines_svg__footer-path-1)"
          strokeWidth="15"
          style={{ strokeDashoffset: 0, strokeDasharray: "190px, 1400x" }}
        ></path>
        <path
          ref={pathRef2}
          id="myPath"
          className="footer-path"
          d="M-31.959 25.2134H443.336C448.779 25.2134 454.12 26.6943 458.786 29.4974L573.524 98.4296C578.19 101.233 583.53 102.714 588.974 102.714L862.848 102.713C868.243 102.713 873.538 104.168 878.175 106.924L943.197 145.567C947.835 148.323 953.13 149.778 958.524 149.778H1210.11C1216.93 149.778 1223.55 147.452 1228.88 143.183L1367.77 31.8085C1373.1 27.5397 1379.72 25.2134 1386.54 25.2134H1395.99"
          stroke="url(#footerLines_svg__footer-path-2)"
          strokeWidth="15"
          style={{ strokeDashoffset: -400, strokeDasharray: "190px, 1400x" }}
        ></path>
      </g>
      <defs>
        <linearGradient
          ref={pathRef3}
          className="footer-path-grad"
          id="footerLines_svg__footer-path-1"
          x1="7%"
          y1="46.7134"
          x2="0%"
          y2="46.7134"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001AFF"></stop>
          <stop offset="1" stopColor="#001AFF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          ref={pathRef4}
          className="footer-path-grad"
          id="footerLines_svg__footer-path-2"
          x1="7%"
          y1="46.7134"
          x2="0%"
          y2="46.7134"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001AFF"></stop>
          <stop offset="1" stopColor="#001AFF" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="footerLines_svg__clip0_266_1024">
          <rect width="1362" height="214" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;
