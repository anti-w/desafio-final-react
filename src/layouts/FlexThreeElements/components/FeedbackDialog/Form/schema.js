import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email().required(),
    nickname: yup.string().required(),
    feedback: yup.string().required(),
    note: yup.number().positive().integer().required(),
  })
  .required();
