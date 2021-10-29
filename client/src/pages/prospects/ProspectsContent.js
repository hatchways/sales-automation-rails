import React from "react";
import moment from "moment";

import { TableRow, TableCell, Grid, CircularProgress } from "@material-ui/core";

import PageTitle from "pages/mainlayout/PageTitle";
import PaginatedTable from "common/PaginatedTable";

const Content = ({
  paginatedData,
  isDataLoading,
  count,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <PageTitle>Prospects</PageTitle>
      {isDataLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <PaginatedTable
          paginatedData={paginatedData}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          renderRowHeader={() => (
            <TableRow>
              <TableCell variant="head">Email</TableCell>
              <TableCell variant="head">First Name</TableCell>
              <TableCell variant="head">Last Name</TableCell>
              <TableCell variant="head">Created</TableCell>
              <TableCell variant="head">Updated</TableCell>
            </TableRow>
          )}
          renderRowData={(data) => (
            <TableRow key={data.id} hover>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.first_name}</TableCell>
              <TableCell>{data.last_name}</TableCell>
              <TableCell>{moment(data.created_at).format("MMM d")}</TableCell>
              <TableCell>{moment(data.updated_at).format("MMM d")}</TableCell>
            </TableRow>
          )}
        />
      )}
    </>
  );
};

export default Content;
