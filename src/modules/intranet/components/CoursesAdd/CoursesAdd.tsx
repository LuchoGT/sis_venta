import { useForm } from "react-hook-form";
import './CoursesAdd.scss'

interface props {
  tooglePopUp: () => void;
}
type FormData = {
  name: string;
};

export const CoursesAdd = ({ tooglePopUp }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel = () => {
    reset();
    tooglePopUp();
  };

  return (
    <form className="popUp-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="popUp-form__content">
        <label>Nombre</label>
        <input
          type="text"
          className="popUp-form__input"
          {...register("name", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className="popUp-form__buttons">
        <button
          className="popUp-form__button popUp-form__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="popUp-form__button" disabled={!isValid}>
          Guardar 
        </button>
      </div>
    </form>
  );
};
