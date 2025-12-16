import React, { useMemo } from "react";

import cn from "classnames";
import { Collapse, TableRow, TableCell, Box } from "@mui/material";
import StatusBadge from "./StatusBadge";
import { useState } from "react";

function ValidationResultDetailed({ emails, open, tableWidth }) {
  const emailField = useMemo(() => {
    if (emails.length) {
      const field = Object.keys(emails[0]).filter((key) => {
        return key.toLowerCase().includes("email");
      })[0];
      return field;
    }
    return "";
  }, [emails]);
  return (
    <TableRow>
      <TableCell
        style={{ paddingBottom: 0, paddingTop: 0, border: "unset" }}
        colSpan={tableWidth}
      >
        <Collapse in={open}>
          <Box sx={{ margin: "8px", padding: "30px 26px" }}>
            <div className="font-OutfitMedium text-lg text-black">Emails</div>
            <div
              className={cn(
                "mt-4 grid w-full grid-flow-col grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-4 gap-x-2 gap-y-4 max-[1280px]:grid-flow-row",
                emails.length > 16 && "!grid-flow-row",
              )}
            >
              {emails.map((email, index) => {
                return (
                  <>
                    {index < 100 ? (
                      <>
                        <div
                          className="flex items-center justify-between"
                          key={email?.[emailField]}
                        >
                          <div className=" w-fit max-w-[17ch] overflow-hidden text-ellipsis whitespace-nowrap">
                            {email?.[emailField]}
                          </div>
                          <StatusBadge email={email}></StatusBadge>
                        </div>
                      </>
                    ) : (
                      <div>
                        And {emails.length - 100} more, download results for
                        more details
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

export default ValidationResultDetailed;
