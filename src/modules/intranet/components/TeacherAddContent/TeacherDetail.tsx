import { useForm } from "react-hook-form";
import { useProbando } from "./useProbando";
import './TeacherDetail.scss';


interface props {
    isViewDetail: boolean;
    closeDetail: () => void;
}
export const TeacherDetail= ({ isViewDetail, closeDetail }: props) => {

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
    closeDetail()
    reset()
  }
  return (
    <div className={`${isViewDetail ? "teacher-detail" : "hidden-detail"}`}>
      <h1>Detalle docente</h1>
      <form className="teacher-detail__form" onSubmit={handleSubmit(onSubmit)}>
        {content.map((item, index) => (
          <div className={item.style} key={index}>
            <label className="teacher-detail__name">{item.label}</label>
            <input
              className="teacher-detail__input"
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
        <div className="teacher-detail__buttons">
          <button
            onClick={onCancel}
            className="teacher-detail__button teacher-detail__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-detail__button">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
