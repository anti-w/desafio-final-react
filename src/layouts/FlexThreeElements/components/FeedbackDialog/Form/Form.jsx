import { InputLabel, Rating, TextField } from "@mui/material";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="nickname"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
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
            label="e-mail"
            helperText={errors.email?.message}
            error={!!errors.email}
          />
        )}
      />
      <Controller
        name="note"
        control={control}
        render={({ field }) => <Rating {...field} />}
      />
      <Controller
        name="feedback"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            helperText={errors.feedback?.message}
            label="Deixe seu feedback"
            error={!!errors.feedback}
            multiline
            fullWidth
            minRows={4}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
