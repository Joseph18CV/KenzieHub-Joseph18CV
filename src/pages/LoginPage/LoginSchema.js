import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().required("O email é obrigatório").email("Insira um email válido"),
    password: yup.string().required("A senha é obrigatória")
})