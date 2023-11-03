import { FormPruebas } from "@/interfaces/interfaces";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './TeacherCourseAdd.scss'

interface props {
  onClose: () => void;
  viewingIndex: number | null;
  data: FormPruebas[];
  onAssign: (index: number, cursos: FormPruebas["cursos"]) => void; // Función para agregar datos
}


export const TeacherCourseAdd = ({ onClose, data, viewingIndex, onAssign }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormPruebas>();

  // const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<FormPruebas["cursos"]>([]);

  const handlEnlistar = (data: { course: string; room: string }) => {
    const { course, room } = data;

    // Verificar si ya existe un elemento con el mismo conjunto de course y room
    if (
      !selectedItems.some(
        (cursos) => cursos.course === course && cursos.room === room
      )
    ) {
      setSelectedItems([...selectedItems, { course, room }]);
    }
    reset();
  };

  const handleAgregar = () => {
    if (selectedItems.length > 0 && viewingIndex !== null) {
      onAssign(viewingIndex, selectedItems);
    }

    onClose();
  };

  useEffect(() => {
    const savedData = localStorage.getItem("teacherList");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Asegúrate de que selectedRowIndex sea válido antes de intentar acceder a los países
      // if (viewingIndex !== null) {
      //   // Verifica si los países están definidos antes de intentar acceder a su longitud
      //   if (parsedData[viewingIndex]?.cursos) {
      //     setSelectedItems(parsedData[viewingIndex].cursos);
      //   }
      // }
      if (viewingIndex !== null && parsedData.items[viewingIndex]?.cursos) {
        setSelectedItems(parsedData.items[viewingIndex].cursos);
      }
    }
  }, [viewingIndex]);
  const selectedData = viewingIndex !== null ? data[viewingIndex] : null;

  // const handleDelete = (index: number) => {
  //   const updatedItems = [...selectedItems];
  //   updatedItems.splice(index, 1);
  //   setSelectedItems(updatedItems);

  //   // Actualizar el localStorage después de eliminar el elemento
  //   // localStorage.setItem("practicando", JSON.stringify(updatedItems));
  //   const updatedData = [...data];
  //   updatedData[viewingIndex].cursos = updatedItems;
  //   localStorage.setItem("teacherList", JSON.stringify(updatedData));
  // };
  return (
    <form className="assign-add">
      <div className="assign-add__content">
        <p className="assign-add--title">Docente</p>
        {selectedData && (
          <span>{selectedData.nombres + " " + selectedData.apellidos}</span>
        )}
      </div>
      <div className="assign-add__content">
        <div className="assign-add__subcontent">
          <div className="assign-add__group">
            <span>Curso</span>
            <select
              className="assign-add__select"
              {...register("course", { required: "Curso requerido" })}
            >
              <option value="">Elegir curso</option>
              <option value="Matematica">Matematica</option>
              <option value="Lenguaje">Lenguaje</option>
              <option value="Fisica">Fisica</option>
            </select>
            {errors.course && <span>{errors.course.message}</span>}
          </div>
          <div className="assign-add__group assign-add__group--upgrade">
            <span>Grado/Sección/Nivel/Turno</span>
            <select
              className="assign-add__select assign-add__select--upgrade"
              {...register("room", { required: "Salon requerido" })}
            >
              <option value="">Elegir opcion</option>
              <option value="3 - A - Primaria -Mañana">
                3 - A - Primaria -Mañana
              </option>
              <option value="3 - B - Primaria -Mañana">
                3 - B - Primaria -Mañana
              </option>
              <option value="3 - C - Primaria -Mañana">
                3 - C - Primaria -Mañana
              </option>
            </select>
            {errors.room && <span>{errors.room.message}</span>}
          </div>
          <div className="assign-add__agregar" onClick={handleSubmit(handlEnlistar)}>
            <p>Agregar</p>
          </div>
        </div>
        <div className="assign-add__courses">
          <span>{selectedItems.length} cursos asignados</span>
          {selectedItems.length > 0 && (
            <div className="assign-add__list">
              <ul>
                {selectedItems.map((courses, index) => (
                  <li className="assign-add__item" key={index}>
                    {`${courses.course} - ${courses.room}`}
                    {/* <svg
                      onClick={() => handleDelete(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-square-x"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                      <path d="M9 9l6 6m0 -6l-6 6"></path>
                    </svg> */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="assign-add__buttons">
        <button
          className="assign-add__button assign-add__button--cancel"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleAgregar}
          className="assign-add__button"
          disabled={selectedItems.length === 0}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
