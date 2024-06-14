"use client";

import { Box, TextField, Typography } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function ProductEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({});

  const productsData = queryResult?.data?.data;

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("urlImg", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.urlImg}
          helperText={(errors as any)?.urlImg?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Image URL"}
          name="urlImg"
        />
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Name"}
          name="name"
        />
        <TextField
          {...register("gender", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.gender}
          helperText={(errors as any)?.gender?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Gender"}
          name="gender"
        />
        <TextField
          {...register("brand", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.brand}
          helperText={(errors as any)?.brand?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Brand"}
          name="brand"
        />
        <TextField
          {...register("listUrlImg", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.listUrlImg}
          helperText={(errors as any)?.listUrlImg?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"List of Image URLs (comma separated)"}
          name="listUrlImg"
        />
        <TextField
          {...register("department", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.department}
          helperText={(errors as any)?.department?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Department"}
          name="department"
        />
        <TextField
          {...register("price", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.price}
          helperText={(errors as any)?.price?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label={"Price"}
          name="price"
        />
        <TextField
          {...register("assessment", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.assessment}
          helperText={(errors as any)?.assessment?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label={"Assessment"}
          name="assessment"
        />
        <TextField
          {...register("discountValue", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.discountValue}
          helperText={(errors as any)?.discountValue?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label={"Discount Value"}
          name="discountValue"
        />
        <TextField
          {...register("listOfSize", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.listOfSize}
          helperText={(errors as any)?.listOfSize?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"List of Sizes (comma separated)"}
          name="listOfSize"
        />
        <TextField
          {...register("trending", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.trending}
          helperText={(errors as any)?.trending?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Trending (true/false)"}
          name="trending"
        />
        <TextField
          {...register("description", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.description}
          helperText={(errors as any)?.description?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Description"}
          name="description"
        />
      </Box>
    </Edit>
  );
}
