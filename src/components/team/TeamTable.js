import * as React from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

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
import ListItemIcon from '@mui/material/ListItemIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import SaveIcon from '@mui/icons-material/Save';

import { visuallyHidden } from "@mui/utils";
import { pink } from "@mui/material/colors";

import useTeam from "@/hooks/useTeam";

import SelectDropdown from "@/components/common/SelectDropdown";
import MoveGroupIcon from "@/assets/image/team/move-group.svg";
import RemoveTeamIcon from "@/assets/image/team/remove-team.svg";

import Edit from "./Edit";
import Delete from "./Delete";

function createData(
  name,
  email,
  role,
  creditMontlyUsage,
  creditAnnualUsage,
  group
) {
  return {
    name,
    email,
    role,
    creditMontlyUsage,
    creditAnnualUsage,
    group,
  };
}

const SortIcon = ({
  sort,
  direction,
  setSort,
  column
 }) => {
  console.log(sort, direction);


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 1,
      position: 'relative',
      width: "15px",
      height: "30px",
    }}>
      <KeyboardArrowUpOutlinedIcon fontSize='small' sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: sort && direction === 'asc' ? 1 : .5,
      }} 
      onClick={() => {
        console.log("Sort Ascending");
        setSort({
          sort: 1,
          sortBy: column,
        });
      }}
      onHover={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      />
      <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: sort && direction === 'desc' ? 1 : .5,
        }} 
      onClick={() => {
        console.log("Sort  Descending");
        setSort({
          sort: -1,
          sortBy: column,
        });
      }}
      onHover={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      />
    </Box>
  );
}

