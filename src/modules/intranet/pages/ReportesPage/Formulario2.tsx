import { useForm } from "react-hook-form";
import { FormValues } from "./Formulario";
import { useState, useEffect } from "react";

interface Formulario2Props {
  onClose: () => void;
  onAssign: (index: number, countries: string[]) => void; // Función para agregar datos
  selectedRowIndex:number|null;
  data:FormValues[];
}

export const Formulario2 = ({
  onClose,
  onAssign,
  selectedRowIndex,
  data
}: Formulario2Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);


  const handlEnlistar = (data: { countries: string }) => {
    // setSelectedCountries(data.countries);
    // setSelectedCountries([...selectedCountries,data.countries]);
    // reset();
    const countryToAdd = data.countries.trim(); // Elimina espacios al principio y al final

    if (countryToAdd && !selectedCountries.includes(countryToAdd)) {
      // Verifica si el país no está en la lista antes de agregarlo
      setSelectedCountries([...selectedCountries, countryToAdd]);
    }
    reset(); // Limpia el campo de entrada después de agregar el país

  };

  useEffect(() => {
    const savedData = localStorage.getItem('practicando');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Asegúrate de que selectedRowIndex sea válido antes de intentar acceder a los países
      if (selectedRowIndex !== null) {
        // Verifica si los países están definidos antes de intentar acceder a su longitud
        if (parsedData[selectedRowIndex]?.countries) {
          setSelectedCountries(parsedData[selectedRowIndex].countries);
        }
      }
    }
  }, [selectedRowIndex]);

  const handleAgregar = () => {
    // if (selectedCountries && selectedRowIndex!==null) {
    //   onAssign(selectedRowIndex,selectedCountries);
    // }

    if (selectedCountries.length>0 &&selectedRowIndex!==null) {
      onAssign(selectedRowIndex,selectedCountries);
    }

    onClose()
  };
 


      const selectedData = selectedRowIndex !== null ? data[selectedRowIndex] : null;

  return (
    <div>
      <h2>Formulario 2</h2>
      <form>
        <div>
        {selectedData && (
            <div>
              <p>Nombres: {selectedData.nombre + " "+selectedData.apellido}</p>
            </div>
          )}
          <div>
            <label>Country</label>
            <select
              {...register("countries", { required: "Country required" })}
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
            {errors.countries && <span>{errors.countries.message}</span>}
          </div>
          <button type="button" onClick={handleSubmit(handlEnlistar)}>
            Enlistar
          </button>
          {

            selectedCountries.length>0 &&
           <div>
              <p>Países seleccionados:</p>
              <ul>
                {selectedCountries.map((country, index) => (
                  <li key={index}>{country}</li>
                ))}
              </ul>
            </div>

          }
          <button onClick={onClose}>Cerrar Formulario2</button>
          <button type="button" onClick={handleAgregar}>Agregar</button>
        </div>
      </form>
    </div>
  );
};