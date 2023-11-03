import { useForm } from "react-hook-form";
import { FormDatos2 } from "./interfaces";

interface props {
  onClose: () => void;
  onFormSubmit:(data:FormDatos2)=>void;
}
export const Form2 = ({ onClose,onFormSubmit}: props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const handleFormSubmit = (data:FormDatos2) => {
    console.log(data);
    onFormSubmit(data)
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Titulo</h1>
        <div>
          <label>Nombre</label>
          <input
            {...register("nombre", { required: "Nombre requerido" })}
            className={`input ${errors.nombre ? "input-error" : ""}`}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
        <div>
            <button type="submit">
              Agregar
            </button>
            <button type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
      </form>
    </div>
  );
};
