import React from "react";

function Tab({ children }) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-2 rounded-2xl bg-white p-5">
      {children}
    </div>
  );
}

export default Tab;
