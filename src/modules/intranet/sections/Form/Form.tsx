import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormPruebas } from "@/interfaces/interfaces";
import "./Form.scss";
import { InputField } from "../../components/InputField/InputField";

interface props {
  onSubmit: SubmitHandler<FormPruebas>;
  onClose: () => void;
  editingIndex: number | null;
  data: FormPruebas[];
  viewingIndex: number | null;
}

export const Form = ({
  onClose,
  onSubmit,
  data,
  editingIndex,
  viewingIndex,
}: props) => {
  
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const handleFormSubmit = (formData: FormPruebas) => {
    onSubmit(formData);
    onClose();
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
      setValue("cursos", itemToEdit.cursos);
    } else if (viewingIndex !== null) {
      const itemToView = data[viewingIndex];
      setValue("nombres", itemToView.nombres);
      setValue("apellidos", itemToView.apellidos);
      setValue("dni", itemToView.dni);
      setValue("celular", itemToView.celular);
      setValue("correo", itemToView.correo);
      setValue("usuario", itemToView.usuario);
      setValue("password", itemToView.password);
      setValue("cursos", itemToView.cursos);
    }
  }, [editingIndex, viewingIndex, data]);

  return (
    <div className="teacher-add">
      {viewingIndex !== null ? (
        <h1>Detalle docente</h1>
      ) : (
        <h1>{editingIndex !== null ? "Editar docente" : "Agregar docente"}</h1>
      )}
      <form
        className="teacher-add__form"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* <div className="teacher-add__content">
          <label className="teacher-add__name">Nombre</label>
          <input
            type="text"
            className={`teacher-add__input ${errors.nombres ? "teacher-add__error" : ""}`}
            placeholder="Escribir nombre"
            disabled={viewingIndex !== null}
            {...register("nombres", { required: true })}
          />
          {errors.nombres && <span className="teacher-add__alert">Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Apellidos</label>
          <input
            className="teacher-add__input"
            type="text"
            placeholder="Escribir apellidos"
            disabled={viewingIndex !== null}
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
            disabled={viewingIndex !== null}
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
            disabled={viewingIndex !== null}
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
            disabled={viewingIndex !== null}
            {...register("correo", { required: true })}
          />
          {errors.correo && <span>Este campo es obligatorio</span>}
        </div> */}
        <InputField type="text" label="Nombre" name="nombres" register={register} error={errors.nombres} disabled={viewingIndex!==null} />
        <InputField type="text" label="Apellido" name="apellidos" register={register} error={errors.apellidos} disabled={viewingIndex!==null}/>
        <InputField type="text" label="DNI" name="dni" register={register} error={errors.dni} disabled={viewingIndex!==null} className="teacher-add__content--min" />
        <InputField type="text" label="Celular" name="celular" register={register} error={errors.celular} disabled={viewingIndex!==null} className="teacher-add__content--min"/>
        <InputField type="email"  label="Correo" name="correo" register={register} error={errors.correo} disabled={viewingIndex!==null} pattern="/^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/"/>
        {viewingIndex !== null  && data[viewingIndex].cursos ? (
          <div className="teacher-add__content teacher-add__content--courses">
            <label className="teacher-add__name">Cursos Asignados</label>
            <div className="teacher-add__courses">
              <ul className="teacher-add__list">
              {data[viewingIndex]?.cursos.map((cursos, index) => (
              <li className="teacher-add__item" key={index}>{cursos.course} - {cursos.room}</li>
            ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="teacher-add__login">
            <div className="teacher-add__separate"></div>
            {/* <div className="teacher-add__content">
              <label className="teacher-add__name">Usuario</label>
              <input
                className="teacher-add__input"
                type="text"
                placeholder="Escribir usuario"
                disabled={viewingIndex !== null}
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
                disabled={viewingIndex !== null}
                {...register("password", { required: true })}
              />
              {errors.password && <span>Este campo es obligatorio</span>}
            </div> */}
            <InputField type="text" label="Usuario" name="usuario" register={register} error={errors.usuario} disabled={viewingIndex!==null}/>
            <InputField type="password" label="Password" name="password" register={register} error={errors.password} disabled={viewingIndex!==null}/>
          </div>
        )}
        <div className="teacher-add__buttons">
          {viewingIndex !== null ? (
            <button
              type="submit"
              className="teacher-add__button teacher-add__button--efect"
              onClick={onClose}
            >
              Regresar
            </button>
          ) : (
            <div>
              <button
                onClick={onClose}
                className="teacher-add__button teacher-add__button--efect"
              >
                Cancelar
              </button>
              <button type="submit" className="teacher-add__button">
                {editingIndex !== null ? "Editar" : "Agregar"}
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
