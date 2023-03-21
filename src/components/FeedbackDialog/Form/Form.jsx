import { Rating, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      nickname: "",
      note: 0,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} helperText="E-mail" />}
      />
      <Controller
        name="nickname"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} helperText="Nickname" label="nickname" />
        )}
      />
      <Controller
        name="note"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Rating {...field} />}
      />
      <Controller
        name="feedback"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            helperText="Your Feedback"
            label="feedback"
            multiline
            fullWidth
            minRows={6}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
