import React from "react";
const styles1 = {
  filter: "url('#blur-1hl6snoke38bed235cdeec-0')",
  width: "calc(100vw / 10)",
};
const styles2 = {
  filter: "url('#blur-1hl6snoke38bed235cdeec-1')",
  width: "calc(100vw / 10)",
};
const Company = ({ data }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      style={{ width: "10vw", height: "75px" }}
    >
      <filter id="blur-1hl6snoke38bed235cdeec-0">
        <feGaussianBlur stdDeviation="0 8">
          <animate
            attributeName="stdDeviation"
            values="0 8;0 0;0 0;0 8;0 8"
            keyTimes="0; 0.1; 0.5; 0.55; 1"
            dur="10s"
            repeatCount="indefinite"
            keySplines=".33, 1, .68, 1; .33, 1, .68, 1; .33, 1, .68, 1; .33, 1, .68, 1;"
            begin="0s"
          ></animate>
        </feGaussianBlur>
      </filter>
      <filter id="blur-1hl6snoke38bed235cdeec-1">
        <feGaussianBlur stdDeviation="0 8">
          <animate
            attributeName="stdDeviation"
            values="0 8;0 0;0 0;0 8;0 8"
            keyTimes="0; 0.1; 0.5; 0.55; 1"
            dur="10s"
            repeatCount="indefinite"
            keySplines=".33, 1, .68, 1; .33, 1, .68, 1; .33, 1, .68, 1; .33, 1, .68, 1;"
            begin="5s"
          ></animate>
        </feGaussianBlur>
      </filter>
      <image
        x="0"
        y="20"
        width="160"
        height="48"
        preserveAspectRatio="xMidYMid meet"
        opacity="0"
        href={require(`@/assets/image/companies/${data.logo1}.png`)}
        style={styles1} // Proper format for the style prop
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          keyTimes="0; 0.1; 0.5; 0.55; 1"
          dur="10s"
          repeatCount="indefinite"
          begin="0s"
        ></animate>
      </image>
      <image
        x="0"
        y="20"
        width="160"
        height="48"
        preserveAspectRatio="xMidYMid meet"
        opacity="0"
        href={require(`@/assets/image/companies/${data.logo2}.png`)}
        style={styles2}
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          keyTimes="0; 0.1; 0.5; 0.55; 1"
          dur="10s"
          repeatCount="indefinite"
          begin="5s"
        ></animate>
      </image>
    </svg>
  );
};

export default Company;
