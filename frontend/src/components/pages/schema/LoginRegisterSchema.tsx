import * as yup from "yup";

const loginRegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default loginRegisterSchema;
