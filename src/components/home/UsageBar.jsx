import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material";

const getColor = (value) => {
  switch (true) {
    case value <= 30: {
      return "#5E84FB";
    }
    case value > 30 && value <= 65: {
      return "#4DD68F";
    }
    case value > 65 && value <= 90: {
      return "#FFD91C";
    }
    default: {
      return "#ef4444";
    }
  }
};

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "8px",
  borderRadius: "4px",
  backgroundColor: "#e8e7e7",
  width: "100%",
  ["& .MuiLinearProgress-bar"]: {
    borderRadius: "6px",
  },
}));

function UsageBar({ value, type }) {
  return (
    <div className="flex h-9 flex-col items-start justify-start gap-2 self-stretch">
      <div className="inline-flex items-center justify-between self-stretch">
        <div className="font-Outfit leading-snug text-base font-medium text-black">
          {`${type} credits used`}
        </div>
        <div className="font-Outfit leading-tight text-right text-base font-medium text-black">
          {`${value.used} / ${value.total}`}
        </div>
      </div>
      <StyledLinearProgress
        variant="determinate"
        sx={() => ({
          "& .MuiLinearProgress-bar": {
            backgroundColor: getColor(value.percent),
          },
        })}
        value={value.percent}
      />
    </div>
  );
}

export default UsageBar;
