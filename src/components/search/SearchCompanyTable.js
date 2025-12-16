import * as React from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { Button, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
import {
  downloadKompassCompaniesCSV,
  getShortName,
  getUUID,
  indexString,
} from "@/utils/common";
import { revenueList } from "@/utils/constants";

import MainLayoutSpinner from "@/components/MainLayoutSpinner";

import useKompassSearch from "@/hooks/useKompassSearch";
import useProxycurl from "@/hooks/useProxycurl";

import SelectDropdown from "@/components/common/SelectDropdown";

import { CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";

import MenuIcon from "@/assets/image/team/menu.svg";
import MoveGroupIcon from "@/assets/image/team/move-group.svg";
import RemoveTeamIcon from "@/assets/image/team/remove-team.svg";
import DownIcon from "@/assets/image/search/down.svg";
import AmazonLogo from "@/assets/image/search/amazon.png";
import TwitterIcon from "@/assets/image/search/twitter.svg";
import FacebookIcon from "@/assets/image/search/facebook.svg";
import LinkedinIcon from "@/assets/image/search/linkedin.svg";

import { ReactComponent as BookmarkIcon } from "@/assets/image/search/bookmark.svg";
import { ReactComponent as BookmarkFillIcon } from "@/assets/image/search/bookmark_fill.svg";
import { ReactComponent as BookmarkSVG } from "@/assets/image/search/bookmark.svg";
import { ReactComponent as UserIcon } from "@/assets/image/search/user.svg";
import { ReactComponent as FlagIcon } from "@/assets/image/search/flag.svg";
import { ReactComponent as LocationIcon } from "@/assets/image/search/location.svg";
import { ReactComponent as USDIcon } from "@/assets/image/search/usd.svg";
import { ReactComponent as HomeIcon } from "@/assets/image/search/home.svg";
import { ReactComponent as AddListIcon } from "@/assets/image/search/icon-addlist.svg";
import { ReactComponent as DeleteIcon } from "@/assets/image/search/icon-delete.svg";
import { ReactComponent as BookmarkAddIcon } from "@/assets/image/search/icon-bookmark-add.svg";
import { ReactComponent as LibraryAddIcon } from "@/assets/image/search/icon-library-add.svg";
import { ReactComponent as LockIcon } from "@/assets/image/search/lock.svg";
import { ReactComponent as ContactIcon } from "@/assets/image/search/contact.svg";
import { ReactComponent as PhoneIcon } from "@/assets/image/search/phone.svg";
import { ReactComponent as LinkIcon } from "@/assets/image/search/link.svg";
import LightSpinner from "../common/LightSpinner";
import { uuid } from "uuidv4";

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
    label: "Company",
  },
  {
    id: "location",
    numeric: false,
    disablePadding: true,
    label: "Location",
  },
  {
    id: "revenueValue",
    numeric: false,
    disablePadding: true,
    label: "Revenue",
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
  const {
    numSelected,
    onSelectAllClick,
    rowCount,
    onExportSelected,
    totalCount,
  } = props;

  return (
    <div className="mt-3 w-full border-b border-stone-250 pb-3">
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { sm: 4 },
        }}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div className="font-Outfit flex flex-row items-center">
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
            <div className="font-Outfit flex flex-row justify-items-center gap-2 text-sm">
              <div
                className={
                  "flex cursor-pointer select-none flex-row gap-1 rounded-md border px-2 py-1 text-white" +
                  (numSelected > 0
                    ? " border-stone-950 bg-stone-950"
                    : " border-stone-350 bg-stone-350")
                }
                disabled={numSelected == 0}
                onClick={() => {
                  if (numSelected > 0) onExportSelected();
                }}
              >
                <div>Export</div>
              </div>
            </div>
          </div>
          <div className="font-OutfitMedium select-none text-sm">
            {numSelected > 0
              ? `${numSelected?.toLocaleString("en-US")}  Selected / ${totalCount?.toLocaleString("en-US")} Records Found`
              : totalCount > 0
                ? `${totalCount?.toLocaleString("en-US")} Records Found`
                : null}
          </div>
        </div>
      </Toolbar>
    </div>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function TinyAlert({ text }) {
  return (
    <div className="font-Outfit flex flex-row items-center rounded-full border-none bg-[#D1E1DF] px-2 py-[0.5px] text-xs text-emerald-500">
      {text}
    </div>
  );
}

function CompanyTableRow(props) {
  const { getCompanyPicture } = useProxycurl();
  const {
    index,
    row,
    isItemSelected,
    labelId,
    handleClick,
    searchCompanyContacts,
    handleFavorite,
  } = props;

  const { postKompassSearchFavorite, deleteKompassSearchFavorite } =
    useKompassSearch();

  const [isFavourite, setFavourite] = React.useState(false);
  const [isDetailVisible, setDetailVisible] = React.useState(false);
  const [logoLoaded, setLogoLoaded] = React.useState(false);

  const onFavorite = async () => {
    if (!row?.favoriteId) {
      const response = await postKompassSearchFavorite({ input: row });
      if (response.status) {
        if (response?.data?.id) {
          handleFavorite(index, true, response.data.id);
        } else {
          toast.error("Something went wrong!", { theme: "colored" });
        }
      } else {
        toast.error(response.message, { theme: "colored" });
      }
    } else {
      const response = await deleteKompassSearchFavorite({
        id: row?.favoriteId,
      });
      if (response.status) {
        handleFavorite(index, false);
      } else {
        toast.error(response.message, { theme: "colored" });
      }
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
        key={row.id}
        selected={isItemSelected}
        sx={
          isDetailVisible
            ? {
                cursor: "pointer",
                background: kompassColors.bgLight,
                "& .MuiTableCell-root": {
                  border: "none",
                  borderTop: 1,
                  borderColor: kompassColors.light,
                },
              }
            : {
                cursor: "pointer",
                background: "white",
                "& .MuiTableCell-root": {
                  border: "none",
                  borderTop: 1,
                  borderColor: kompassColors.light,
                },
              }
        }
      >
        <TableCell padding="checkbox">
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
            onClick={(event) => handleClick(event, row.id)}
          />
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          padding="none"
          onClick={() => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <div className="flex w-full flex-row items-center gap-3">
            <div className="flex">
              {row?.logo ? (
                <>
                  <img
                    // src={`https://www.google.com/s2/favicons?sz=64&domain_url=${row.website}`}
                    src={row.logo}
                    width={40}
                    height={40}
                    // style={logoLoaded ? {} : { display: "none" }}
                    alt="Favicon"
                  />
                </>
              ) : (
                <div
                  className={
                    "text-md font-OutfitMedium flex h-10 w-10 items-center justify-center rounded-full" +
                    [
                      " bg-accents-yellow text-black",
                      " bg-accents-purple text-black",
                      " bg-accents-green text-black",
                      " bg-accents-blue text-black",
                      " bg-accents-orange text-black",
                    ][indexString(row?.name, 5)]
                  }
                >
                  {getShortName(row?.name)}
                </div>
              )}
            </div>
            <div className="flex w-full flex-col text-sm">
              <p>{row.name}</p>
              <p className="text-stone-350">{row.industry}</p>
              {/* <p className="text-stone-350">{row.location}</p> */}
              <div className="mt-1 flex flex-row gap-2 self-stretch">
                <IconButton className="h-5 w-5">
                  {row.twitter ? (
                    <Link target="_blank" to={row.twitter}>
                      <ReactSVG
                        src={TwitterIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </Link>
                  ) : (
                    <div>
                      <ReactSVG
                        src={TwitterIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                  )}
                </IconButton>
                <IconButton className="h-5 w-5">
                  {row.facebook ? (
                    <Link target="_blank" to={row.facebook}>
                      <ReactSVG
                        src={FacebookIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </Link>
                  ) : (
                    <div>
                      <ReactSVG
                        src={FacebookIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                  )}
                </IconButton>
                <IconButton className="h-5 w-5">
                  {row.linkedin ? (
                    <Link target="_blank" to={row.linkedin}>
                      <ReactSVG
                        src={LinkedinIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </Link>
                  ) : (
                    <div>
                      <ReactSVG
                        src={LinkedinIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell
          padding="none"
          align="left"
          onClick={() => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <p className="text-sm">
            {(row.city ? row.city + ", " : "") +
              (row.country ? row.country : "-")}
          </p>
        </TableCell>
        <TableCell
          padding="none"
          align="left"
          onClick={() => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <p className="text-sm">{row.revenue}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <div className="flex w-full flex-row items-center justify-end gap-1">
            <IconButton onClick={onFavorite}>
              {!row?.favoriteId ? (
                <BookmarkIcon className="h-5 w-5 fill-current text-stone-350" />
              ) : (
                <BookmarkFillIcon className="h-5 w-5 fill-current text-blue-500" />
              )}
            </IconButton>

            <Button
              className="font-OutfitMedium flex w-[170px] items-center justify-center gap-2 rounded-full border border-stone-350 bg-white py-1 text-xs text-stone-950"
              onClick={() => {
                searchCompanyContacts({ companyName: [row.name] });
              }}
            >
              <ContactIcon />
              <p>{row.numberOfContacts?.toLocaleString("en-US")} contacts</p>
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
            <div className="flex w-full flex-col gap-6 p-6">
              <div className="flex w-full flex-row justify-between">
                <div className="flex w-full flex-col text-sm">
                  <p className="font-OutfitMedium">{row?.name}</p>
                  <p className="text-sm text-stone-350">{row?.industry}</p>
                </div>
                <div className="flex w-full flex-row items-center justify-end gap-1">
                  <div className="flex flex-row gap-2 pl-2 pt-0.5">
                    {row.linkedin ? (
                      <Link target="_blank" to={row.linkedin}>
                        <ReactSVG
                          src={LinkedinIcon}
                          style={{ height: 20, width: 20 }}
                        />
                      </Link>
                    ) : null}
                    {row.twitter ? (
                      <Link target="_blank" to={row.twitter}>
                        <ReactSVG
                          src={TwitterIcon}
                          style={{ height: 20, width: 20 }}
                        />
                      </Link>
                    ) : null}
                    {row.facebook ? (
                      <Link target="_blank" to={row.facebook}>
                        <ReactSVG
                          src={FacebookIcon}
                          style={{ height: 20, width: 20 }}
                        />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
              <hr className="w-full bg-stone-250" />
              <div className="grid w-full grid-cols-4 gap-2">
                <div className="col-span-2 flex flex-col gap-2">
                  <div className="mb-2 text-sm text-stone-350">
                    Company details
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <UserIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company head count</p>{" "}
                    <p className="font-OutfitLight">{row?.headCount}</p>
                  </div>
                  {/* <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                    <p className="font-bold">Phone Number</p>{" "}<p>{row?.phoneNumber}</p>
                  </div> */}
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <HomeIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Industry</p>{" "}
                    <p className="font-OutfitLight">{row?.industry}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <LinkIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company website</p>
                    <p className="font-OutfitLight">
                      {row.website ? (
                        <Link
                          target="_blank"
                          className="text-blue-500"
                          to={row.website}
                        >
                          {row?.name}
                        </Link>
                      ) : (
                        <p>{row?.name}</p>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <USDIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company revenue </p>{" "}
                    <p className="font-OutfitLight">{row?.revenue}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <UserIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Number of contacts</p>{" "}
                    <p className="font-OutfitLight">{row?.headCount}</p>
                  </div>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <div className="text-sm text-stone-350">Company info</div>
                  <div className="text-sm text-black">{row?.about}</div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

function CompanyTable({ filter, showSpinner, visible, searchCompanyContacts }) {
  const { postKompassSearchCompaniesByFilters } = useKompassSearch();

  const [tableData, setTableData] = React.useState([]);
  const [adaptLimit, setAdaptLimit] = React.useState(10);
  const [cursorMark, setCursorMark] = React.useState(null);
  const [totalCount, setTotalCount] = React.useState(null);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  let loaded = false;
  React.useEffect(() => {
    if (!filter || loaded) return;
    handleSearchByFilter({ ...filter });
    loaded = true;
  }, [filter]);

  const clearTable = () => {
    setVisibleRows([]);
    setTableData([]);
    setTotalCount(null);
    setCursorMark(null);
  };

  const handleSearchByFilter = async (companyFilter, _cursorMark = null) => {
    if (!companyFilter || Object.keys(companyFilter).length === 0) {
      clearTable();
      return;
    }

    companyFilter = {
      ...companyFilter,
      limit: adaptLimit,
    };

    let _tableData = tableData;

    if (_cursorMark) {
      companyFilter["cursorMark"] = _cursorMark;
    } else {
      setTableData([]);
      _tableData = [];
    }

    showSpinner(true);

    try {
      const _response =
        await postKompassSearchCompaniesByFilters(companyFilter);
      if (_response.status == true) {
        debugger;
        const newTableData = _response.data.response.data.map((item) => {
          const revenueValue = revenueList.find(
            (revenue) => revenue.label == item?.revenue,
          )?.realValue;
          const newItem = {
            ...item,
            id: getUUID(),
            location: `${item?.city} ${item?.country}`,
            revenueValue,
          };
          return newItem;
        });
        setTableData([..._tableData, ...newTableData]);
        setCursorMark(_response.data.response.cursorMark);
        setTotalCount(_response.data.response.totalResults);

        setPage(0);
      } else {
        setTableData([..._tableData]);
      }
    } catch (e) {
      setTableData([..._tableData]);
    }

    showSpinner(false);
  };

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
      const newSelected = visibleRows.map((n) => n.id);
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
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleFavorite = (index, bSelected, favoriteId = null) => {
    const newTableData = [...tableData];
    newTableData[page * rowsPerPage + index]["favoriteId"] = favoriteId;
    setTableData(newTableData);
  };

  const handleChangePage = async (event, newPage) => {
    if (
      newPage > Math.floor(tableData.length / rowsPerPage) &&
      totalCount > tableData.length
    ) {
      await handleSearchByFilter(filter, cursorMark);
    }

    setPage(newPage - 1);
    setSelected([]);
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
    const rows = tableData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );

    setVisibleRows(stableSort(rows, getComparator(order, orderBy)));
  }, [order, orderBy, page, rowsPerPage, tableData]);

  const onExportSelected = async () => {
    const selectedData = selected.map((id) =>
      tableData.find((item) => item.id == id),
    );
    downloadKompassCompaniesCSV(`export_${Date.now()}`, selectedData);
  };

  return (
    <Box sx={{ width: "100%", mt: "10px" }} className={visible ? "" : "hidden"}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        rowCount={visibleRows.length}
        totalCount={totalCount}
        onSelectAllClick={handleSelectAllClick}
        onExportSelected={onExportSelected}
      />
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderCollapse: "separate",
            // borderSpacing: "0 0.5em",
            // border: "none",
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
            rowCount={visibleRows.length}
          />
          <TableBody
            sx={{
              "& .MuiTableCell-sizeMedium": {
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: "18px",
                paddingRight: "24px",
                fontFamily: "Outfit",
                fontSize: 14,
              },
            }}
          >
            {visibleRows?.length > 0 ? (
              visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <CompanyTableRow
                    index={index}
                    isItemSelected={isItemSelected}
                    row={row}
                    labelId={labelId}
                    handleClick={handleClick}
                    searchCompanyContacts={searchCompanyContacts}
                    handleFavorite={handleFavorite}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    border: "none",
                  }}
                  colSpan={10}
                >
                  <div className="font-Outfit col-span-10 p-5 text-center text-xl">
                    <p>No data</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
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
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <div className="flex w-full justify-end">
        <Pagination
          className="font-Outfit"
          count={
            Math.ceil(tableData.length / rowsPerPage) +
            (totalCount > tableData.length ? 1 : 0)
          }
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
      {/* </Paper> */}
    </Box>
  );
}

function CompanyFavoriteTable({ showSpinner, visible, searchCompanyContacts }) {
  const { getKompassSearchFavorite } = useKompassSearch();

  const [loading, setLoading] = React.useState(false);

  const [tableData, setTableData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(null);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  let loaded = false;
  React.useEffect(() => {
    if (loaded) return;

    setLoading(true);
    getKompassSearchFavorite({}).then((response) => {
      if (response.status) {
        setTableData(
          response.data.map((data) => {
            return {
              ...data.companyDetail,
              favoriteId: data._id,
            };
          }),
        );
        setTotalCount(response.data.length);
      } else {
        toast.error(response.message, { theme: "colored" });
      }

      setLoading(false);
    });

    loaded = true;
  }, [visible]);

  const clearTable = () => {
    setVisibleRows([]);
    setTableData([]);
    setTotalCount(null);
  };

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
      const newSelected = visibleRows.map((n) => n.id);
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
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleFavorite = (index, bSelected, favoriteId = null) => {
    const newTableData = [...tableData];
    newTableData[page * rowsPerPage + index]["favoriteId"] = favoriteId;
    setTableData(newTableData);
  };

  const handleChangePage = async (event, newPage) => {
    if (
      newPage > Math.floor(tableData.length / rowsPerPage) &&
      totalCount > tableData.length
    ) {
      await handleSearchByFilter(filter, cursorMark);
    }

    setPage(newPage - 1);
    setSelected([]);
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
    setVisibleRows(
      stableSort(tableData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    );
  }, [order, orderBy, page, rowsPerPage, tableData]);

  const onExportSelected = async () => {
    const selectedData = selected.map((id) =>
      tableData.find((item) => item.id == id),
    );
    downloadKompassCompaniesCSV(`export_${Date.now()}`, selectedData);
  };

  return (
    <Box
      sx={{ width: "100%", mt: "0px", px: "10px" }}
      className={visible ? "" : "hidden"}
    >
      {loading ? <LightSpinner /> : null}

      {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
      <EnhancedTableToolbar
        numSelected={selected.length}
        rowCount={visibleRows.length}
        totalCount={totalCount}
        onSelectAllClick={handleSelectAllClick}
        onExportSelected={onExportSelected}
      />
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderCollapse: "separate",
            // border: "none",
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
            rowCount={visibleRows.length}
          />
          <TableBody
            sx={{
              "& .MuiTableCell-sizeMedium": {
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: "18px",
                paddingRight: "24px",
                fontFamily: "Outfit",
                fontSize: 14,
              },
            }}
          >
            {visibleRows?.length > 0 ? (
              visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <CompanyTableRow
                    index={index}
                    isItemSelected={isItemSelected}
                    row={row}
                    labelId={labelId}
                    handleClick={handleClick}
                    searchCompanyContacts={searchCompanyContacts}
                    handleFavorite={handleFavorite}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    border: "none",
                  }}
                  colSpan={10}
                >
                  <div className="font-Outfit col-span-10 p-5 text-center text-xl">
                    <p>No data</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
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
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <div className="mt-5 flex w-full justify-end">
        <Pagination
          className="font-Outfit"
          count={
            Math.ceil(tableData.length / rowsPerPage) +
            (totalCount > tableData.length ? 1 : 0)
          }
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
      {/* </Paper> */}
    </Box>
  );
}

export { CompanyTable, CompanyFavoriteTable };
