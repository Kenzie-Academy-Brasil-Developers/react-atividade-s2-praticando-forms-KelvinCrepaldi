import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Cadastro = ({ setInfo }) => {
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "len",
        "O campo deve ter no minimo 18 caracteres",
        (val) => val.length >= 18
      ),
    name: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "len",
        "O campo deve ter no minimo 18 caracteres",
        (val) => val.length >= 18
      ),
    email: yup
      .string()
      .email("Campo deve ser um Email válido")
      .required("Campo obrigatório"),
    emailConfirm: yup
      .string()
      .email("Campo deve ser um Email válido")
      .required("Campo obrigatório")
      .oneOf([yup.ref("email")], "Email de confirmação diferente"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "senha invalida. deve conter no minimo 8 caracteres,uma letra minúscula,uma letra maiúscula, um número e um caractere especial."
      ),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senha de confirmação diferente"),
    checkbox: yup
      .boolean()
      .oneOf([true], "O campo dos termos de uso é obrigatório. "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    setInfo(data);
    console.log(data);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(handleMyForm)}>
        <input placeholder="Nome de usuário" {...register("userName")} />
        {errors.userName?.message && <p>{errors.userName.message}</p>}
        <input placeholder="Nome completo" {...register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <input placeholder="Endereço de Email" {...register("email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <input placeholder="Confirme seu Email" {...register("emailConfirm")} />
        {errors.emailConfirm?.message && <p>{errors.emailConfirm.message}</p>}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm?.message && (
          <p>{errors.passwordConfirm.message}</p>
        )}
        <div>
          <input
            className="checkbox-style"
            type="checkbox"
            {...register("checkbox")}
          />{" "}
          <label className="checkbox-text">
            Eu aceito os termos de uso da aplicação
          </label>
          {errors.checkbox?.message && <p>{errors.checkbox.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Cadastro;
