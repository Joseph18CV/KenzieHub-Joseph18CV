import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres")
    .max(16, "O nome pode ter no máximo 16 caracteres"),
    email: yup.string().required("O email é obrigatório").email("Insira um email válido"),
    password: yup.string()
    .required("A senha é obrigatória")
    .min(8, "A senha precisa ter no mínimo 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "Precisa de pelo menos 1 letra maiuscula")
    .matches(/(?=.*?[a-z])/, "Precisa de pelo menos 1 letra minuscula")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Precisa de pelo menos um caracter especial"),
    passwordConfirm: yup.string()
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir"),
    bio: yup.string().required("A bio é obrigatória")
    .min(10, "A bio deve ter no mínimo 10 caracteres")
    .max(30, "A bio pode ter no máximo 30 caracteres"),
    contact: yup.string().required("O contato é obrigatório").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Informe um telefone válido"),
    course_module: yup.string().required("O módulo é obrigatório")
})