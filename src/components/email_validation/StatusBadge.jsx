import { React, createElement } from "react";
import cn from "classnames";
import { Tooltip, IconButton } from "@mui/material";
import { ReactComponent as SuccessIcon } from "@/assets/image/bulk/success.svg";
import { ReactComponent as ErrorIcon } from "@/assets/image/email-validation/error.svg";
import { ReactComponent as WarningIcon } from "@/assets/image/email-validation/warning.svg";
import Help from "@mui/icons-material/Help";
const emailStatuses = {
  valid: {
    value: "Valid",
    theme: "valid",
    icon: <SuccessIcon className="h-[14px] w-[14px]"></SuccessIcon>,
  },
  invalid: {
    value: "Do not mail",
    theme: "invalid",
    icon: <ErrorIcon className="h-[14px] w-[14px]" fill="#B86C49"></ErrorIcon>,
  },
  do_not_mail: {
    value: "Do not mail",
    theme: "invalid",
    icon: <ErrorIcon className="h-[14px] w-[14px]" fill="#B86C49"></ErrorIcon>,
  },
  "catch-all": {
    value: "Catch-all",
    theme: "info",
    icon: (
      <WarningIcon className="h-[14px] w-[14px]" fill="#4873FA"></WarningIcon>
    ),
    tooltip:
      "Impossible to validate without sending actual email, could possibly be valid",
  },
  unknown: {
    value: "Unknown",
    theme: "warning",
    icon: (
      <WarningIcon className="h-[14px] w-[14px]" fill="#B86C49"></WarningIcon>
    ),
    tooltip: "Couldn't validate for some reason, most likely invalid email",
  },
  abuse: {
    value: "Abuse",
    theme: "invalid",
    icon: <ErrorIcon className="h-[14px] w-[14px]" fill="#B86C49"></ErrorIcon>,
    tooltip:
      "These emails are of people who are known to click the abuse links in emails, hence abusers or complainers. We recommend not emailing these addresses",
  },
  spamtrap: {
    value: "Spam trap",
    theme: "invalid",
    icon: <ErrorIcon className="h-[14px] w-[14px]" fill="#B86C49"></ErrorIcon>,
    tooltip:
      "These email is used for catching spammers and blocking them, emailing this address could lead to blocking",
  },
};

const badgeTheme = (theme) => {
  const className = cn(
    "relative w-fit items-center gap-1 relative flex rounded-[30px] text-sm py-[3.5px] px-[10px]",
    theme === "invalid" && "bg-[#FFE0D1] text-[#B86C49]",
    theme === "valid" && "bg-[#C9F3D4] text-[#2A763D]",
    theme === "warning" && "bg-[#FDF8D1] text-[#A19642]",
    theme === "info" && "bg-[#DCEAFE] text-[#4873FA]",
  );
  return className;
};

function StatusBadge({ email }) {
  const status = email["ZB Status"] || email["status"];
  const statusMeta = emailStatuses[status];
  return (
    <div className="font-OutfitMedium flex w-full min-w-fit max-w-[106px] items-start text-[12px]">
      <div className={badgeTheme(statusMeta.theme)}>
        {statusMeta?.value}
        {statusMeta.icon}
        {statusMeta.tooltip && (
          <Tooltip title={statusMeta.tooltip}>
            <Help
              fontSize="12px"
              sx={{ color: "#090C05" }}
              className=" !absolute right-[-2px] top-[-5px]"
            ></Help>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default StatusBadge;
