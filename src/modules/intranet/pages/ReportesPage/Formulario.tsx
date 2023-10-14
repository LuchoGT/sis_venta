import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import './form.scss'
interface FormularioProps {
  // onSubmit: (data: { nombre: string; apellido: string }) => void;
  onSubmit: SubmitHandler<FormValues>;
  onClose: () => void;
  editingIndex: number | null;
  data:FormValues[];
  viewingIndex:number | null;
}

export interface FormValues {
  nombre: string;
  apellido: string;
}

export const Formulario = ({
  onSubmit,
  onClose,
  editingIndex,
  data,
  viewingIndex
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
    }else if(viewingIndex!==null){
      const itemToView = data[viewingIndex];
      setValue('nombre', itemToView.nombre);
      setValue('apellido', itemToView.apellido);
    }
  }, [editingIndex, data,viewingIndex]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Nombre</label>
        <input {...register("nombre", { required: "Nombre requerido" })} disabled={viewingIndex !== null}/>
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>
      <div>
        <label>Apellido</label>
        <input {...register("apellido", { required: "Apellido requerido" })} disabled={viewingIndex !== null}/>
        {errors.apellido && <span>{errors.apellido.message}</span>}
      </div>
      <div>
           {viewingIndex !== null ? (
            <button type="button" onClick={onClose}>
              Salir
            </button>
          ) : (
            <div>
              <button type="submit">{editingIndex !== null ? 'Actualizar' : 'Agregar'}</button>
              <button type="button" onClick={onClose}>
                Cerrar
              </button>
            </div>
          )
        }
      </div>
    </form>
  );
};
