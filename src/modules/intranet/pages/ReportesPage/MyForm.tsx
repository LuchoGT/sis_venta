import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  cursos: string;
  grado: string;
};

export const MyForm = () => {
  const { register, handleSubmit,reset } = useForm<FormData>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onSubmit = (data: FormData) => {
    // Agregar los valores seleccionados a la lista si ambos campos están llenos
    if (data.cursos && data.grado) {
      setSelectedItems([...selectedItems, `${data.cursos} - ${data.grado}`]);
    }
    reset();
    console.log(data);
    
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);

      // Actualizar el localStorage después de eliminar el elemento
      localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
  };

  const handleAddToLocalStorage = () => {
    // Almacena los valores en el localStorage como una cadena JSON
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  };

  useEffect(() => {
    // Recuperar los elementos almacenados en localStorage al cargar la página
    const storedItems = localStorage.getItem("selectedItems");
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);

  const isAddToLocalStorageDisabled = selectedItems.length === 0;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Curso</span>
          <select {...register("cursos")}>
            <option value="">Elegir curso</option>
            <option value="mat">Matematica</option>
            <option value="len">Lenguaje</option>
            <option value="fis">Fisica</option>
          </select>
        </div>
        <div>
          <span>Grado/Sección/Nivel/Turno</span>
          <select {...register("grado")}>
            <option value="">Elegir Salon</option>
            <option value="ta">3° - A - Primaria - Mañana</option>
            <option value="tb">3° - B - Primaria - Mañana</option>
            <option value="tc">3° - C - Primaria - Mañana</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
        <ul>
          <p>{selectedItems.length}cursos asignados</p>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}   <button onClick={() => handleRemoveItem(index)}>    ELIMINAR</button></li>
          ))}
        </ul>
        <button onClick={handleAddToLocalStorage} disabled={isAddToLocalStorageDisabled}>Agregar</button>
      </form>
    </div>
  );
};
