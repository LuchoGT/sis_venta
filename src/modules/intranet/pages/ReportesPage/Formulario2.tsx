import { useForm } from "react-hook-form";
import { Countries, FormValues } from "./Formulario";
import { useState, useEffect } from "react";

interface Formulario2Props {
  onClose: () => void;
  onAssign: (index: number, countries: FormValues["countries"]) => void; // Función para agregar datos
  selectedRowIndex: number | null;
  data: FormValues[];
}

export const Formulario2 = ({
  onClose,
  onAssign,
  selectedRowIndex,
  data,
}: Formulario2Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  // const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  // const [selectedCountries, setSelectedCountries] = useState<Countries[]>([]);

  const [selectedCountries, setSelectedCountries] = useState<FormValues['countries']>([]);

  // const handlEnlistar = (data: { countries: string }) => {
  //   // setSelectedCountries(data.countries);
  //   // setSelectedCountries([...selectedCountries,data.countries]);
  //   // setSelectedCountries([...selectedCountries,{departamento:data.countries}]);
  //   // reset();
  //   // const countryToAdd = data.countries.trim(); // Elimina espacios al principio y al final

  //   // if (countryToAdd && !selectedCountries.includes(countryToAdd)) {
  //   //   // Verifica si el país no está en la lista antes de agregarlo
  //   //   setSelectedCountries([...selectedCountries, countryToAdd]);
  //   // }
  //   const countryToAdd = data.countries.trim(); // Elimina espacios al principio y al final

  // if (countryToAdd && !selectedCountries.some(country => country.departamento === countryToAdd)) {
  //   setSelectedCountries([...selectedCountries, { departamento: countryToAdd }]);
  // }
  //   reset();

  // };
  // const handlEnlistar = (data: { countries: Countries }) => {

  // //   const countryToAdd = data.countries.trim(); // Elimina espacios al principio y al final

  // // if (countryToAdd && !selectedCountries.some(country => country.departamento === countryToAdd)) {
  // //   setSelectedCountries([...selectedCountries, { departamento: countryToAdd }]);
  // // }
  // //   reset();

  //   setSelectedCountries([...selectedCountries, data.countries]);
  // reset();

  // };

  const handlEnlistar = (data: { departamento: string; distrito: string }) => {
    // setSelectedCountries([
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

  useEffect(() => {
    const savedData = localStorage.getItem("practicando");
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

    if (selectedCountries.length > 0 && selectedRowIndex !== null) {
      onAssign(selectedRowIndex, selectedCountries);
    }

    onClose();
  };

  const handleEliminar = (index: number) => {
    const updatedItems = [...selectedCountries];
    updatedItems.splice(index, 1);
    setSelectedCountries(updatedItems);

    // Actualizar el localStorage después de eliminar el elemento
    // localStorage.setItem("practicando", JSON.stringify(updatedItems));
    const updatedData = [...data];
    updatedData[selectedRowIndex].countries = updatedItems;
    localStorage.setItem('practicando', JSON.stringify(updatedData));
  };

  const selectedData =
    selectedRowIndex !== null ? data[selectedRowIndex] : null;

  return (
    <div>
      <h2>Formulario 2</h2>
      <form>
        <div>
          {selectedData && (
            <div>
              <p>
                Nombres: {selectedData.nombre + " " + selectedData.apellido}
              </p>
            </div>
          )}
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
            <select
              {...register("distrito", { required: "Distrito requerido" })}
            >
              <option value="">Selecciona un distrito</option>
              <option value="Distrito1">Distrito 1</option>
              <option value="Distrito2">Distrito 2</option>
              {/* Agrega más opciones según tus necesidades */}
            </select>
            {errors.distrito && <span>{errors.distrito.message}</span>}
          </div>
          <button type="button" onClick={handleSubmit(handlEnlistar)}>
            Enlistar
          </button>
          {selectedCountries.length > 0 && (
            <div>
              <p>Países seleccionados:</p>
              <ul>
                {selectedCountries.map((country, index) => (
                  <li
                    key={index}
                  >{`${country.departamento} - ${country.distrito}`}
                  <button onClick={()=>handleEliminar(index)}>Eliminar</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={onClose}>Cerrar Formulario2</button>
          <button type="button" onClick={handleAgregar}  disabled={selectedCountries.length === 0}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
