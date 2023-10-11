import { useForm } from 'react-hook-form';
import { useProbando } from './useProbando';


interface props{
    title:string,
    ct:string,
    onClose:()=>void,
    }
export const Probando = ({title,ct,onClose}:props) => {

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
        onClose()
        reset()
      }
  return (
    <div>
         <h1>{title} docente</h1>
      <form className="teacher-add__form" onSubmit={handleSubmit(onSubmit)}>
        {content.map((item, index) => (
          <div className={item.style} key={index}>
            <label className="teacher-add__name">{item.label}</label>
            <input
              className="teacher-add__input"
              placeholder={item.placeholder}
              type="text"
              // required
              {...register(`${item.label}`, {
                required: {
                  value: true,
                  message: `${item.label} es requerido.`,
                },
              })}
            />
          </div>
        ))}
        <p>{ct}</p>
        <div className="teacher-add__buttons">
          <button
            onClick={onCancel}
            className="teacher-add__button teacher-add__button--efect"
          >
            Cancelar
          </button>
          <button type="submit" className="teacher-add__button">
            Agregar
          </button>
        </div>
      </form>
    </div>
  )
}
