import * as Yup from "yup";

const ValidationSchema = Yup.object({
  email: Yup.string().email().required("Eamil required"),
  password: Yup.string().required().min(4),
});

export default ValidationSchema;
