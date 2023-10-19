import { useForm } from "react-hook-form";

interface props {
  tooglePopUp: () => void;
}
type FormData = {
  name: string;
};

export const CourseAdd = ({ tooglePopUp }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form className="popUp-add__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="popUp-add__content">
        <label>Nombre</label>
        <input
          type="text"
          className="popUp-add__input"
          {...register("name", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className="popUp-add__buttons">
        <button
          className="popUp-add__button popUp-add__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="popUp-add__button">
          Agregar
        </button>
      </div>
    </form>
  );
};
