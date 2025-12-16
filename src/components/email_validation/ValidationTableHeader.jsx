import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { kompassColors } from "@/theme/palette";
import PropTypes from "prop-types";

function ValidationTableHeader(props) {
  const { order, orderBy, headCells, onChangeSorting } = props;

  return (
    <TableHead
      sx={{
        "& .MuiTableCell-sizeMedium": {
          padding: "5px 10px",
          fontFamily: "OutfitMedium",
          fontSize: 13,
          color: kompassColors.black,
        },
      }}
    >
      <TableRow
        sx={{
          "& .MuiTableCell-root": {
            borderColor: kompassColors.light,
            bgcolor: "#E8E7E7",
          },
          "& .MuiTableCell-root:first-child": {
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          },
          "& .MuiTableCell-root:last-child": {
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          },
        }}
      >
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align ? headCell.align : "!left"}
            padding={"none"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id && !headCell.disableSorting}
              direction={order}
              onClick={() => onChangeSorting(headCell)}
              hideSortIcon={true}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
ValidationTableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default ValidationTableHeader;
