import { useForm } from "react-hook-form";

interface props {
  tooglePopUp: () => void;
}
type FormData = {
  name: string;
};

export const SectionAdd = ({ tooglePopUp }: props) => {
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
  );
};
