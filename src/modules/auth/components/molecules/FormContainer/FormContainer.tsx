
interface props{
    errors: any,
    register:any
}

export const FormContainer = ({errors,register}:props) => {
 
  return (
    <>
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
    
    </>
  );
};
