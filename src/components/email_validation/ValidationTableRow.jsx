import { ReactSVG } from "react-svg";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { kompassColors } from "@/theme/palette";
import SuccessIcon from "@/assets/image/bulk/success.svg";
import WaitingIcon from "@/assets/image/email-validation/waiting.svg";
import { Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import { ReactComponent as ResultIcon } from "@/assets/image/bulk/result.svg";
import ArrowDownIcon from "@/assets/image/email-validation/down-arrow.svg";
import ValidationResultDetailed from "./ValidationResultDetailed";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
function ValidationTableRow(props) {
  const {
    index,
    row,
    isItemSelected,
    labelId,
    handleClick,
    handleSelect,
    tableWidth,
  } = props;
  const [rowData, setRowData] = useState(row);
  const [showDetailed, setShowDetailed] = useState(false);
  // useEffect(() => {
  //   checkOut();
  // }, []);

  // const checkOut = async () => {
  //   if (rowData?._id && !rowData?.completed && !rowData?.error) {
  //     const item = await bulkEnrichResultItem(rowData?._id);
  //     if (!(item?.data?.completed || item?.data?.error)) {
  //       setTimeout(checkOut, 500);
  //     } else {
  //       setRowData({
  //         ...item.data,
  //       });
  //     }
  //   }
  // };

  function formattedDate(timestamp) {
    const date = new Date(parseInt(timestamp));
    const formattedDate = `${date
      .getDate()
      .toString()
      .padStart(2, "0")} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
    return formattedDate;
  }

  return (
    <>
      <TableRow
        hover
        onClick={(event) => setShowDetailed(!showDetailed)}
        role="checkbox"
        className="h-[56px] min-h-[56px]"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={rowData.fileId}
        selected={isItemSelected}
        sx={{
          cursor: "pointer",
          background: "white",
          "& .MuiTableCell-root": {
            border: "none",
            borderBottom: "1px solid #E8E7E7",
            borderColor: kompassColors.light,
          },
        }}
      >
        <TableCell
          padding="checkbox"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSelect(e,rowData.fileId);
          }}
        >
          <Checkbox
            checked={isItemSelected}
            inputProps={{
              "aria-labelledby": labelId,
            }}
            sx={{
              "&.Mui-checked": {
                color: kompassColors.blue,
              },
              "&.MuiCheckbox-indeterminate": {
                color: kompassColors.blue,
              },
            }}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          <div className="flex flex-row items-center gap-2">
            <ResultIcon />
            <div className="flex flex-col">
              <span className="text-md font-OutfitLight font-semibold text-black">
                {rowData?.fileName}
              </span>
              <div className="flex flex-row gap-1">
                {rowData?.status === "failed" ? (
                  <span className="font-OutfitLight text-lg text-[#090C0590]">
                    <span className="text-[#b00000]">{`Failed • ${
                      rowData?.message || ""
                    }`}</span>
                  </span>
                ) : (
                  <>
                    <span className="font-OutfitLight text-lg text-[#090C0590]">
                      {rowData?.emails.length + ` E-mails`}
                    </span>
                    <span className="font-OutfitLight text-lg text-[#090C0590]">
                      {` • ` + (rowData?.status ? "Completed" : "Processing")}
                    </span>
                    <span className="font-OutfitLight text-lg text-[#090C0590]">
                      {rowData?.completed && rowData?.completedAt
                        ? ` • ` + formattedDate(rowData?.completedAt)
                        : null}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex w-fit flex-col">{rowData.emails.length}</div>
        </TableCell>
        <TableCell padding="none" align="center">
          {rowData?.status === "uploaded" ? (
            <IconButton onClick={(event) => {}} disabled>
              <ReactSVG src={SuccessIcon} />
            </IconButton>
          ) : (
            <IconButton
              onClick={(event) => {}}
              disabled
              className="!p-0"
              sx={{
                svg: {
                  width: "40px !important",
                  height: "40px !important",
                },
              }}
            >
              <ReactSVG src={WaitingIcon} />
            </IconButton>
          )}
        </TableCell>

        <TableCell>
          <div className="flex w-fit flex-col">
            {formattedDate(rowData.created_at)}
          </div>
        </TableCell>
        <TableCell align="right">
          <IconButton onClick={(event) => {}} disabled className="mr-2">
            <ReactSVG src={ArrowDownIcon} />
          </IconButton>
        </TableCell>
      </TableRow>
      <ValidationResultDetailed
        emails={rowData.emails}
        tableWidth={tableWidth}
        open={showDetailed}
      ></ValidationResultDetailed>
    </>
  );
}
export default ValidationTableRow;
