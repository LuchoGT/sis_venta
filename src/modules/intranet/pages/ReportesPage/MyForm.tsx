import { useState } from "react";
import {  useForm } from "react-hook-form";

type FormData = {
    selectField: string;
  };

export const MyForm = () => {

    const { register } = useForm<FormData>();

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleEnviarClick = () => {
        // Aquí actualizamos el valor de la etiqueta <p> con la opción seleccionada
        setSelectedOption(register.getValues("selectField"));
      };
    
  return (
    <div>
        <form>
        <div>
          <label htmlFor="selectField">Seleccione una opción:</label>
          <select {...register('selectField')}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleEnviarClick}>
            Enviar
          </button>
        </div>
      </form>
        <p>{selectedOption}</p>
    </div>
  )
}
