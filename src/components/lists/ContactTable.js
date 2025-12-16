import * as React from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

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

import SelectDropdown from "@/components/common/SelectDropdown";
import MenuIcon from "@/assets/image/team/menu.svg";
import MoveGroupIcon from "@/assets/image/team/move-group.svg";
import RemoveTeamIcon from "@/assets/image/team/remove-team.svg";
import BookmarkIcon from "@/assets/image/search/bookmark.svg";
import BookmarkFillIcon from "@/assets/image/search/bookmark_fill.svg";
import { ReactComponent as LockIcon } from "@/assets/image/search/lock.svg";
import DownloadIcon from "@/assets/image/lists/download.svg";
import { ReactComponent as BookmarkSVG } from "@/assets/image/search/bookmark.svg";

import TwitterIcon from "@/assets/image/search/twitter.svg";
import FacebookIcon from "@/assets/image/search/facebook.svg";
import LinkedinIcon from "@/assets/image/search/linkedin.svg";
import DownIcon from "@/assets/image/search/down.svg";
import ImproveIcon from "@/assets/image/lists/improve.svg";

function createData(id, name, role, companyname, location, industry) {
  return {
    id,
    name,
    role,
    companyname,
    location,
    industry,
  };
}

const rows = [
  createData(
    1,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    2,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    3,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    4,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    5,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    6,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    7,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    8,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    9,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    10,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    11,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
  createData(
    12,
    "Anna Aloshyna",
    "Senior Talent Acquistion Manager",
    "PineDev Studio",
    "Canada, Tronto",
    "Software development"
  ),
];

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
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "companyname",
    numeric: false,
    disablePadding: true,
    label: "Company name",
  },
  {
    id: "location",
    numeric: false,
    disablePadding: true,
    label: "Location",
  },
  {
    id: "industry",
    numeric: false,
    disablePadding: true,
    label: "Industry",
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
  const { numSelected, onSelectAllClick, rowCount } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
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
          sx={{
            "&.Mui-checked": {
              color: pink[600],
            },
            "&.MuiCheckbox-indeterminate": {
              color: pink[600],
              fill: pink[600],
            },
          }}
        />
        {numSelected > 0 ? `${numSelected} selected` : null}
      </Typography>

      <Tooltip title="Delete from list">
        <div className="text-center text-magenta-500 disabled:bg-gray-50 text-sm font-Outfit px-2 cursor-pointer select-none mr-2">
          Delete from list
        </div>
      </Tooltip>

      <Tooltip title="Download List">
        <Button className="flex items-center justify-center border-none bg-magenta-500 disabled:bg-gray-500 text-white text-xs font-Outfit rounded-full px-4 py-2">
          Download List
          <ReactSVG src={DownloadIcon} />
        </Button>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function LiveSearchTableRow(props) {
  const { row, isItemSelected, labelId, handleClick } = props;

  const [isFavourite, setFavourite] = React.useState(false);
  const [isDetailVisible, setDetailVisible] = React.useState(false);

  return (
    <>
      <TableRow
        hover
        // onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
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
                color: pink[600],
              },
              "&.MuiCheckbox-indeterminate": {
                color: pink[600],
                fill: pink[600],
              },
            }}
            onClick={(event) => handleClick(event, row.id)}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          <div className="w-full flex flex-col text-sm">
            <p>{row.name}</p>
            <p className="text-[#929292]">{row.role}</p>
          </div>
        </TableCell>
        <TableCell padding="none" align="left">
          <p className="text-sm">{row.companyname}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <p className="text-sm">{row.location}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <p className="text-sm">{row.industry}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <div className="w-full flex flex-row justify-end items-center gap-1">
            <IconButton
              onClick={() => {
                setFavourite(!isFavourite);
              }}
            >
              {!isFavourite ? (
                <ReactSVG src={BookmarkIcon} />
              ) : (
                <ReactSVG src={BookmarkFillIcon} />
              )}
            </IconButton>
            <Button className="flex items-center justify-center text-black border-[1px] border-[#929292] text-sm font-Outfit rounded-full py-1 px-3">
              <LockIcon className="w-4 h-4" />
            </Button>
            <IconButton
              onClick={() => {
                setDetailVisible(!isDetailVisible);
              }}
            >
              {isDetailVisible ? (
                <ReactSVG src={DownIcon} style={{ rotate: "180deg" }} />
              ) : (
                <ReactSVG src={DownIcon} />
              )}
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
      {isDetailVisible ? (
        <TableRow>
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            colSpan={10}
          >
            <div className="w-full flex flex-col bg-white rounded-xl p-5 gap-4">
              <div className="w-full flex flex-row justify-between">
                <div className="w-full flex flex-col text-sm">
                  <p>{row.name}</p>
                  <p className="text-[#929292]">{row.role}</p>
                </div>
                <div className="w-full flex flex-row justify-end items-center gap-1">
                  <IconButton>
                    <ReactSVG src={TwitterIcon} />
                  </IconButton>
                  <IconButton>
                    <ReactSVG src={FacebookIcon} />
                  </IconButton>
                  <IconButton>
                    <ReactSVG src={LinkedinIcon} />
                  </IconButton>
                  <Button className="flex flex-row items-center border-[1px] border-[#E7436A]   font-Outfit text-magenta-500 font-bold text-xs rounded-full px-3 py-2 ml-4">
                    Improve Results
                    <ReactSVG src={ImproveIcon} />
                  </Button>
                </div>
              </div>
              <hr size="8" width="100%" color="white" />
              <div className="w-full grid grid-cols-6 gap-1">
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Location</div>
                  <div className="text-black text-sm">Canada, Tronto</div>
                  <div className="text-[#929292] text-sm mt-2">Company</div>
                  <div className="text-magenta-500 text-sm">PineDev Studio</div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Department</div>
                  <div className="text-black text-sm">Management</div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Email</div>
                  <div className="text-black text-sm">+48 055 *** ** 56</div>
                  <div className="text-black text-sm">+48 012 *** ** 23</div>
                  <div className="text-black text-sm">+48 077 *** ** 97</div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Phone</div>
                  <div className="text-black text-sm">a*********@gmail.com</div>
                  <div className="text-black text-sm">p*****@kw.com</div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

export default function ContactTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const menuOptions = [
    {
      icon: MoveGroupIcon,
      label: "Move to the group",
    },
    {
      icon: RemoveTeamIcon,
      label: "Remove team member",
    },
  ];

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const openMenu = () => {
    return menuAnchorEl != null;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    } else {
      setSelected([]);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", mt: "10px" }}>
      {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
      <EnhancedTableToolbar
        numSelected={selected.length}
        onSelectAllClick={handleSelectAllClick}
        rowCount={rows.length}
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
            rowCount={rows.length}
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
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <LiveSearchTableRow
                  isItemSelected={isItemSelected}
                  row={row}
                  labelId={labelId}
                  handleClick={handleClick}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

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
        {menuOptions.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleMenuClose}
          >
            <ListItemIcon>
              <ReactSVG src={option.icon} />
            </ListItemIcon>
            <Typography variant="inherit">{option.label}</Typography>
          </MenuItem>
        ))}
      </Menu>

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
          count={Math.floor(rows.length / rowsPerPage)}
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
  );
}
