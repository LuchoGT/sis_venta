import { SubmitHandler, useForm } from "react-hook-form";
import { useProbando } from "../../components/TeacherAddContent/useProbando";
import "./Form.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface props {
  isView: boolean;
  closeViewAdd: () => void;
}

interface FormData {
  nombres: string;
  apellidos: string;
}
export const Form = ({ closeViewAdd, isView }: props) => {
  const { content } = useProbando();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Almacenar los datos en localStorage
    const storedData = JSON.parse(localStorage.getItem('formData') || '[]');
    storedData.push(data);
    localStorage.setItem('formData', JSON.stringify(storedData));

    // Limpiar el formulario
    reset();
    closeViewAdd()
  };

  const onCancel = () => {
    // reset();
    closeViewAdd();
    reset();
  };

  // useEffect(() => {
  //   // Obtener los datos de localStorage al cargar la página
  //   const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
  //   setData(storedData);
  // }, []);

  return (
    <div className={`${isView ? "teacher-add" : "hidden-add"}`}>
      <h1>Agregar docente</h1>
      <form className="teacher-add__form" onSubmit={handleSubmit(onSubmit)}>
        {/* {content.map((item, index) => (
          <div className={item.style} key={index}>
            <label className="teacher-add__name">{item.label}</label>
            <input
              className="teacher-add__input"
              placeholder={item.placeholder}
              type="text"
              // required
              {...register(`${item.label}`, {
                required: {
                  value: true,
                  message: `${item.label} es requerido.`,
                },
              })}
            />
            {errors[item.label] && <span>{errors[item.label].message}</span>}
          </div>
        ))} */}
        <div className="teacher-add__content">
          <label className="teacher-add__name">Nombre</label>
          <input type="text" className="teacher-add__input"
            placeholder="Escribir nombre"{...register("nombres", { required: true })} />
          {errors.nombres && <span>Este campo es obligatorio</span>}
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Apellidos</label>
          <input className="teacher-add__input" type="text" placeholder="Escribir apellidos"{...register('apellidos', { required: true })} />
        {errors.apellidos && <span>Este campo es obligatorio</span>}
        </div>
        {/* <div className="teacher-add__content teacher-add__content--min">
          <label className="teacher-add__name">DNI</label>
          <input className="teacher-add__input" type="text" />
        </div>
        <div className="teacher-add__content teacher-add__content--min">
          <label className="teacher-add__name">Celular</label>
          <input className="teacher-add__input" type="text" />
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Correo</label>
          <input className="teacher-add__input" type="text" />
        </div>
        <div className="teacher-add__separate"></div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Usuario</label>
          <input className="teacher-add__input" type="text" />
        </div>
        <div className="teacher-add__content">
          <label className="teacher-add__name">Contraseña</label>
          <input className="teacher-add__input" type="text" />
        </div> */}
        <div className="teacher-add__buttons">
          <button
            onClick={onCancel}
            className="teacher-add__button teacher-add__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-add__button">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