const rows = [
  createData("Cupcake", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Donut", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Eclair", "cupcake@gmail.com", "User", 3, 0, "-"),
  createData("Frozen yoghurt", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Gingerbread", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Honeycomb", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Ice cream sandwich", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("Jelly Bean", "cupcake@gmail.com", "Admin", 3, 0, "-"),
  createData("KitKat", "cupcake@gmail.com", "Manager", 3, 0, "-"),
  createData("Lollipop", "cupcake@gmail.com", "User", 3, 0, "-"),
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
    showSort: true,
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
    showSort: true,
  },
  {
    id: "role",
    numeric: false,
    disablePadding: true,
    label: "Role",
    showSort: true,
  },
  {
    id: "credits",
    numeric: false,
    disablePadding: true,
    label: "Email Credit Limit",
    showSort: true,
  },
  {
    id: "protein",
    numeric: false,
    disablePadding: true,
    label: "Phone Credit Limit",
    showSort: true,
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
    showSort: true,
  },
  {
    id: "",
    numeric: false,
    disablePadding: false,
    label: "",
    showVerticalIcon: true,
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
    sort,
    setSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
    console.log(event, property);
  };

  console.log(sort);

  return (
    <TableHead
      sx={{
        "& .MuiTableCell-sizeMedium": {
          padding: "10px 16px",
          fontFamily: "Outfit",
          fontSize: 16,
          fontWeight: 700,
        },
        "& .MuiTableRow-head": {
          bgcolor: "#F3F3F3",
        },
        "& .MuiTableSortLabel-icon": {
          display: "none",
        }
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
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
        </TableCell>
        {headCells?.map((headCell) => (
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
              hideSortIcon
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
              {
                headCell?.showSort ? <SortIcon
                  sort={headCell.id === sort.sortBy}
                  direction={sort.sort === -1 ? "desc" : "asc"}
                  setSort={setSort}
                  column={headCell.id}
                /> : ''
              }
              {
                headCell?.showVerticalIcon ? <MoreVertIcon /> : ''
              }
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
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>{/* <DeleteIcon /> */}</IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>{/* <FilterListIcon /> */}</IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({
  filterRole,
  searchValue,
  data,
  setData,
  sort,
  setSort
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { inviteMembers, getTeamMembers, deleteMember, updateTeamMember } = useTeam();
  const [currentlySelected, setCurrentlySelected] = React.useState(null);
  const [edit, setEdit] = React.useState("");



  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const menuOptions = [
    {
      icon: MoveGroupIcon,
      label: 'Move to the group'
    },
    {
      icon: RemoveTeamIcon,
      label: 'Remove team member',
      handler: async (id) => {
        const response = await deleteMember({ id });
        setData(data.filter((item) => item._id !== id));
      }
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
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

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
    <Box sx={{ width: "100%" }}>
      {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            sort={sort}
            setSort={setSort}
          />
          <TableBody
            sx={{
              "& .MuiTableCell-sizeMedium": {
                padding: "10px 16px",
                fontFamily: "Outfit",
                fontSize: 16,
                // font-family: Outfit;
              },
            }}
          >
            {data?.map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  // onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row._id}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
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
                      onClick={(event) => handleClick(event, row.name)}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.user?.userName}
                  </TableCell>
                  <TableCell padding="none" align="left">
                    {row.user?.email}
                  </TableCell>
                  <TableCell padding="none" align="left">
                    <SelectDropdown
                      options={["Admin", "Manager", "User"]}
                      selectedOption={row.role}
                      onChange={(value) => {
                        setData(data?.map((item) => {
                          if (item._id === row._id) {
                            return {
                              ...item,
                              role: value,
                            }
                          }
                          return item;
                        }))
                      }}
                      disabled={edit !== row._id}
                    />
                  </TableCell>
                  <TableCell padding="none" align="left">
                    {
                      edit === row._id ? (
                        <TextField
                          id="outlined-number"
                          label=""
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={row.creditsMonthly}
                          onChange={(e) => {
                            setData(data?.map((item) => {
                              if (item._id === row._id) {
                                return {
                                  ...item,
                                  creditsMonthly: parseInt(e.target.value, 10),
                                }
                              }
                              return item;
                            }))
                          }}
                          size="small"
                          sx={{
                            width: "100px",
                          }}
                        />) : row.creditsMonthly
                    }
                  </TableCell>
                  <TableCell padding="none" align="left">
                    {
                      edit === row._id ? (
                        <TextField
                          id="outlined-number"
                          label=""
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={row.creditsAnnual}
                          onChange={(e) => {
                            setData(data.map((item) => {
                              if (item._id === row._id) {
                                return {
                                  ...item,
                                  creditsAnnual: parseInt(e.target.value, 10),
                                }
                              }
                              return item;
                            }))
                          }}
                          size="small"
                          sx={{
                            width: "100px",
                          }}
                        />) : row.creditsAnnual
                    }
                  </TableCell>
                  <TableCell padding="none" align="left">
                    <Chip label={row.status} color="primary" sx={row.status === 'ACTIVE' ? {
                      color: "#2A763D",
                      backgroundColor: "#C9F3D4",
                      fontWeight: 900,
                    } : {
                      color: "#DC6803",
                      backgroundColor: "#FEF0C7",
                      fontWeight: 900,
                    }} />
                  </TableCell>
                  <TableCell padding="none" align="left">
                    {
                      edit === row._id ? (
                        <IconButton
                          onClick={async() => {
                            const response = await updateTeamMember({
                              id: row._id,
                              role: row.role,
                              creditsMonthly: row.creditsMonthly,
                              creditsAnnual: row.creditsAnnual,
                            });
                            setEdit("");
                          }}
                        >
                          <SaveIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          onClick={async () => {
                            setEdit(row._id);
                          }}
                        >
                          <Edit />
                        </IconButton>
                      )
                    }
                    <IconButton
                      onClick={(event) => {
                        setCurrentlySelected(row);
                        setMenuAnchorEl(event.currentTarget);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
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
            onClick={async () => {
              console.log(currentlySelected);
              await option.handler(currentlySelected._id);
              handleMenuClose();
            }}
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
      {/* </Paper> */}
    </Box>
  );
}
