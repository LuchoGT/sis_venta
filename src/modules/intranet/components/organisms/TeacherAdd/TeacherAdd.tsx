import './TeacherAdd.scss';

interface props{
  isTeacherAdd:boolean,
  closeTeacherAdd:()=> void,
}
export const TeacherAdd = ({isTeacherAdd,closeTeacherAdd}:props) => {
  return (
    <div className={`${isTeacherAdd ? "teacher-add" : 'hidden'}`}>
      <h1>Agregar docente</h1>
      <form className='teacher-add__form'>
        <div className='teacher-add__content'>
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
        <div className='teacher-add__separate'/>
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
        </div>
        <div className='teacher-add__buttons'>
          <div onClick={closeTeacherAdd} className='teacher-add__button teacher-add__button--efect'>
            Cancelar
          </div>
          <div className='teacher-add__button'>Agregar</div>
        </div>
      </form>
    </div>
  )
}
