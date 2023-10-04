import { SubmitHandler, useForm } from "react-hook-form";
import "./LoginPage.scss";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../../components/molecules/FormContainer/FormContainer";

type FormData = {
  email: string;
  password: string;
};
export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { onLogin } = useAuth();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onLogin(data.email, data.password);
    navigate("/dash/docente");
    console.log(data);
  };
  return (
    <main className="login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <span className="form__title">Iniciar sesión</span>
        <FormContainer 
          register={register} 
          errors={errors}
        />
        <button type="submit" className="form__button">Iniciar sesion</button>
      </form>
    </main>
  );
};
