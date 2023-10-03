import { useForm } from 'react-hook-form';
import { useProbando } from '../../molecules/TeacherAddContent/useProbando';
import './TeacherAdd.scss';

interface props{
  isTeacherAdd:boolean,
  closeTeacherAdd:()=> void,
}
export const TeacherAdd = ({isTeacherAdd,closeTeacherAdd}:props) => {

  const {content} = useProbando();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`${isTeacherAdd ? "teacher-add" : 'hidden'}`}>
      <h1>Agregar docente</h1>
      <form className='teacher-add__form' onSubmit={handleSubmit(onSubmit)}>
        {
          content.map((item,index)=>(
          <div className={item.style} key={index}>
            <label className='teacher-add__name'>{item.label}</label>
            <input
              className='teacher-add__input'
              placeholder={item.placeholder}
              type="text"
              {
                ...register(`${item.label}`,{
                  required:{
                    value:true,
                    message: `${item.label} es requerido.`
                  },
                })
              }
              />
            {errors[item.label] && <span>{errors[item.label].message}</span>}
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
          <button onClick={closeTeacherAdd} className='teacher-add__button teacher-add__button--efect'>
            Cancelar
          </button>
          <button type='submit' className='teacher-add__button'>Agregar</button>
        </div>
      </form>
    </div>
  )
}
