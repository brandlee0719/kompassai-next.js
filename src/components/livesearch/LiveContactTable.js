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
import TwitterIcon from "@/assets/image/search/twitter.svg";
import FacebookIcon from "@/assets/image/search/facebook.svg";
import LinkedinIcon from "@/assets/image/search/linkedin.svg";
import DownIcon from "@/assets/image/search/down.svg";

import { ReactComponent as UserIcon } from "@/assets/image/search/user.svg";
import { ReactComponent as FlagIcon } from "@/assets/image/search/flag.svg";
import { ReactComponent as LocationIcon } from "@/assets/image/search/location.svg";
import { ReactComponent as USDIcon } from "@/assets/image/search/usd.svg";
import { ReactComponent as HomeIcon } from "@/assets/image/search/home.svg";
import { ReactComponent as JobTitleIcon } from "@/assets/image/search/jobtitle.svg";
import { ReactComponent as EmployeeIcon } from "@/assets/image/search/employee.svg";
import { ReactComponent as IndustryIcon } from "@/assets/image/search/industry.svg";
import { ReactComponent as LevelIcon } from "@/assets/image/search/level.svg";
import { ReactComponent as DepartmentIcon } from "@/assets/image/search/department.svg";

import { ReactComponent as AddListIcon } from "@/assets/image/search/icon-addlist.svg";
import { ReactComponent as DeleteIcon } from "@/assets/image/search/icon-delete.svg";
import { ReactComponent as BookmarkAddIcon } from "@/assets/image/search/icon-bookmark-add.svg";
import { ReactComponent as LibraryAddIcon } from "@/assets/image/search/icon-library-add.svg";
import { ReactComponent as LockIcon } from "@/assets/image/search/lock.svg";
import { ReactComponent as BookmarkSVG } from "@/assets/image/search/bookmark.svg";

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
                "&.Mui-checked": {
                  color: pink[600],
                },
                "&.MuiCheckbox-indeterminate": {
                  color: pink[600],
                  fill: pink[600],
                },
              }}
            />
            {numSelected > 0 ? `${numSelected}  selected` : null}
          </div>
          <div className="flex flex-row justify-items-center  border-[1px] border-[#9D9E9B] rounded-md">
            <div className="p-1 border-r border-r-[#9D9E9B] cursor-pointer">
              <AddListIcon />
            </div>
            <div className="flex flex-row items-center gap-1 p-1 border-r border-r-[#9D9E9B] cursor-pointer">
              <LockIcon className="w-5 h-5" fill="#9D9E9B" />
              <ReactSVG src={DownIcon} />
            </div>
            <div className="p-1 border-r border-r-[#9D9E9B] cursor-pointer">
              <DeleteIcon />
            </div>
            <div className="p-1 border-r border-r-[#9D9E9B] cursor-pointer">
              <BookmarkAddIcon />
            </div>
            <div className="p-1">
              <LibraryAddIcon />
            </div>
          </div>
        </div>

        <Tooltip title="Save selected">
          <Button
            disabled={numSelected == 0}
            className="w-[200px] flex items-center justify-center border-none bg-magenta-500 disabled:bg-gray-500 text-white text-xs font-Outfit rounded-full py-2"
          >
            Save Selected
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const LiveSearchTableRow = (props) => {
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
            <p>{row.firstName + ' ' + row.lastName}</p>
            <p className="text-[#929292]">{row.title}</p>
          </div>
        </TableCell>
        <TableCell padding="none" align="left">
          <p className="text-sm">{row.company}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <p className="text-sm">{row.companyCity + ',' + row.companyCountry}</p>
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
                  <Button className="border-none bg-magenta-500  font-Outfit text-white font-extralight text-xs rounded-full px-4 py-2 ml-4">
                    Access email
                  </Button>
                  <Button className="border-none bg-magenta-500  font-Outfit text-white font-extralight text-xs rounded-full px-4 py-2">
                    Access Phone
                  </Button>
                </div>
              </div>
              <hr size="8" width="100%" color="white" />
              <div className="w-full grid grid-cols-6 gap-1">
                <div className="col-span-2 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Location</div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <UserIcon /> <p className="font-bold">First name</p>
                    <p>+10,000</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <HomeIcon /> <p className="font-bold">Company</p>
                    <p>PineDev Studio</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <HomeIcon /> <p className="font-bold">Company website</p>
                    <p>PineDev Studio</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <JobTitleIcon /> <p className="font-bold">Title</p>
                    <p>N/A</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <DepartmentIcon /> <p className="font-bold">Department</p>
                    <p>Management</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <LevelIcon /> <p className="font-bold">Level</p>
                    <p>Middle</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <LocationIcon /> <p className="font-bold">City</p>
                    <p>Toronto</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <FlagIcon /> <p className="font-bold">Country</p>
                    <p>Canada</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <IndustryIcon /> <p className="font-bold">Industry</p>
                    <p>Software development</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <EmployeeIcon />{" "}
                    <p className="font-bold">Company head count</p>
                    <p>52</p>
                  </div>
                  <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <USDIcon /> <p className="font-bold">Company revenue</p>
                    <p>$1B+</p>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Email</div>
                  <div className="text-black text-sm">a*********@gmail.com</div>
                  <div className="text-black text-sm">p*****@kw.com</div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="text-[#929292] text-sm">Phone</div>
                  <div className="text-black text-sm">+48 055 *** ** 56</div>
                  <div className="text-black text-sm">+48 012 *** ** 23</div>
                  <div className="text-black text-sm">+48 077 *** ** 97</div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

export default function ContactTable({tableData}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [visibleRows, setVisibleRows] = React.useState([]);

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

  // React.useEffect(() => {
  //   setTableData(_tableData);
  // }, [_tableData])

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
      const newSelected = tableData.map((n) => n.id);
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

  // Avoid a layout jump when reaching the last page with empty tableData.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  React.useEffect(() => {
      // stableSort(tableData, getComparator(order, orderBy))
      // tableData.slice(
      //   page * rowsPerPage,
      //   page * rowsPerPage + rowsPerPage
      // )

      setVisibleRows(
        stableSort(tableData, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      );
    }, [order, orderBy, page, rowsPerPage, tableData]);
  
  return (
    <Box sx={{ width: "100%", mt: "10px" }}>
      {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
      <EnhancedTableToolbar
        numSelected={selected.length}
        onSelectAllClick={handleSelectAllClick}
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

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* <div className="w-full flex justify-end">
        <Pagination
          className="font-Outfit"
          count={Math.floor(tableData.length / rowsPerPage)}
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
      </div> */}
      {/* </Paper> */}
    </Box>
  );
}
