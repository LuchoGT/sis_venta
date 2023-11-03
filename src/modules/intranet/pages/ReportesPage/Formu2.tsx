import { useForm } from "react-hook-form";
import { FormDatos, Practica } from "./interfaces";
import { useState,useEffect } from "react";

interface Formulario2Props {
  onClose: () => void;
  selectedRowIndex: number | null;
  data: FormDatos[];
  onAssign: (index: number, countries: FormDatos["countries"]) => void; // Función para agregar datos
}

export const Formu2 = ({ onClose,selectedRowIndex,data,onAssign}: Formulario2Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDatos>();

  const selectedData =
  selectedRowIndex !== null ? data[selectedRowIndex] : null;

  const [selectedCountries, setSelectedCountries] = useState<FormDatos['countries']>([]);

  const handlEnlistar = (data: { departamento: string; distrito: string }) => {

    //   setSelectedCountries([
    //   ...selectedCountries,
    //   { departamento: data.departamento, distrito: data.distrito },
    // ]);
    const { departamento, distrito } = data;

    // Verificar si ya existe un elemento con el mismo conjunto de departamento y distrito
    if (!selectedCountries.some(country => country.departamento === departamento && country.distrito === distrito)) {
      setSelectedCountries([...selectedCountries, { departamento, distrito }]);
    }
    reset();
  };

  const handleAgregar = () => {
    // if (selectedCountries && selectedRowIndex!==null) {
    //   onAssign(selectedRowIndex,selectedCountries);
    // }

    if (selectedCountries.length > 0 && selectedRowIndex !== null) {
      onAssign(selectedRowIndex, selectedCountries);
    }

    onClose();
  };

  useEffect(() => {
    const savedData = localStorage.getItem("practicaData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Asegúrate de que selectedRowIndex sea válido antes de intentar acceder a los países
      if (selectedRowIndex !== null && parsedData.items[selectedRowIndex]?.countries) {
        setSelectedCountries(parsedData.items[selectedRowIndex].countries);
      }
    }
  }, [selectedRowIndex]);
  

  return (
    <div>
      <h2>Formulario para registrar departamento y distrito</h2>
      <form >
        <div>
        {selectedData && (
            <div>
              <p>
                Nombres: {selectedData.nombre + " " + selectedData.apellido}
              </p>
            </div>
          )}
        </div>
        <div>
          <label>Country</label>
          <select
            {...register("departamento", { required: "Country required" })}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Agrega más opciones según tus necesidades */}
          </select>
          {errors.departamento && <span>{errors.departamento.message}</span>}
        </div>
        <div>
          <label>Distrito</label>
          <select {...register("distrito", { required: "Distrito requerido" })}>
            <option value="">Selecciona un distrito</option>
            <option value="Distrito1">Distrito 1</option>
            <option value="Distrito2">Distrito 2</option>
            {/* Agrega más opciones según tus necesidades */}
          </select>
          {errors.distrito && <span>{errors.distrito.message}</span>}
        </div>
        <button type="button" onClick={handleSubmit(handlEnlistar)}>Enlistar</button>
        {selectedCountries.length > 0 && (
            <div>
              <p>Países seleccionados:</p>
              <ul>
                {selectedCountries.map((country, index) => (
                  <li
                    key={index}
                  >{`${country.departamento} - ${country.distrito}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        <button onClick={onClose}>Cerrar Formulario2</button>
        <button type="button"onClick={handleAgregar} disabled={selectedCountries.length === 0}>Agregar</button>
      </form>
    </div>
  );
};
