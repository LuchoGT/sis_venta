import { SubmitHandler, useForm } from "react-hook-form";
import { useProbando } from "../../components/TeacherAddContent/useProbando";
import "./Form.scss";
import { useForm2 } from "./useForm2";

interface props {
  sub?: string;
  onClose: () => void;
}

export const Form2 = ({ sub, onClose }: props) => {
  const { content } = useProbando();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onCancel = () => {
    onClose();
    reset();
  };

  return (
    <div>
      <h1>{sub}</h1>
      <form className="teacher-add__form">
        <div className="teacher-add__content">
          <label className="teacher-add__name">Nombre</label>
          <input
            type="text"
            className="teacher-add__input"
            placeholder="Escribir nombre"
            {...register("nombres", { required: true })}
          />
          {errors.nombres && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Apellidos</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir apellidos"
            {...register("apellidos", { required: true })}
          />
          {errors.apellidos && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content teacher-add__content--min">
          <label className="teacher-add__name">DNI</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir dni"
            {...register("dni", { required: true })}
          />
          {errors.dni && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content teacher-add__content--min">
          <label className="teacher-add__name">Celular</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir dni"
            {...register("dni", { required: true })}
          />
          {errors.dni && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Correo</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir correo"
            {...register("correo", { required: true })}
          />
          {errors.correo && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__separate"></div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Usuario</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir usuario"
            {...register("usuario", { required: true })}
          />
          {errors.usuario && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Contraseña</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__buttons">
          <button
            onClick={onCancel}
            className="teacher-add__button teacher-add__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-add__button">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};
