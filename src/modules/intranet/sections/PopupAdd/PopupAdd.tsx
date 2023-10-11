import { useForm } from "react-hook-form";
import "./PopupAdd.scss";

interface props {
  isOpenPopUp: boolean;
  closePopUp: () => void;
  title: string;
}

type FormData = {
  name: string;
};
export const PopupAdd = ({ isOpenPopUp, closePopUp, title }: props) => {
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
    closePopUp();
  };

  return (
    <div className={`${isOpenPopUp ? "popUp-add" : "hidden-popup"}`}>
      <div className="popUp-add__container">
        <div className="popUp-add__head">
          <p className="popUp-add__title">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
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
          <div className="popUp-add__content">
            <div>
              <span>Grado</span>
              <select name="year" id="year">
                <option value="">---</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
              </select>
            </div>
            <div>
              <span>Seccion</span>
              <select name="year" id="year">
                <option value="">---</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
              </select>
            </div>
            <div>
              <span>Nivel</span>
              <select name="year" id="year">
                <option value="">---</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
              </select>
            </div>
            <div>
              <span>Turno</span>
              <select name="year" id="year">
                <option value="">---</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
              </select>
            </div>
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
      </div>
    </div>
  );
};
