import { useEffect } from "react";
// import { useProbando } from "../../components/TeacherAddContent/useProbando";
import "./Form.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "@/interfaces/interfaces";


interface props {
  // toggleViewDocente:()=>void,
  // editarTituloFormDocente:(title:string)=>void,
  onSubmit: SubmitHandler<FormData>;
  onClose: () => void;
  editingIndex: number | null;
  data:FormData[];
}

export const Form = ({ onClose,onSubmit,data,editingIndex }: props) => {

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const handleFormSubmit = (formData: FormData) => {
    onSubmit(formData);
    onClose()
  };

  useEffect(() => {
    if (editingIndex !== null) {
      const itemToEdit = data[editingIndex];
      setValue("nombres", itemToEdit.nombres);
      setValue("apellidos", itemToEdit.apellidos);
      setValue("dni", itemToEdit.dni);
      setValue("celular", itemToEdit.celular);
      setValue("correo", itemToEdit.correo);
      setValue("usuario", itemToEdit.usuario);
      setValue("password", itemToEdit.password);
    }
  }, [editingIndex, data]);

  return (
    <div className='teacher-add'>
      <h1>{editingIndex !== null ? 'Editar docente' : 'Agregar docente'}</h1>
      <form className="teacher-add__form" onSubmit={handleSubmit(handleFormSubmit)}>
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
            {...register("celular", { required: true })}
          />
          {errors.celular && <span>Este campo es obligatorio</span>}
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
            onClick={onClose}
            className="teacher-add__button teacher-add__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-add__button">
          {editingIndex !== null ? 'Editar' : 'Agregar'}
          </button>
        </div>
      </form>
    </div>
  );
};
