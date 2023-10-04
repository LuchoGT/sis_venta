import { useForm } from 'react-hook-form';
import './TeacherAdd.scss';
import { useProbando } from '../../components/TeacherAddContent/useProbando';

interface props{
  isView:boolean,
  title:string,
  closeView:()=>void
}
export const TeacherAdd = ({isView,title,closeView}:props) => {

  const {content} = useProbando();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel=()=>{
    // reset();
    closeView()
  }

  return (
    <div className={`${isView ? "teacher-add" : 'hidden'}`}>
      <h1>{title} docente</h1>
      <form className='teacher-add__form' onSubmit={handleSubmit(onSubmit)}>
        {
          content.map((item,index)=>(
          <div className={item.style} key={index}>
            <label className='teacher-add__name'>{item.label}</label>
            <input
              className='teacher-add__input'
              placeholder={item.placeholder}
              type="text"
              required
              {
                ...register(`${item.label}`,{
                  required:{
                    value:true,
                    message: `${item.label} es requerido.`
                  },
                  minLength:{
                    value: item.minLength,
                    message: `${item.label} minimo de ${item.minLength} caracteres`
                  }
                })
              }
              />
            {/* {errors[item.label] && <span>{errors[item.label].message}</span>} */}
          </div>
          ))
        }
        {/* <div className='teacher-add__content'>
          <label className='teacher-add__name'>Nombre</label>
          <input
            className='teacher-add__input'
            placeholder='Escribir nombre'
            type="text" />
        </div>
        <div className='teacher-add__content'>
          <label className='teacher-add__name'>Apellidos</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div>
        <div className='teacher-add__content teacher-add__content--min'>
          <label className='teacher-add__name'>DNI</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div>
        <div className='teacher-add__content teacher-add__content--min'>
          <label className='teacher-add__name'>Celular</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div>
        <div className='teacher-add__content'>
          <label className='teacher-add__name'>Correo</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div>
        <div className='teacher-add__separate'></div>
        <div className='teacher-add__content'>
          <label className='teacher-add__name'>Usuario</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div>
        <div className='teacher-add__content'>
          <label className='teacher-add__name'>Contraseña</label>
          <input
            className='teacher-add__input' 
            type="text" />
        </div> */}
        <div className='teacher-add__buttons'>
          <button onClick={onCancel} className='teacher-add__button teacher-add__button--efect'>Cancelar</button>
          <button type='submit' className='teacher-add__button'>Agregar</button>
        </div>
      </form>
    </div>
  )
}
