import { SubmitHandler, useForm } from "react-hook-form";
import './CoursesAdd.scss'
import { FormCourses } from "@/interfaces/interfaces";

interface props {
  tooglePopUp: () => void;
  onFormSubmit: (data:FormCourses)=>void;
}


export const CoursesAdd = ({ tooglePopUp,onFormSubmit }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
    reset,
  } = useForm();

  const handleForSubmit = (formData:FormCourses) => {
    onFormSubmit(formData);
  };

  const onCancel = () => {
    reset();
    tooglePopUp();
  };

  return (
    <form className="popUp-form" onSubmit={handleSubmit(handleForSubmit)}>
      <div className="popUp-form__content">
        <label>Nombre</label>
        <input
          type="text"
          className="popUp-form__input"
          {...register("nombres", {
            required: {
              value: true,
              message: "nombre es requerido",
            },
          })}
        />
        {errors.nombres && <span>{errors.nombres.message}</span>}
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
