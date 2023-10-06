import { useForm } from "react-hook-form";
import { useProbando } from "./useProbando";
import './TeacherEditContent.scss'
interface props {
  isViewEdit: boolean;
  closeEdit: () => void;
}
export const TeacherEditContent = ({ isViewEdit, closeEdit }: props) => {

    const {content} = useProbando();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel=()=>{
    // reset();
    closeEdit()
    reset()
  }
  return (
    <div className={`${isViewEdit ? "teacher-edit" : "hidden-edit"}`}>
      <h1>Editar docente</h1>
      <form className="teacher-edit__form" onSubmit={handleSubmit(onSubmit)}>
        {content.map((item, index) => (
          <div className={item.style} key={index}>
            <label className="teacher-edit__name">{item.label}</label>
            <input
              className="teacher-edit__input"
              placeholder={item.placeholder}
              type="text"
              // required
              {...register(`${item.label}`, {
                required: {
                  value: true,
                  message: `${item.label} es requerido.`,
                },
                // minLength:{
                //   value: item.minLength,
                //   message: `${item.label} minimo de ${item.minLength} caracteres`
                // }
              })}
            />
            {errors[item.label] && <span>{errors[item.label].message}</span>}
          </div>
        ))}
        
        <div className="teacher-edit__buttons">
          <button
            onClick={onCancel}
            className="teacher-edit__button teacher-edit__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-edit__button">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
