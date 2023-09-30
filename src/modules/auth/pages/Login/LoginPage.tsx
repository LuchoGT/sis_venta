import { useForm } from 'react-hook-form';
import './LoginPage.scss';

type FormData={
    email:string,
    password:string,
  }
export const LoginPage = (): JSX.Element => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
    <main className="login">
      <div className="login__container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <span className="form__title">Iniciar sesión</span>
          <div className="form__container">
            <label className="form__label">Email</label>
            <input
              type="email"
              placeholder="Ingrese email"
              className="form__input"
              required
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                  message: "Email no valido",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form__container">
            <label className="form__label">Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese contraseña"
              className="form__input"
              required
              {...register("password", {
                required: {
                  value: true,
                  message: "Password requerido",
                },
                minLength: {
                  value: 8,
                  message: "Password minimo 8 caracteres",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" className="form__button">
            Iniciar sesion
          </button>
        </form>
      </div>
    </main>
  );
};
