import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface FormularioProps {
  // onSubmit: (data: { nombre: string; apellido: string }) => void;
  onSubmit: SubmitHandler<FormValues>;
  onClose: () => void;
  editingIndex: number | null;
  data:FormValues[];
}

export interface FormValues {
  nombre: string;
  apellido: string;
}

export const Formulario = ({
  onSubmit,
  onClose,
  editingIndex,
  data
}: FormularioProps) => {



  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const handleFormSubmit = (formData: FormValues) => {
    onSubmit(formData);
    onClose();
  };

  useEffect(() => {
    if (editingIndex !== null) {
      const itemToEdit = data[editingIndex];
      setValue("nombre", itemToEdit.nombre);
      setValue("apellido", itemToEdit.apellido);
    }
  }, [editingIndex, data]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Nombre</label>
        <input {...register("nombre", { required: "Nombre requerido" })} />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>
      <div>
        <label>Apellido</label>
        <input {...register("apellido", { required: "Apellido requerido" })} />
        {errors.apellido && <span>{errors.apellido.message}</span>}
      </div>
      <div>
        <button type="submit">{editingIndex !== null ? 'Actualizar' : 'Agregar'}</button>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </form>
  );
};
