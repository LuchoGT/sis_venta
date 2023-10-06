import "./PopupAdd.scss";

interface props {
  isCourseAdd: boolean;
  closeCourse:()=>void;
  title: string
}
export const PopupAdd = ({ isCourseAdd,closeCourse,title }: props) => {
  return (
    <div className={`${isCourseAdd ? "popUp-add" : "hidden"}`}>
      <div className="popUp-add__container">
        <div className="popUp-add__head">
          <p className="popUp-add__title">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
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
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <form className="popUp-add__form">
          <label>Nombre</label>
          <input 
            type="text" 
            className="popUp-add__input"  
          />
          <div className="popUp-add__buttons">
            <button
              className="popUp-add__button popUp-add__button--cancel"
              onClick={closeCourse}
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="popUp-add__button">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
