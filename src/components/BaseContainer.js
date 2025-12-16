import React from "react";

const BaseContainer = ({ children, width = 1920 }) => {
  if (width == 1920)
    return (
      <div className={`w-full flex justify-center`}>
        <div className={`w-full max-w-[1920px] flex flex-col`}>{children}</div>
      </div>
    );
  if (width == 1680)
    return (
      <div className={`w-full flex justify-center`}>
        <div className={`w-full max-w-[1680px] flex flex-col`}>{children}</div>
      </div>
    );
  if (width == 540)
    return (
      <div className={`w-full flex justify-center`}>
        <div className={`w-full max-w-[540px] flex flex-col`}>{children}</div>
      </div>
    );
  return (
    <div className={`w-full flex justify-center`}>
      <div className={`w-full flex flex-col`}>{children}</div>
    </div>
  );
};
export default BaseContainer;
