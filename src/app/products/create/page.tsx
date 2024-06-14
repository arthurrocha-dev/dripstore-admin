"use client";

import { Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export default function ProductCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({});

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={handleSubmit(onFinish)}
      >
        <TextField
          {...register("urlImg", {
            required: "This field is required",
          })}
          error={!!errors.urlImg}
          helperText={(errors as any).urlImg?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Image URL"
          name="urlImg"
        />
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!errors.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Name"
          name="name"
        />
        <TextField
          {...register("gender", {
            required: "This field is required",
          })}
          error={!!errors.gender}
          helperText={(errors as any).gender?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Gender"
          name="gender"
        />
        <TextField
          {...register("brand", {
            required: "This field is required",
          })}
          error={!!errors.brand}
          helperText={(errors as any).brand?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Brand"
          name="brand"
        />
        <TextField
          {...register("listUrlImg", {
            required: "This field is required",
          })}
          error={!!errors.listUrlImg}
          helperText={(errors as any).listUrlImg?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="List of Image URLs (comma separated)"
          name="listUrlImg"
        />
        <TextField
          {...register("department", {
            required: "This field is required",
          })}
          error={!!errors.department}
          helperText={(errors as any).department?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Department"
          name="department"
        />
        <TextField
          {...register("price", {
            required: "This field is required",
          })}
          error={!!errors.price}
          helperText={(errors as any).price?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Price"
          name="price"
        />
        <TextField
          {...register("assessment", {
            required: "This field is required",
          })}
          error={!!errors.assessment}
          helperText={(errors as any).assessment?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Assessment"
          name="assessment"
        />
        <TextField
          {...register("discountValue", {
            required: "This field is required",
          })}
          error={!!errors.discountValue}
          helperText={(errors as any).discountValue?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Discount Value"
          name="discountValue"
        />
        <TextField
          {...register("listOfSize", {
            required: "This field is required",
          })}
          error={!!errors.listOfSize}
          helperText={(errors as any).listOfSize?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="List of Sizes (comma separated)"
          name="listOfSize"
        />
        <Controller
          name="trending"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                value={
                  field.value !== undefined ? String(field.value) : "false"
                }
                label="Trending"
                onChange={(e) => field.onChange(e.target.value === "true")}
              >
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            );
          }}
        />
        <TextField
          {...register("description", {
            required: "This field is required",
          })}
          error={!!errors.description}
          helperText={(errors as any).description?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          label="Description"
          name="description"
        />
      </Box>
    </Create>
  );
}
