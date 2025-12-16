import React from "react";
import { Toolbar, Checkbox } from "@mui/material";
import { ReactComponent as DeleteIcon } from "@/assets/image/email-validation/trash-alternative.svg";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";
import { RefreshOutlined } from "@mui/icons-material/";

import PropTypes from "prop-types";
import { kompassColors } from "@/theme/palette";
function ValidationTableToolbar(props) {
  const {
    numSelected,
    onSelectAllClick,
    rowCount,
    handleDelete,
    handleDownload,
    handleRefresh,
    loading,
  } = props;
  return (
    <div className="mt-3 w-full  border-stone-250 pb-3">
      <Toolbar
        sx={{
          pl: { sm: "7px" },
          pr: { sm: 2 },
        }}
      >
        <div className="flex w-full flex-row items-center justify-between ">
          <div className="flex w-full flex-row items-center justify-between gap-2">
            <div className=" font-Outfit flex flex-row ">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                disabled={loading}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
                sx={{
                  color: kompassColors.textLight,
                  "&.Mui-checked": {
                    color: kompassColors.blue,
                  },
                  "&.MuiCheckbox-indeterminate": {
                    color: kompassColors.blue,
                  },
                }}
              />
              <div className="font-OutfitMedium flex select-none items-center text-lg">
                {numSelected > 0 ? `${numSelected}  selected` : null}
              </div>
            </div>
            <div className=" font-Outfit  flex flex-row justify-items-center gap-2  text-sm">
              <RefreshOutlined onClick={handleRefresh} className="hover:rotate-[20deg] cursor-pointer self-center !transition-all hover:fill-[#4873fa]"></RefreshOutlined>

              <div
                className={
                  "group flex flex-row items-center gap-2 rounded-[8px] border px-5 py-2 text-base  transition-all" +
                  (numSelected > 0 && !loading
                    ? " cursor-pointer border-red-300 text-red-500 hover:bg-red-500 hover:text-white"
                    : " cursor-default border-stone-350 bg-stone-350 text-white opacity-50")
                }
                disabled={loading}
                onClick={() => {
                  handleDelete();
                }}
              >
                <div className="select-none uppercase">Delete</div>

                <DeleteIcon
                  className={
                    "h-5 w-5 select-none" +
                    (numSelected > 0 && !loading
                      ? " stroke-red-500 group-hover:stroke-white"
                      : " white stroke-current")
                  }
                />
              </div>

              <div
                className={
                  "flex cursor-default flex-row items-center gap-2 rounded-[8px] border px-5 py-2 text-base text-white transition-all" +
                  (numSelected === 1 && !loading
                    ? " border-stone-950 bg-stone-950 hover:bg-white hover:text-stone-950"
                    : " border-stone-350 bg-stone-350 opacity-50")
                }
                disabled={loading}
                onClick={() => {
                  handleDownload();
                }}
              >
                <div className="select-none uppercase">Download results</div>
                <DownloadIcon
                  className={
                    numSelected === 1 && !loading
                      ? "  group-hover:fill-black"
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Toolbar>
    </div>
  );
}

ValidationTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
export default ValidationTableToolbar;
