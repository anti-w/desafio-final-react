import { Box, Rating, TextField } from "@mui/material";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

import kakashi from "../../../../../images/kakashi-yo.png";
import Image from "mui-image";

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      nickname: "",
      note: 0,
      feedback: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        zIndex={999}
        sx={{
          width: { xs: 240, sm: 360, md: 420, lg: 500 },
          gap: { xs: 0.5 },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ my: 1 }}
              color="secondary"
              helperText={errors.nickname?.message}
              label="nickname"
              error={!!errors.nickname}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              color="secondary"
              sx={{ my: 1 }}
              label="e-mail"
              helperText={errors.email?.message}
              error={!!errors.email}
            />
          )}
        />
        <Controller
          name="note"
          control={control}
          render={({ field }) => <Rating {...field} sx={{ my: 1 }} />}
        />
        <Controller
          name="feedback"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors.feedback?.message}
              color="secondary"
              label="O que achou do site?"
              error={!!errors.feedback}
              multiline
              sx={{ my: 1 }}
              minRows={4}
            />
          )}
        />

        <input type="submit" />
      </Box>
      <Image
        position="absolute"
        style={{ opacity: 0.3, bottom: 0 }}
        src={kakashi}
        width={100}
        fit="contain"
      />
    </>
  );
};

export default Form;
