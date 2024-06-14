"use client";

import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";

export default function ProductShow() {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {"Image URL"}
        </Typography>
        <TextField value={record?.urlImg} />

        <Typography variant="body1" fontWeight="bold">
          {"Name"}
        </Typography>
        <TextField value={record?.name} />

        <Typography variant="body1" fontWeight="bold">
          {"Gender"}
        </Typography>
        <TextField value={record?.gender} />

        <Typography variant="body1" fontWeight="bold">
          {"Brand"}
        </Typography>
        <TextField value={record?.brand} />

        <Typography variant="body1" fontWeight="bold">
          {"List of Image URLs"}
        </Typography>
        <TextField value={record?.listUrlImg?.join(", ")} />

        <Typography variant="body1" fontWeight="bold">
          {"Department"}
        </Typography>
        <TextField value={record?.department} />

        <Typography variant="body1" fontWeight="bold">
          {"Price"}
        </Typography>
        <TextField value={record?.price} />

        <Typography variant="body1" fontWeight="bold">
          {"Assessment"}
        </Typography>
        <TextField value={record?.assessment} />

        <Typography variant="body1" fontWeight="bold">
          {"Discount Value"}
        </Typography>
        <TextField value={record?.discountValue} />

        <Typography variant="body1" fontWeight="bold">
          {"List of Sizes"}
        </Typography>
        <TextField value={record?.listOfSize?.join(", ")} />

        <Typography variant="body1" fontWeight="bold">
          {"Trending"}
        </Typography>
        <TextField value={record?.trending ? "Yes" : "No"} />

        <Typography variant="body1" fontWeight="bold">
          {"Description"}
        </Typography>
        <TextField value={record?.description} />
      </Stack>
    </Show>
  );
}
