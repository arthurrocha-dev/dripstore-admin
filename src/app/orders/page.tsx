"use client";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import Cookies from "js-cookie";
import React from "react";

const { token } = JSON.parse(Cookies.get("auth") ?? "");

export default function BlogPostList() {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: ordersData, isLoading: ordersIsLoading } = useMany({
    resource: "orders",
    ids:
      dataGridProps?.rows
        ?.map((item: any) => item?.orders?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
    meta: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "order_number",
        flex: 1,
        headerName: "Order Number",
        minWidth: 200,
      },
      {
        field: "customer_id",
        flex: 1,
        headerName: "Customer ID",
        minWidth: 250,
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [ordersData]
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
}
