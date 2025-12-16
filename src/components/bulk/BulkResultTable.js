import * as React from "react";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { Button, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";

import { toast } from "react-toastify";

import { visuallyHidden } from "@mui/utils";
import { KompassColor } from "@/theme/color";
import { kompassColors } from "@/theme/palette";
import { getShortName, indexString } from "@/utils/common";

import MainLayoutSpinner from "@/components/MainLayoutSpinner";

import useKompassSearch from "@/hooks/useKompassSearch";
import useProxycurl from "@/hooks/useProxycurl";

import SelectDropdown from "@/components/common/SelectDropdown";

import { CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";

import LightSpinner from "../common/LightSpinner";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

import DeleteIcon from "@/assets/image/bulk/delete.svg";
import SuccessIcon from "@/assets/image/bulk/success.svg";

import { ReactComponent as DownloadIcon } from "@/assets/image/bulk/download.svg";
import { ReactComponent as AddListIcon } from "@/assets/image/bulk/icon-addlist.svg";
import { ReactComponent as ResultIcon } from "@/assets/image/bulk/result.svg";
import useBulk from "@/hooks/useBulk";
import { debug } from "util";

const csvDownload = async (fileName, content) => {
  const csvContent = [],
    headerItem = ["No"];

  // if (bSourcesIncluded)
  headerItem.push("Linkedin Url");
  // if (bContactIncluded)
  headerItem.push("Name", "Company", "Location");
  // if (bEmailIncluded)
  headerItem.push("Email");
  // if (bPhoneIncluded)
  headerItem.push("PhoneNumbers");

  csvContent.push(headerItem);

  content.forEach((item, index) => {
    const record = [];

    record.push(index + 1);
    // if (bSourcesIncluded)
    record.push(item?.linkedinUrl);
    // if (bContactIncluded)
    record.push(item?.name, item?.companyName, item?.location);
    // if (bEmailIncluded)
    record.push(item?.emails?.join(","));
    // if (bPhoneIncluded)
    record.push(item?.phoneNumbers?.join(","));

    csvContent.push(record);
  });

  const csv = Papa.unparse(csvContent);

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.csv`;
  link.click();
};

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: true,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        "& .MuiTableCell-sizeMedium": {
          padding: "5px 10px",
          fontFamily: "OutfitMedium",
          fontSize: 13,
          color: kompassColors.black,
        },
        "& .MuiTableRow-head": {
          bgcolor: "white",
        },
      }}
    >
      <TableRow
        sx={{
          "& .MuiTableCell-root": {
            borderColor: kompassColors.light,
          },
        }}
      >
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={"none"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, onSelectAllClick, onDownloadSelected, rowCount } = props;

  return (
    <div className="w-full mt-3 pb-3 border-b border-stone-250">
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { sm: 4 },
        }}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center font-Outfit">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
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
            </div>
            <div className="flex flex-row gap-2 justify-items-center text-sm font-Outfit">
              <div
                className={
                  "py-1 px-2 flex flex-row gap-1 cursor-pointer items-center border rounded-md bg-white" +
                  (numSelected > 0
                    ? " border-stone-950 text-stone-950"
                    : " border-stone-350 text-stone-350")
                }
                onClick={() => {
                  console.log("TODO: Save to list");
                }}
              >
                <AddListIcon
                  className={
                    "select-none w-5 h-5" +
                    (numSelected > 0
                      ? " fill-current text-stone-950"
                      : " fill-current text-stone-350")
                  }
                />
                <div className="select-none">Save to list</div>
              </div>

              <div
                className={
                  "py-1 px-2 flex flex-row gap-1 cursor-pointer items-center border rounded-md text-white" +
                  (numSelected > 0
                    ? " bg-stone-950 border-stone-950"
                    : " bg-stone-350 border-stone-350")
                }
                onClick={() => {
                  onDownloadSelected();
                }}
              >
                <div className="select-none cursor-pointer">
                  Download results
                </div>
                <DownloadIcon fill="#ffffff" />
              </div>
            </div>
          </div>
          <div className="font-OutfitMedium select-none text-sm">
            {numSelected > 0 ? `${numSelected}  selected` : null}
          </div>
        </div>
      </Toolbar>
    </div>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function BulkResultRow(props) {
  const {
    index,
    row,
    isItemSelected,
    labelId,
    handleClick,
    handleDelete,
    handleFavorite,
    searchCompanyContacts,
  } = props;

  const { bulkEnrichResultItem, bulkEnrichOutputs, bulkEnrichDeleteResult } =
    useBulk();
  const [rowData, setRowData] = useState(row);

  useEffect(() => {
    checkOut();
  }, []);

  const checkOut = async () => {
    if (rowData?._id && !rowData?.completed && !rowData?.error) {
      const item = await bulkEnrichResultItem(rowData?._id);
      if (!(item?.data?.completed || item?.data?.error)) {
        setTimeout(checkOut, 500);
      } else {
        setRowData({
          ...item.data,
        });
      }
    }
  };

  const onDownload = async () => {
    debugger;
    try {
      const response = await bulkEnrichOutputs(rowData?._id);
      csvDownload(rowData?.contactTitle, response?.data);
    } catch (error) {
      toast.error(error?.message ? error?.message : "Something went wrong", {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <TableRow
        hover
        // onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row._id}
        selected={isItemSelected}
        sx={{
          cursor: "pointer",
          background: "white",
          "& .MuiTableCell-root": {
            border: "none",
            borderTop: 1,
            borderColor: kompassColors.light,
            backgroundColor: "#E8E7E7",
            paddingY: 2,
          },
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            onChange={(event) => {
              handleClick(event, row?._id);
            }}
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
              <span className="text-md font-OutfitLight text-black font-semibold">
                {rowData?.contactTitle}
              </span>
              <div className="flex flex-row gap-1">
                {rowData?.error ? (
                  <span className="text-lg font-OutfitLight text-[#090C0590]">
                    <span className="text-[#b00000]">{`Faild • ${rowData?.message}`}</span>
                  </span>
                ) : (
                  <>
                    <span className="text-lg font-OutfitLight text-[#090C0590]">
                      {rowData?.numberOfContacts + ` Contacts`}
                    </span>
                    <span className="text-lg font-OutfitLight text-[#090C0590]">
                      {` • ` +
                        (rowData?.completed ? "Completed" : "Processing")}
                    </span>
                    <span className="text-lg font-OutfitLight text-[#090C0590]">
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
        <TableCell padding="none" align="right">
          {rowData?.completed ? (
            <>
              <IconButton
                onClick={(event) => {
                  onDownload();
                }}
              >
                <DownloadIcon />
              </IconButton>
              <IconButton
                onClick={(event) => {
                  handleDelete(row?._id);
                }}
              >
                <ReactSVG src={DeleteIcon} />
              </IconButton>
              <IconButton onClick={(event) => {}} disabled>
                <ReactSVG src={SuccessIcon} />
              </IconButton>
            </>
          ) : !rowData?.error ? (
            <>
              <IconButton
                onClick={(event) => {
                  onDownload();
                }}
              >
                <DownloadIcon />
              </IconButton>
              <IconButton
                onClick={(event) => {
                  handleDelete(row?._id);
                }}
              >
                <ReactSVG src={DeleteIcon} />
              </IconButton>
              <IconButton onClick={(event) => {}} disabled>
                <CircularProgress size="1.2rem" className="mr-2" />
              </IconButton>
            </>
          ) : null}
        </TableCell>
      </TableRow>
    </>
  );
}

var currentDeleteId = null;

export default function BulkResultTable(props) {
  const { bulkEnrichResults, bulkEnrichDeleteResult, bulkEnrichOutputs } =
    useBulk();

  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [visibleDeleteDialog, handleVisibleDeleteDialog] = useState(false);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    setLoading(true);

    const response = await bulkEnrichResults();
    if (response?.status) {
      setTableData(response?.data);
    } else {
      toast.error(response?.message, { theme: "colored" });
    }

    setLoading(false);
  };

  const deleteContactList = async () => {};

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n._id);
      setSelected(newSelected);
      return;
    } else {
      setSelected([]);
    }
  };

  const handleDeleteSelected = async (confirmed) => {
    if (!(confirmed === true)) {
      handleVisibleDeleteDialog(true);
    } else {
      setLoading(true);
      const response = await deleteContactList({ ids: selected });
      setLoading(false);
      if (response?.status) {
        toast.success(response?.message, { theme: "colored" });
        setSelected([]);
        reload();
      } else {
        toast.error(response?.message, { theme: "colored" });
      }
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const onDownloadSelected = async () => {
    for (const itemId of selected) {
      try {
        const item = tableData.find((item) => {
          return item._id == itemId;
        });
        if (item) {
          const content = await bulkEnrichOutputs(itemId);
          csvDownload(item?.contactTitle, content?.data);
        }
      } catch (error) {}
    }
  };

  const handleDelete = (id) => {
    currentDeleteId = id;
    handleVisibleDeleteDialog(true);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const visibleRows = React.useMemo(
    () => tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, tableData]
  );

  return (
    <>
      {loading ? <LightSpinner /> : null}
      <Box sx={{ width: "100%", mt: "10px", px: "25px" }}>
        {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
        <EnhancedTableToolbar
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          onDownloadSelected={onDownloadSelected}
          rowCount={tableData.length}
        />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: "separate",
              borderSpacing: "0 0.5em",
              border: "none",
            }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <TableBody
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "5px 8px",
                  fontFamily: "Outfit",
                  fontSize: 14,
                  // font-family: Outfit;
                },
              }}
            >
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <BulkResultRow
                    isItemSelected={isItemSelected}
                    row={row}
                    labelId={labelId}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    handleItemClick={() => {}}
                    setMenuAnchorEl={() => {}}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="w-full flex justify-end">
          <Pagination
            className="font-Outfit"
            count={Math.floor(tableData.length / rowsPerPage) + 1}
            page={page + 1}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            sx={{
              "& .MuiPaginationItem-text": {
                fontFamily: "Outfit",
                fontSize: "14px",
              },
            }}
          />
        </div>
      </Box>
      <ConfirmDeleteDialog
        open={visibleDeleteDialog}
        handleClose={() => {
          handleVisibleDeleteDialog(false);
          currentDeleteId = null;
        }}
        handleYes={async () => {
          handleDeleteSelected(true);
          handleVisibleDeleteDialog(false);

          setLoading(true);

          const response = await bulkEnrichDeleteResult(currentDeleteId);
          if (response?.status) {
            reload();
          } else {
            toast.error(response?.message, { theme: "colored" });
          }

          setLoading(false);
          currentDeleteId = null;
        }}
      />
    </>
  );
}

export { BulkResultTable };
