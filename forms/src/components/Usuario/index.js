import "./style.css";
const Usuario = ({ info }) => {
  return (
    <div className="info-card">
      <h4>Informações do cadastro.</h4>
      <ul>
        <li>Apelido: {info.userName}</li>
        <li>Nome do usuário: {info.name}</li>
        <li>Senha: {info.password}</li>
        <li>Confirmação de senha: {info.passwordConfirm}</li>
        <li>Email: {info.email}</li>
        <li>Confirmação de email: {info.emailConfirm}</li>
        <li>Termos de uso: {info.checkbox === true ? "true" : "false"}</li>
      </ul>
    </div>
  );
};

export default Usuario;
