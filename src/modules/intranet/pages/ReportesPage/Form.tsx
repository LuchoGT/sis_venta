import { useForm } from "react-hook-form";
import { FormDatos } from "./interfaces";
import { useEffect } from "react";

interface props {
  onClose: () => void;
  onFormSubmit: (data: FormDatos) => void;
  editingIndex: number | null;
  viewingIndex: number | null;
  data: FormDatos[];
}
export const Form = ({
  onClose,
  onFormSubmit,
  editingIndex,
  data,
  viewingIndex,
}: props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const handleFormSubmit = (data: FormDatos) => {
    console.log(data);
    onFormSubmit(data);
    onClose();
  };

  useEffect(() => {
    if (editingIndex !== null) {
      // Verificar que editingIndex no sea null, que data sea un array y que data[editingIndex] esté definido
      const editData = data[editingIndex];
      setValue("nombre", editData.nombre);
      setValue("apellido", editData.apellido);
      setValue("countries", editData.countries);
    } else if (viewingIndex !== null) {
      const itemToView = data[viewingIndex];
      setValue("nombre", itemToView.nombre);
      setValue("apellido", itemToView.apellido);
      setValue("countries", itemToView.countries);
    }
  }, [editingIndex, data, viewingIndex]);

  return (
    <div>
      {viewingIndex !== null ? (
        <h1>Detalle</h1>
      ) : (
        <h1>{editingIndex !== null ? "Editar " : "Agregar "}</h1>
      )}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Titulo</h1>
        <div>
          <label>Nombre</label>
          <input
            {...register("nombre", { required: "Nombre requerido" })}
            className={`input ${errors.nombre ? "input-error" : ""}`}
            disabled={viewingIndex !== null}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
        <div>
          <label>Apellido</label>
          <input
            {...register("apellido", { required: "Apellido requerido" })}
            className={`input ${errors.apellido ? "input-error" : ""}`}
            disabled={viewingIndex !== null}
          />
          {errors.apellido && <span>{errors.apellido.message}</span>}
        </div>
      {viewingIndex !== null && data[viewingIndex].countries
      ?
      (
        <div>
          <label>Departamentos y Distritos</label>
          <ul>
            {data[viewingIndex]?.countries.map((country, index) => (
              <li key={index}>{country.departamento} - {country.distrito}</li>
            ))}
          </ul>
        </div>
      ):(
        
        <div>
          <label>Departamentos y Distritos</label>
          <ul>
            No hay registro aun.
          </ul>
        </div>
      )
    
    }
        <div>
          <div>
            {viewingIndex !== null ? (
              <button type="button" onClick={onClose}>
                Salir
              </button>
            ) : (
              <div>
                <button type="submit">
                  {editingIndex !== null ? "Actualizar" : "Agregar"}
                </button>
                <button type="button" onClick={onClose}>
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
