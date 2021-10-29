import React from "react";
import moment from "moment";

import { TableRow, TableCell, Grid, CircularProgress } from "@material-ui/core";

import PaginatedTable from "common/PaginatedTable";
import PageTitle from "pages/mainlayout/PageTitle";

const CampaignsContent = ({
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
      <PageTitle>Campaigns</PageTitle>
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
              <TableCell variant="head">Name</TableCell>
              <TableCell variant="head">Steps</TableCell>
              <TableCell variant="head">Prospects</TableCell>
              <TableCell variant="head">Created</TableCell>
            </TableRow>
          )}
          renderRowData={(data) => (
            <TableRow key={data.id} hover>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.step_count || 0}</TableCell>
              <TableCell>{data.prospect_count || 0}</TableCell>
              <TableCell>{moment(data.created_at).format("MMM d")}</TableCell>
            </TableRow>
          )}
        />
      )}
    </>
  );
};

export default CampaignsContent;
