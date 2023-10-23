import { useForm } from "react-hook-form";
import './Room.scss';

interface props {
  tooglePopUp: () => void;
}
type FormData = {
  name: string;
};

export const RoomAdd = ({ tooglePopUp }: props) => {
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
      <div className="popUp-form__buttons">
        <button
          className="popUp-form__button popUp-form__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="popUp-form__button" disabled={!isValid}>
          Agregar
        </button>
      </div>
    </form>
  );
};
