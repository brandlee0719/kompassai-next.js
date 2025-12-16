import * as React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { Button, Select, Option, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

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
import { KompassColor } from "@/theme/color";
import { kompassColors } from "@/theme/palette";
import { pink } from "@mui/material/colors";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from "@mui/icons-material/Cancel";

import useKompassSearch from "@/hooks/useKompassSearch";
import useEnrichment from "@/hooks/useEnrichment";
import useList from "@/hooks/useList";
import useProxycurl from "@/hooks/useProxycurl";

import {
  getShortName,
  indexString,
  downloadKompassProfilesCSV,
  mergeKompassEmails,
} from "@/utils/common";

import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

import SelectDropdown from "@/components/common/SelectDropdown";
import MainLayoutSpinner from "@/components/MainLayoutSpinner";

import MenuIcon from "@/assets/image/team/menu.svg";
import MoveGroupIcon from "@/assets/image/team/move-group.svg";
import RemoveTeamIcon from "@/assets/image/team/remove-team.svg";
import BookmarkIcon from "@/assets/image/search/bookmark.svg";
import BookmarkFillIcon from "@/assets/image/search/bookmark_fill.svg";
import { ReactComponent as TwitterIcon } from "@/assets/image/search/twitter.svg";
import { ReactComponent as FacebookIcon } from "@/assets/image/search/facebook.svg";
import { ReactComponent as LinkedinIcon } from "@/assets/image/search/linkedin.svg";
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
import DownloadIcon from "@/assets/image/lists/download.svg";

import SaveToListDialog from "@/components/search/SaveToListDialog";
import { debug } from "util";

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
  const {
    numSelected,
    onSelectAllClick,
    rowCount,
    onDeleteSelected,
    onDownloadList,
  } = props;

  return (
    <>
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
                theme.palette.action.activatedOpacity,
              ),
          }),
        }}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div className="font-Outfit flex flex-row items-center justify-between">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
                sx={{
                  "&.Mui-checked": {
                    color: KompassColor.main[600],
                  },
                  "&.MuiCheckbox-indeterminate": {
                    color: KompassColor.main[600],
                    fill: KompassColor.main[600],
                  },
                }}
              />
              <div className="font-Outfit select-none">
                {numSelected > 0 ? `${numSelected}  selected` : null}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div
              onClick={onDeleteSelected}
              className="font-Outfit mr-2 cursor-pointer select-none px-2 text-center text-base text-blue-500 disabled:bg-gray-50"
            >
              Delete from list
            </div>
            <Button
              onClick={onDownloadList}
              className="font-OutfitBold flex items-center justify-center gap-2 rounded-md border-none bg-stone-950 px-4 py-2 text-sm text-white disabled:bg-stone-350"
            >
              <div>Download List</div>
              <ReactSVG src={DownloadIcon} />
            </Button>
          </div>
        </div>
      </Toolbar>
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const SubProfileListTableRow = (props) => {
  const {
    postKompassSearchEmailEnrich,
    postKompassSearchPhoneEnrich,
    postKompassSearchAllEnrich,
  } = useEnrichment();

  const ref = useRef(null);
  const {
    row,
    isItemSelected,
    labelId,
    index,
    handleClick,
    registerFunctions,
  } = props;

  const [rowData, setRowdata] = React.useState(row);

  const [isDetailVisible, setDetailVisible] = React.useState(false);

  const [emailEnriching, setEmailEnriching] = React.useState(false);
  const [phoneEnriching, setPhoneEnriching] = React.useState(false);
  const [bothEnriching, setBothEnriching] = React.useState(false);

  const onAccessEmail = async () => {
    setDetailVisible(true);
    setEmailEnriching(true);

    const response = rowData?.linkedin
      ? await postKompassSearchEmailEnrich({
          inputs: [
            {
              adaptId: rowData.adaptId,
              url: rowData.linkedin,
            },
          ],
        })
      : await postKompassSearchEmailEnrich({
          inputs: [
            {
              adaptId: rowData.adaptId,
              name: rowData.firstName + " " + rowData.lastName,
              company_name: rowData?.company?.name,
              location: `${
                rowData?.company?.city ? rowData?.company?.city + ", " : ""
              }${rowData?.company?.country}`,
            },
          ],
        });

    setEmailEnriching(false);

    if (response.status && response?.data && response?.data?.length > 0) {
      rowData.email = [
        ...(rowData?.email?.length ? rowData?.email : []),
        ...mergeKompassEmails(response.data[0].validEmails),
      ];
      if (rowData?.email?.length == 0)
        rowData.email = [{ email: "Email not available" }];

      setRowdata({ ...rowData, email: rowData.email });
    } else if (response?.data) {
      if (!response?.data?.isValidEmailFound) {
        rowData.email = [{ email: "Email not available" }];
        setRowdata({ ...rowData, email: rowData.email });
      }
    } else {
      toast.error(response?.message || "Something went wrong!", {
        theme: "colored",
      });
    }
  };

  const onAccessPhone = async () => {
    setDetailVisible(true);
    setPhoneEnriching(true);

    const response = rowData?.linkedin
      ? await postKompassSearchPhoneEnrich({
          inputs: [
            {
              adaptId: rowData.adaptId,
              url: rowData.linkedin,
            },
          ],
        })
      : await postKompassSearchPhoneEnrich({
          inputs: [
            {
              adaptId: rowData.adaptId,
              name: rowData.firstName + " " + rowData.lastName,
              company_name: rowData?.company?.name,
              location: `${rowData?.company?.city ? rowData?.company?.city + ", " : ""}${rowData?.company?.country}`,
            },
          ],
        });

    setPhoneEnriching(false);

    if (response.status && response?.data && response?.data?.length > 0) {
      rowData.phoneNumbers = [
        ...(rowData?.phoneNumbers?.length ? rowData?.phoneNumbers : []),
        ...response.data[0].validPhones,
      ].map((item) => ({ number: item.phoneNumber }));
      if (rowData?.phoneNumbers?.length == 0)
        rowData.phoneNumbers = [{ number: "Phone not available" }];

      setRowdata({ ...rowData, phoneNumbers: rowData.phoneNumbers });
    } else if (response?.data) {
      if (!response?.data?.isValidPhoneFound) {
        rowData.phoneNumbers = [{ number: "Phone not available" }];
        setRowdata({ ...rowData, phoneNumbers: rowData.phoneNumbers });
      }
    } else {
      toast.error(response?.message || "Something went wrong!", {
        theme: "colored",
      });
    }
  };

  const onAccessEmailAndPhone = async () => {
    setDetailVisible(true);
    setBothEnriching(true);

    const response = rowData?.linkedin
      ? await postKompassSearchAllEnrich({
          inputs: [
            {
              adaptId: rowData?.adaptId,
              url: rowData?.linkedin,
            },
          ],
        })
      : await postKompassSearchAllEnrich({
          inputs: [
            {
              adaptId: rowData.adaptId,
              name: rowData.firstName + " " + rowData.lastName,
              company_name: rowData?.company?.name,
              location: `${
                rowData?.company?.city ? rowData?.company?.city + ", " : ""
              }${rowData?.company?.country}`,
            },
          ],
        });

    setBothEnriching(false);

    if (response.status && response?.data && response?.data?.length > 0) {
      rowData.email = [
        ...(rowData?.email?.length ? rowData?.email : []),
        ...mergeKompassEmails(response.data[0].validEmails),
      ];
      if (rowData?.email?.length == 0)
        rowData.email = [{ number: "Email not available" }];

      rowData.phoneNumbers = [
        ...rowData.phoneNumbers,
        ...response.data[0].validPhones,
      ].map((item) => ({ number: item.phoneNumber }));
      if (rowData?.phoneNumbers?.length == 0)
        rowData.phoneNumbers = [{ number: "Phone not available" }];

      setRowdata({
        ...rowData,
        email: rowData.email,
        phoneNumbers: rowData.phoneNumbers,
      });
    } else if (response?.data) {
      if (!response?.data?.isValidEmailFound) {
        rowData.email = [{ email: "Email not available" }];
        setRowdata({ ...rowData, email: rowData.email });
      }
      if (!response?.data?.isValidPhoneFound) {
        rowData.phoneNumbers = [{ number: "Phone not available" }];
        setRowdata({ ...rowData, phoneNumbers: rowData.phoneNumbers });
      }
    } else {
      toast.error(response?.message || "Something went wrong!", {
        theme: "colored",
      });
    }
  };

  React.useEffect(() => {
    ref.current = [onAccessEmail, onAccessPhone, onAccessEmailAndPhone];
    registerFunctions(index, [
      onAccessEmail,
      onAccessPhone,
      onAccessEmailAndPhone,
    ]);
  }, [index, registerFunctions]);

  React.useEffect(() => {
    const newRow = row;

    if (newRow?.isEmailFound) {
      newRow.email = [
        ...(newRow?.workEmails
          ? newRow?.workEmails.map((item) => {
              return { ...item, type: "Valid" };
            })
          : []),
        ...(newRow?.personalEmails
          ? newRow?.personalEmails.map((item) => {
              return { ...item, type: "Personal" };
            })
          : []),
        ...(newRow?.riskyEmails
          ? newRow?.riskyEmails.map((item) => {
              return { ...item, type: "Risky" };
            })
          : []),
        ...(newRow?.unknownEmail
          ? newRow?.unknownEmail.map((item) => {
              return { ...item, type: "Unknown" };
            })
          : []),
        ...(newRow?.doNotEmails
          ? newRow?.doNotEmails.map((item) => {
              return { ...item, type: "Do not email" };
            })
          : []),
      ];
    }

    if (newRow?.isPhoneFound) {
      newRow.phoneNumbers = [];
      newRow.phoneNumbers = [...(newRow.validPhones ? newRow.validPhones : [])];
      newRow.phoneNumbers = newRow.phoneNumbers.map((item) => {
        return {
          number: item.phoneNumber,
        };
      });
    }

    setRowdata(newRow);
  }, [row]);

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={rowData._id}
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
              },
            }}
            onClick={(event) => handleClick(event, rowData._id)}
          />
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          padding="none"
          onClick={(event) => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <div className="flex w-full flex-row items-center gap-2">
            <div className="flex">
              {rowData?.profilePictureUrl ? (
                <img
                  // src={
                  //   row.website
                  //     ? `https://www.google.com/s2/favicons?sz=64&domain_url=${row.website}`
                  //     : null
                  // }
                  src={rowData?.profilePictureUrl}
                  width={40}
                  height={40}
                />
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
                    ][
                      indexString(rowData.firstName + " " + rowData.lastName, 5)
                    ]
                  }
                >
                  {getShortName(rowData.firstName + " " + rowData.lastName)}
                </div>
              )}
            </div>
            <div className="flex w-full flex-col text-sm">
              <p>{rowData.firstName + " " + rowData.lastName}</p>
              <p className="text-[#929292]">{rowData.title}</p>
            </div>
          </div>
        </TableCell>
        <TableCell
          padding="none"
          align="left"
          onClick={(event) => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <div className="flex flex-row items-center gap-2 text-sm">
            {rowData?.company?.logo ? (
              <img src={rowData?.company?.logo} className="w-10" />
            ) : (
              <div
                className={
                  "font-OutfitMedium flex h-10 w-10 items-center justify-center rounded-full bg-stone-250 text-lg uppercase text-stone-350"
                }
              >
                {rowData?.company?.name[0]}
              </div>
            )}
            {rowData?.company?.name}
          </div>
        </TableCell>
        <TableCell
          padding="none"
          align="left"
          onClick={(event) => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <p className="text-sm">
            {(rowData?.city ? rowData?.city + ", " : "") +
              (rowData?.country ? rowData?.country : null)}
          </p>
        </TableCell>
        <TableCell
          padding="none"
          align="left"
          onClick={(event) => {
            setDetailVisible(!isDetailVisible);
          }}
        >
          <p className="text-sm">{rowData?.company?.industry}</p>
        </TableCell>
        <TableCell padding="none" align="left">
          <div className="flex w-full flex-row items-center justify-end gap-1">
            <Button className="font-Outfit flex items-center justify-center rounded-full border-[1px] border-[#929292] bg-transparent px-3 py-1 text-sm text-black">
              <LockIcon className="h-4 w-4" />
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
            <div className="flex w-full flex-row">
              <div className="w-3/12 border-r border-stone-250">
                <div className="flex w-full items-center gap-4 px-6 py-6">
                  {rowData?.company?.logo ? (
                    <img src={rowData?.company?.logo} className="w-10" />
                  ) : (
                    <div
                      className={
                        "font-OutfitMedium flex h-10 w-10 items-center justify-center rounded-full bg-stone-250 text-lg uppercase text-stone-350"
                      }
                    >
                      {rowData?.company?.name[0]}
                    </div>
                  )}
                  <div className="font-OutfitMedium text-lg">
                    {rowData?.company?.name}
                  </div>
                </div>
                <hr className="mx-6 h-px bg-stone-250" />
                <div className="flex flex-col gap-2 p-6">
                  <div className="mb-2 text-sm text-stone-350">
                    Company Details
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <HomeIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company</p>
                    <p className="font-OutfitLight">{rowData?.company?.name}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm text-black">
                    <HomeIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company website</p>
                    <p className="font-OutfitLight">
                      {rowData?.company?.website ? (
                        <Link
                          target="_blank"
                          className="text-blue-500"
                          to={rowData?.company?.website}
                        >
                          {rowData?.company?.name}
                        </Link>
                      ) : (
                        <p>{rowData?.company?.name}</p>
                      )}
                    </p>
                  </div>
                  {/* <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                  <LocationIcon /> <p className="font-bold">City</p>
                  <p>{rowData.city}</p>
                </div>
                <div className="flex flex-row items-center text-black font-Outfit text-sm gap-1">
                  <FlagIcon /> <p className="font-bold">Country</p>
                  <p>{rowData.country}</p>
                </div> */}
                  <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                    <LocationIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Location</p>
                    <p className="font-OutfitLight">
                      {rowData?.city ? rowData?.city + ", " : null}
                      {rowData?.country}
                    </p>
                  </div>
                  <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                    <IndustryIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Industry</p>
                    <p className="font-OutfitLight">
                      {rowData?.company?.industry}
                    </p>
                  </div>
                  <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                    <EmployeeIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company head count</p>
                    <p className="font-OutfitLight">
                      {rowData?.company?.headCount}
                    </p>
                  </div>
                  <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                    <USDIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                    <p className="font-OutfitMedium">Company revenue</p>
                    <p className="font-OutfitLight">
                      {rowData?.company?.revenue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-9/12">
                <div className="mt-1 flex w-full flex-row justify-between p-6">
                  <div className="flex w-full flex-col text-sm">
                    <div className="flex w-full flex-row">
                      <div className="font-OutfitMedium">{rowData.name}</div>
                      <div className="flex flex-row gap-2 pl-2 pt-0.5">
                        {rowData.linkedin ? (
                          <Link
                            target="_blank"
                            to={"https://" + rowData.linkedin}
                          >
                            <ReactSVG
                              src={LinkedinIcon}
                              style={{ height: 13, width: 13 }}
                            />
                          </Link>
                        ) : null}
                        {rowData.twitter ? (
                          <Link
                            target="_blank"
                            to={"https://" + rowData.twitter}
                          >
                            <ReactSVG
                              src={TwitterIcon}
                              style={{ height: 13, width: 13 }}
                            />
                          </Link>
                        ) : null}
                        {rowData.facebook ? (
                          <Link
                            target="_blank"
                            to={"https://" + rowData.facebook}
                          >
                            <ReactSVG
                              src={FacebookIcon}
                              style={{ height: 13, width: 13 }}
                            />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                    <p className="text-[#929292]">{rowData.title}</p>
                  </div>
                  <div className="flex w-full flex-row items-center justify-end gap-1">
                    <Button
                      className="font-Outfit ml-4 rounded-md  border-none bg-stone-950 px-4 py-2 text-xs font-extralight text-white disabled:bg-gray-500"
                      onClick={onAccessEmail}
                      disabled={
                        emailEnriching || bothEnriching || rowData?.isEmailFound
                      }
                    >
                      Access email
                    </Button>
                    <Button
                      className="font-Outfit rounded-md border-none  bg-stone-950 px-4 py-2 text-xs font-extralight text-white disabled:bg-gray-500"
                      onClick={onAccessPhone}
                      disabled={
                        phoneEnriching || bothEnriching || rowData?.isPhoneFound
                      }
                    >
                      Access Phone
                    </Button>
                    <Button
                      className="font-Outfit rounded-md border-none  bg-stone-950 px-4 py-2 text-xs font-extralight text-white disabled:bg-gray-500"
                      onClick={onAccessEmailAndPhone}
                      disabled={
                        bothEnriching ||
                        emailEnriching ||
                        phoneEnriching ||
                        (rowData?.isEmailFound && rowData?.isPhoneFound)
                      }
                    >
                      All contact
                    </Button>
                  </div>
                </div>
                <hr className="mx-6 h-px bg-stone-250" />
                <div className="flex w-full flex-row p-6">
                  <div className="flex w-4/12 flex-col gap-2">
                    <div className="mb-2 text-sm text-stone-350">
                      Contact Details
                    </div>
                    <div className="flex flex-row items-center gap-1 text-sm text-black">
                      <UserIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                      <p className="font-OutfitMedium">Name</p>
                      <p className="font-OutfitLight">{rowData.name}</p>
                    </div>
                    <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                      <JobTitleIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                      <p className="font-OutfitMedium">Title</p>
                      <p className="font-OutfitLight">{rowData.title}</p>
                    </div>
                    <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                      <DepartmentIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                      <p className="font-OutfitMedium">Department</p>
                      <p className="font-OutfitLight">
                        {rowData.department && rowData.department.join(", ")}
                      </p>
                    </div>
                    <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                      <LevelIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                      <p className="font-OutfitMedium">Level</p>
                      <p className="font-OutfitLight">{rowData.level}</p>
                    </div>
                    <div className="font-Outfit flex flex-row items-center gap-1 text-sm text-black">
                      <LocationIcon className="h-3 w-3 fill-current text-stone-950" />{" "}
                      <p className="font-OutfitMedium">Location</p>
                      <p className="font-OutfitLight">
                        {rowData?.city ? rowData?.city + ", " : null}
                        {rowData?.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-4/12 flex-col gap-2">
                    <div className="flex flex-row text-center text-sm text-stone-350">
                      {" "}
                      {emailEnriching || bothEnriching ? (
                        <CircularProgress size={15} />
                      ) : null}{" "}
                      <p className="">Email</p>{" "}
                    </div>
                    {rowData?.email?.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className="flex flex-row items-center text-sm  text-black"
                        >
                          {item.email}
                          <p className="font-Outfit ml-1 opacity-80">
                            {item.type === "Valid" ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label="Valid"
                                color="success"
                                size="small"
                                style={{ fontSize: 12, fontFamily: "Outfit" }}
                              />
                            ) : null}
                            {item.type === "Personal" ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label="Personal"
                                color="primary"
                                size="small"
                                style={{ fontSize: 12, fontFamily: "Outfit" }}
                              />
                            ) : null}
                            {item.type === "Risky" ? (
                              <Chip
                                icon={<WarningIcon />}
                                label="Risky"
                                color="warning"
                                size="small"
                                style={{ fontSize: 12, fontFamily: "Outfit" }}
                              />
                            ) : null}
                            {item.type === "Unknown" ? (
                              <Chip
                                icon={<WarningIcon />}
                                label="Unknown"
                                color="secondary"
                                size="small"
                                style={{ fontSize: 12, fontFamily: "Outfit" }}
                              />
                            ) : null}
                            {item.type === "Do not email" ? (
                              <Chip
                                icon={<CancelIcon />}
                                label="Do not email"
                                color="error"
                                size="small"
                                style={{ fontSize: 12, fontFamily: "Outfit" }}
                              />
                            ) : null}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex w-4/12 flex-col gap-2">
                    <div className="flex flex-row text-center text-sm text-stone-350">
                      {" "}
                      {phoneEnriching || bothEnriching ? (
                        <CircularProgress size={15} />
                      ) : null}{" "}
                      <p className="">Phone</p>{" "}
                    </div>
                    {rowData?.phoneNumbers?.map((item, key) => {
                      return (
                        <div key={key} className="text-sm text-black">
                          {item.number}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
};

export default function SubProfileListTable({
  setLoading,
  listTitle,
  listId,
  tableData,
  reload,
  searchFilter,
}) {
  const { deleteProfiles } = useList();

  const [visibleDeleteDialog, handleVisibleDeleteDialog] =
    React.useState(false);

  // const [tableData, setTableData] = React.useState([]);
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
  const visibleRowRefs = useRef([]);

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
      const newSelected = visibleRows.map((n) => n._id);
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

  const handleChangePage = async (event, newPage) => {
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

  const handleDeleteSelected = async (confirmed) => {
    if (!(confirmed === true)) {
      handleVisibleDeleteDialog(true);
    } else {
      setLoading(true);
      const response = await deleteProfiles({ listId, ids: selected });
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

  const handleDownloadList = () => {
    downloadKompassProfilesCSV(listTitle, tableData);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  // Avoid a layout jump when reaching the last page with empty tableData.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  React.useEffect(() => {
    const rows = tableData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );
    setVisibleRows([...rows]);
  }, [order, orderBy, page, rowsPerPage, tableData]);

  const registerRowEnrichFunctions = (index, functions) => {
    visibleRowRefs.current[index] = functions;
  };

  return (
    <>
      <Box sx={{ width: "100%", mt: "10px", px: "25px" }}>
        {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
        <EnhancedTableToolbar
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          onDeleteSelected={handleDeleteSelected}
          onDownloadList={handleDownloadList}
          rowCount={visibleRows.length}
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
              rowCount={visibleRows.length}
            />
            <TableBody
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "5px 8px",
                  fontFamily: "Outfit",
                  fontSize: 14,
                },
              }}
            >
              {visibleRows?.length > 0 ? (
                visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <SubProfileListTableRow
                      isItemSelected={isItemSelected}
                      row={row}
                      labelId={labelId}
                      handleClick={handleClick}
                      index={index}
                      registerFunctions={registerRowEnrichFunctions}
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
