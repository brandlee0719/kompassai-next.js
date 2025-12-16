import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import {
  Box,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  Pagination,
  Backdrop,
  CircularProgress,
  TableRow,
} from "@mui/material";

import { read, utils, writeFile } from "xlsx";
import { toast } from "react-toastify";
import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import ConfirmDeleteDialog from "../lists/ConfirmDeleteDialog";
import ValidationTableToolbar from "./ValidationTableToolbar";
import ValidationTableHeader from "./ValidationTableHeader";
import ValidationTableRow from "./ValidationTableRow";

const headCells = [
  {
    id: "fileName",
    numeric: false,
    disablePadding: true,
    label: "List name",
  },
  {
    id: "emails",
    numeric: true,
    disablePadding: true,
    label: "Emails",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
    align: "center",
  },
  {
    id: "created_at",
    numeric: true,
    disablePadding: true,
    label: "Created on",
  },
  {
    id: "extend",
    numeric: true,
    sortable: false,
    disablePadding: true,
    disableSorting: true,
    align: "right",
    label: "",
  },
];

export default function EmailFilesTable(props) {
  const [tableData, setTableData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false);
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("created_at");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const queryClient = useQueryClient();
  const fetchDataQuery = async () => {
    setSelected([]);
    const res = await getAllFiles();
    return res;
  };
  const deleteFilesMutation = async (params) => {
    setSelected([]);
    const res = await deleteFiles(JSON.stringify(params));
    return res;
  };
  const { mutateAsync: deleteFilesTrigger, isPending } = useMutation({
    mutationFn: deleteFilesMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ValidationFiles"] });
    },
  });

  const {
    data,
    error,
    isSuccess,
    isFetching,
    isPlaceholderData,
    refetch: refetchRows,
  } = useQuery({
    queryKey: ["ValidationFiles", page],
    placeholderData: keepPreviousData,
    queryFn: fetchDataQuery,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: 30000,
    refetchInterval: 15000,
  });
  const loading = useMemo(() => {
    return isFetching || isPending;
  }, [isFetching, isPending]);

  const urlSearchParams = new URLSearchParams({
    page: page,
    pageSize: rowsPerPage,
    sortBy: orderBy,
    sortOrder: order,
  });
  const getAllFiles = useHTTPRequest(
    "/email-validation?" + urlSearchParams.toString(),
    "GET"
  );
  const deleteFiles = useHTTPRequest("/email-validation?", "DELETE");

  useEffect(() => {
    const parsedData = data ? JSON.parse(data.body) : {};
    const emails = parsedData.data ? parsedData.data : [];
    setTableData(emails);
    setTotalCount(parsedData?.metadata?.totalCount);
  }, [data]);
  useEffect(() => {
    refetchRows();
  }, [page, rowsPerPage, order, orderBy]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n.fileId);
      setSelected(newSelected);
      return;
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (event, id) => {
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

  const handleDeleteSelected = async () => {
    let canDelete = true;
    selected.forEach((value) => {
      const valueToCheck = tableData.find((val) => val.fileId === value);
      if (!valueToCheck.status) {
        canDelete = false;
      }
    }, true);
    if (!canDelete) {
      toast.error("Selected files have one that did not finish uploading!");

      return;
    }
    try {
      const response = await deleteFilesTrigger({ fileIds: selected });
      toast.success("Successfully removed!", { theme: "colored" });
      setSelected([]);
    } catch (error) {
      toast.error(error, { theme: "colored" });
    }
  };

  const csvDownload = async () => {
    const content = tableData.find((row) => {
      return row.fileId === selected[0];
    });
    if (!content) {
      return;
    }

    const sheet = utils.json_to_sheet(content.emails);

    const wb = utils.book_new();

    utils.book_append_sheet(wb, sheet, "Results");

    writeFile(wb, `${content.fileName}.xlsx`);
  };
  const handleDownload = async () => {
    try {
      csvDownload();
    } catch (error) {
      toast.error(error?.message ? error?.message : "Something went wrong", {
        theme: "colored",
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => {
    return selected.indexOf(id) !== -1;
  };
  const updateSorting = (column) => {
    if (column.id === orderBy) {
      setOrder(order === "asc" ? "desc" : "asc");
      return;
    }
    setOrderBy(column.id);
    setOrder("asc");
  };
  // // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  return (
    <>
      <Box sx={{ width: "100%", mt: "10px", px: "25px", mb: "75px" }}>
        {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
        <ValidationTableToolbar
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={tableData.length}
          handleRefresh={() => {
            refetchRows();
          }}
          loading={loading}
          handleDelete={() => {
            setVisibleDeleteDialog(true);
          }}
          handleDownload={handleDownload}
        />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              minHeight: 150,
              borderCollapse: "separate",
              border: "none",
            }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <ValidationTableHeader
              order={order}
              orderBy={orderBy}
              headCells={headCells}
              onChangeSorting={updateSorting}
            ></ValidationTableHeader>

            <TableBody
              className="relative"
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "5px 8px",
                  fontFamily: "Outfit",
                  height: "fit-content",
                  fontSize: 14,
                  // font-family: Outfit;
                },
              }}
            >
              {loading ? (
                <Backdrop
                  open
                  className="!absolute"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    backdropFilter: "blur(2px)",
                    zIndex: 10,
                  }}
                >
                  <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <CircularProgress size={"32px"}></CircularProgress>
                  </div>
                </Backdrop>
              ) : (
                <></>
              )}
              {!tableData.length && (
                <TableRow className="w-full ">
                  <TableCell colSpan={6}>
                    <Box className="w-full flex flex-col items-center justify-center">
                      <span className="font-OutfitBold text-2xl">
                        Nothing to show
                      </span>
                      <span className="font-Outfit text-md">
                        Upload a file by using "Start new upload" button
                      </span>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
              {tableData.map((row, index) => {
                const isItemSelected = isSelected(row.fileId);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <ValidationTableRow
                    isItemSelected={isItemSelected}
                    key={row.fileId}
                    row={row}
                    labelId={labelId}
                    handleSelect={handleSelect}
                    tableWidth={6}
                    setMenuAnchorEl={() => {}}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="flex w-full justify-end">
          <Pagination
            className="font-Outfit mt-2"
            count={Math.ceil(totalCount / rowsPerPage)}
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
      </Box>

      <ConfirmDeleteDialog
        open={visibleDeleteDialog}
        handleClose={() => {
          setVisibleDeleteDialog(false);
        }}
        handleYes={() => {
          handleDeleteSelected(true);
          setVisibleDeleteDialog(false);
        }}
      />
    </>
  );
}

export { EmailFilesTable };
