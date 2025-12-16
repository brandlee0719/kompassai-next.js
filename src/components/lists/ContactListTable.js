import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { alpha } from "@mui/material/styles";
import { Button, Select, Option } from "@material-tailwind/react";
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

import { visuallyHidden } from "@mui/utils";
import { pink } from "@mui/material/colors";
import { kompassColors } from "theme/palette";

import useList from "@/hooks/useList";
import { downloadKompassProfilesCSV } from "@/utils/common";

import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import SelectDropdown from "@/components/common/SelectDropdown";

import MenuIcon from "@/assets/image/team/menu.svg";
import MoveGroupIcon from "@/assets/image/team/move-group.svg";
import RemoveTeamIcon from "@/assets/image/team/remove-team.svg";
import BookmarkIcon from "@/assets/image/search/bookmark.svg";
import BookmarkFillIcon from "@/assets/image/search/bookmark_fill.svg";
import { ReactComponent as LockIcon } from "@/assets/image/search/lock.svg";
import DownloadIcon from "@/assets/image/lists/download.svg";
import DeleteIcon from "@/assets/image/lists/delete.svg";
import { ReactComponent as BookmarkSVG } from "@/assets/image/search/bookmark.svg";

import TwitterIcon from "@/assets/image/search/twitter.svg";
import FacebookIcon from "@/assets/image/search/facebook.svg";
import LinkedinIcon from "@/assets/image/search/linkedin.svg";
import DownIcon from "@/assets/image/search/down.svg";
import ImproveIcon from "@/assets/image/lists/improve.svg";

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

function getFormattedDateFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const suffix = getDaySuffix(day);

  // Function to get the day suffix (st, nd, rd, or th)
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const formattedDateWithSuffix = `${date.toLocaleString("en-US", {
    month: "long",
  })} ${day}${suffix}, ${date.getFullYear()}`;
  return formattedDateWithSuffix;
}
// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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
    id: "listTitle",
    numeric: false,
    disablePadding: true,
    label: "List name",
  },
  {
    id: "contacts",
    numeric: false,
    disablePadding: true,
    label: "Contacts",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: true,
    label: "Created date",
  },
  {
    id: "updatedAt",
    numeric: false,
    disablePadding: true,
    label: "Last updated",
  },
  {
    id: "",
    numeric: false,
    disablePadding: false,
    label: "",
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
          padding: "5px 8px",
          fontFamily: "Outfit",
          fontSize: 14,
          fontWeight: 700,
        },
        "& .MuiTableRow-head": {
          bgcolor: "#F3F3F3",
        },
      }}
    >
      <TableRow
        sx={{
          "& .MuiTableCell-root": {
            border: "none",
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
  const {
    numSelected,
    onSelectAllClick,
    onDeleteSelected,
    onDownloadSelected,
    rowCount,
  } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 0 },
        pr: { xs: 0, sm: 0 },
        borderRadius: "15px",
        bgcolor: "white",
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1", fontFamily: "Outfit" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{
            "aria-label": "select all desserts",
          }}
          // sx={{
          //   "&.Mui-checked": {
          //     color: pink[600],
          //   },
          //   "&.MuiCheckbox-indeterminate": {
          //     color: pink[600],
          //     fill: pink[600],
          //   },
          // }}
        />
        {numSelected > 0 ? `${numSelected} selected` : null}
      </Typography>

      <Tooltip title="Delete from list">
        <div
          onClick={onDeleteSelected}
          className="text-center text-blue-500 disabled:text-stone-350 text-base font-Outfit px-2 cursor-pointer select-none mr-2"
        >
          Delete from list
        </div>
      </Tooltip>

      <Tooltip title="Download List">
        <Button
          onClick={onDownloadSelected}
          className="flex items-center justify-center border-none bg-stone-950 disabled:bg-stone-350 text-white text-sm font-OutfitBold rounded-md px-4 py-2 gap-2"
        >
          <div>Download List</div>
          <ReactSVG src={DownloadIcon} />
        </Button>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function ContactListRow(props) {
  const {
    row,
    isItemSelected,
    labelId,
    handleClick,
    handleItemClick,
    handleDeleteItem,
    handleDownloadItem,
  } = props;

  const [isFavourite, setFavourite] = React.useState(false);
  const [isDetailVisible, setDetailVisible] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const menuOptions = [
    {
      icon: null,
      label: "Download",
    },
    {
      icon: null,
      label: "Delete",
    },
  ];

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const openMenu = () => {
    return menuAnchorEl != null;
  };

  return (
    <>
      <TableRow
        hover
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
          },
          "& .MuiTableCell-root:first-child": {
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          },
          "& .MuiTableCell-root:last-child": {
            borderBottomRightRadius: "15px",
            borderTopRightRadius: "15px",
          },
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
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
                fill: kompassColors.blue,
              },
            }}
            onClick={(event) => handleClick(event, row._id)}
          />
        </TableCell>
        <TableCell
          onClick={() => handleItemClick(row)}
          component="th"
          id={labelId}
          scope="row"
          padding="none"
        >
          <div className="w-full flex flex-col text-md">
            <p>{row.listTitle}</p>
          </div>
        </TableCell>
        <TableCell
          onClick={() => handleItemClick(row)}
          padding="none"
          align="left"
        >
          <p className="text-md">{row.contacts}</p>
        </TableCell>
        <TableCell
          onClick={() => handleItemClick(row)}
          padding="none"
          align="left"
        >
          <p className="text-md">
            {getFormattedDateFromTimestamp(row.createdAt)}
          </p>
        </TableCell>
        <TableCell
          onClick={() => handleItemClick(row)}
          padding="none"
          align="left"
        >
          <p className="text-md">
            {getFormattedDateFromTimestamp(row.updatedAt)}
          </p>
        </TableCell>
        <TableCell padding="none" align="right">
          <IconButton
            onClick={(event) => {
              setMenuAnchorEl(event.currentTarget);
            }}
          >
            <ReactSVG src={MenuIcon} />
          </IconButton>
        </TableCell>
      </TableRow>

      <Menu
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={menuAnchorEl}
        open={openMenu()}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            // width: "20ch",
          },
        }}
      >
        <MenuItem
          key={menuOptions[0]}
          onClick={() => {
            handleMenuClose();
            handleDownloadItem(row);
          }}
        >
          <Typography variant="inherit">{menuOptions[0].label}</Typography>
        </MenuItem>
        <MenuItem
          key={menuOptions[1]}
          onClick={() => {
            handleMenuClose();
            handleDeleteItem(row._id);
          }}
        >
          <Typography variant="inherit">{menuOptions[1].label}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function ContactListTable(props) {
  const { setLoading, tableData, onContactSelected, reload } = props;

  const { deleteContactList, getProfilesByContactId } = useList();

  const [visibleDeleteDialog, handleVisibleDeleteDialog] = useState(false);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const handleDeleteItem = async (itemId) => {
    setLoading(true);
    const response = await deleteContactList({ ids: [itemId] });
    setLoading(false);
    if (response?.status) {
      toast.success(response?.message, { theme: "colored" });
      setSelected([]);
      reload();
    } else {
      toast.error(response?.message, { theme: "colored" });
    }
  };

  const handleDownloadSelected = async () => {
    tableData.forEach((item) => {
      const index = selected.indexOf(item?._id);
      if (index >= 0) {
        handleDownloadItem(item);
      }
    });
  };

  const handleDownloadItem = async (listItem) => {
    setLoading(true);

    const response = await getProfilesByContactId({ contactId: listItem?._id });
    if (response.status) {
      downloadKompassProfilesCSV(listItem?.listTitle, [...response.data]);
    } else {
      toast.error(response.message, { theme: "colored" });
    }

    setLoading(false);
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
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableData, getComparator(order, orderBy)).slice(
      (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, tableData]
  );

  return (
    <>
      <Box sx={{ width: "100%", mt: "10px", px: "25px" }}>
        {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
        <EnhancedTableToolbar
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={tableData.length}
          onDeleteSelected={handleDeleteSelected}
          onDownloadSelected={handleDownloadSelected}
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
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={() => {}}
              onRequestSort={handleRequestSort}
              rowCount={tableData.length}
            />
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
                  <ContactListRow
                    isItemSelected={isItemSelected}
                    row={row}
                    labelId={labelId}
                    handleClick={handleClick}
                    handleItemClick={onContactSelected}
                    handleDeleteItem={handleDeleteItem}
                    handleDownloadItem={handleDownloadItem}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  /> */}
        <div className="w-full flex justify-end">
          <Pagination
            className="font-Outfit"
            count={Math.ceil(tableData.length / rowsPerPage)}
            page={page}
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
        {/* </Paper> */}
      </Box>
      <ConfirmDeleteDialog
        open={visibleDeleteDialog}
        handleClose={() => {
          handleVisibleDeleteDialog(false);
        }}
        handleYes={() => {
          handleDeleteSelected(true);
          handleVisibleDeleteDialog(false);
        }}
      />
    </>
  );
}
